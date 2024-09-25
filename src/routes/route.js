import routes from "../constants/route";
import HomePage from "../pages/HomePage/HomePage";

const route = [
  {
    path: routes.DEFAULT,
    component: HomePage,
  },
  {
    path: routes.HOME_PAGE,
    component: HomePage,
  },
];

export default route;
