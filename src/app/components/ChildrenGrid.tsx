import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";
import { SectionHeading } from "./SectionHeading";
import { ChildProfileCard } from "./ChildProfileCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "./ui/pagination";
import { getChildren } from "@/app/lib/aafStore";

const PAGE_SIZE = 3;

export function ChildrenGrid() {
  const [page, setPage] = useState(1);

  // Once a child is spoken for, they come off the public list - this also
  // avoids two sponsors committing to the same child at once.
  const availableChildren = getChildren().filter(
    (child) => child.status === "available",
  );

  const pageCount = Math.max(1, Math.ceil(availableChildren.length / PAGE_SIZE));
  const pageChildren = availableChildren.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE,
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FadeIn>
            <SectionLabel>Available Children</SectionLabel>
            <SectionHeading>Choose a Child to Sponsor</SectionHeading>
          </FadeIn>
        </div>

        {availableChildren.length === 0 ? (
          <p className="text-center text-slate-600">
            All children are currently sponsored - please check back soon.
          </p>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pageChildren.map((child, index) => (
                <FadeIn key={child.id} delay={index * 0.05}>
                  <ChildProfileCard child={child} />
                </FadeIn>
              ))}
            </div>

            {pageCount > 1 && (
              <Pagination className="mt-12">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setPage((p) => Math.max(1, p - 1));
                      }}
                      className={
                        page === 1 ? "pointer-events-none opacity-50" : ""
                      }
                    />
                  </PaginationItem>

                  {Array.from({ length: pageCount }, (_, i) => i + 1).map(
                    (pageNumber) => (
                      <PaginationItem key={pageNumber}>
                        <PaginationLink
                          href="#"
                          isActive={pageNumber === page}
                          onClick={(e) => {
                            e.preventDefault();
                            setPage(pageNumber);
                          }}
                        >
                          {pageNumber}
                        </PaginationLink>
                      </PaginationItem>
                    ),
                  )}

                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setPage((p) => Math.min(pageCount, p + 1));
                      }}
                      className={
                        page === pageCount ? "pointer-events-none opacity-50" : ""
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </>
        )}
      </div>
    </section>
  );
}
