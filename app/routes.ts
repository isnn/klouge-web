import { type RouteConfig, index, route } from "@react-router/dev/routes";
import { authenticationRoutes } from "./routes/autentication";
import { dashboardRoutes } from "./routes/dashboard";
import { deviceRoutes } from "./routes/device";
import { reduxRoutes } from "./routes/redux";

export default [
  index("routes/home.tsx"),
  ...authenticationRoutes,
  ...dashboardRoutes,
  ...deviceRoutes,
  ...reduxRoutes,
] satisfies RouteConfig;

// add default page here 404, 403, 500