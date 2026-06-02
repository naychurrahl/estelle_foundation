import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import ContactUs from "@/app/pages/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: AboutUs,
  },
  {
    path: "/gallery",
    Component: Gallery,
  },
  {
    path: "/contact",
    Component: ContactUs,
  },
]);
