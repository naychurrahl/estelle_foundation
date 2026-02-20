import { createBrowserRouter } from "react-router";
import { HomePage } from "@/app/pages/HomePage";
import { DirectorPage } from "@/app/pages/DirectorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/director/:id",
    Component: DirectorPage,
  },
]);
