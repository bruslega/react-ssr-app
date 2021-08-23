import App from "./App";
import HomePage from "./pages/HomePage";
import FeaturesPage from "./pages/FeaturesPage";
import ProductsPricingPage from "./pages/ProductsPricingPage";
import GraphPage from "./pages/GraphPage";
import UsersListPage from "./pages/UsersListPage";
import AdminsListPage from "./pages/AdminsListPage";
import NotFoundPage from "./pages/NotFoundPage";

// react router config - https://reactrouter.com/web/example/route-config
export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true,
      },
      {
        ...FeaturesPage,
        path: "/features",
      },
      {
        ...ProductsPricingPage,
        path: "/products-pricing",
      },
      {
        ...GraphPage,
        path: "/graph",
      },
      {
        ...AdminsListPage,
        path: "/admins",
      },
      {
        ...UsersListPage,
        path: "/users",
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];
