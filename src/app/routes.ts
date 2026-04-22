import { createBrowserRouter } from "react-router";
import { HomePage } from "@/app/pages/HomePage";
import { AboutPage } from "@/app/pages/AboutPage";
import { ContactPage } from "@/app/pages/ContactPage";
import { GalleryPage } from "@/app/pages/GalleryPage";
import { DirectorPage } from "@/app/pages/DirectorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/home",
    Component: HomePage,
  },
  {
    path: "/director/:id",
    Component: DirectorPage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
  {
    path: "/gallery",
    Component: GalleryPage,
  },
]);
