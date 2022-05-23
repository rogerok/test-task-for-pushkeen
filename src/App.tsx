import React from "react";
import { useRoutes } from "react-router-dom";
/* import Container from "./components/container/Container";
  import Header from "./components/header/Header"; */
import MainPage from "./pages/main/MainPage";
import Layout from "./components/layout/Layout";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
];

const App = () => {
  const elements = useRoutes(routes);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{elements}</>;
};

export default App;
