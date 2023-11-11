import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      children: ([
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: 'menu',
          element: <Menu></Menu>
        }
      ])
    },
  ]);

  export default router;