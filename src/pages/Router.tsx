import { lazy } from "react";
import { useRoutes } from "react-router-dom";

import { Layout } from "../components/Layout/Layout";
import { HabitsPage } from "./inner/HabitsPage";

const ServicePage = lazy(() => import("./inner/ServicePage"));
const TeamPage = lazy(() => import("./inner/TeamPage"));
const AddToTeamPage = lazy(() => import("./inner/AddToTeamPage"));
const UserPage = lazy(() => import("./inner/UserPage"));

const LandingPage = lazy(() => import("./out/LandingPage"));
const PolicyPage = lazy(() => import("./out/PolicyPage"));
const LoginPage = lazy(() => import("./out/LoginPage"));


export const Router = () => {
  const routes = [
    {
      path: "/",
      children: [
        { path: "", element: <LandingPage /> },
        { path: "/login", element: <LoginPage /> },
        { path: "/policy", element: <PolicyPage /> },
      ],
    },
    {
      path: "/lk/",
        element: <Layout />,
        children: [
          { path: "", element: <ServicePage /> },
          { path: "habits", element: <HabitsPage /> },
          { path: "addtoteam", element: <AddToTeamPage /> },
          { path: "team", element: <TeamPage /> },
          { path: "user", element: <UserPage /> },
        ],
    },
  ];
  let element = useRoutes(routes);
  return element;
};
