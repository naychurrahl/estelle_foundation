import { RouterProvider } from "react-router";
import { router } from "./routes";
import { SiteContentProvider } from "@/app/contexts/SiteContentContext";

export default function App() {
  return (
    <SiteContentProvider>
      <RouterProvider router={router} />
    </SiteContentProvider>
  );
}
