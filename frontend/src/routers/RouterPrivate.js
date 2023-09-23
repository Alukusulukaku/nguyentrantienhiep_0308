import Home from "../layouts/LayoutAdmin/Home";
import Login from "../layouts/LayoutAdmin/login";

const RouterPrivate = [
  { path: "/admin", component: Home },
  { path: "/admin/signin", component: Login },
];

export default RouterPrivate;
