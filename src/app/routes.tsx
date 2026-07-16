import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import ContactUs from "@/app/pages/ContactUs";
import AdoptAFuture from "@/app/pages/AdoptAFuture";
import AdminLogin from "@/app/pages/AdminLogin";
import AdminDashboard from "@/app/pages/AdminDashboard";
import AdminAAF from "@/app/pages/AdminAAF";
import AdminContent from "@/app/pages/AdminContent";

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
  {
    path: "/adopt-a-future",
    Component: AdoptAFuture,
  },
  {
    path: "/admin/login",
    Component: AdminLogin,
  },
  {
    path: "/admin",
    Component: AdminDashboard,
  },
  {
    path: "/admin/aaf",
    Component: AdminAAF,
  },
  {
    path: "/admin/content",
    Component: AdminContent,
  },
]);
