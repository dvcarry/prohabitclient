import { lazy } from "react";
import { useRoutes } from "react-router-dom";

import { Layout } from "../components/Layout/Layout";
import { HabitsPage } from "./inner/HabitsPage";

const ServicePage = lazy(() => import("./inner/ServicePage"));
const LandingPage = lazy(() => import("./out/LandingPage"));
const TeamPage = lazy(() => import("./inner/TeamPage"));

export const Router = () => {
  const routes = [
    {
      path: "/",
      children: [
        { path: "", element: <LandingPage /> },
      ],
    },
    {
      path: "/lk/",
        element: <Layout />,
        children: [
          { path: "", element: <ServicePage /> },
          { path: "habits", element: <HabitsPage /> },
          { path: "team", element: <TeamPage /> },
        ],
    },
  ];
  let element = useRoutes(routes);
  return element;
};
