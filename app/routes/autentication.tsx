import { route } from "@react-router/dev/routes";

export const authenticationRoutes = [
    route("login", "views/login.jsx"),
    route("reset", "views/ResetPassword.jsx"),
    route("register", "views/Register.jsx")
];
