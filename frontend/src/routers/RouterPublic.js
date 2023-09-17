import Home from "../layouts/LayoutSite/Home";
import Detail from "../pages/product/Detail";
import Login from "../pages/user/Login";
import Cart from "../pages/cart/Cart";
import Content from "../pages/Content";
import Register from "../pages/user/Register";
import CategoryGridView from "../pages/category/CategoryGridView";
import Account from "../pages/profile";
import Search from "../pages/product/ProductSearch";
import Contact from "../pages/contact";
const RouterPublic = [
  { path: "/", component: Home },
  { path: "/products/detail/:slug/:page", component: Detail },
  { path: "/products-search/:slug", component: Search },
  { path: "/account/:chucnang", component: Account },
  { path: "/cart", component: Cart },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/mycart", component: Cart },
  { path: "/category/:view", component: CategoryGridView },
  { path: "/content", component: Content },
  { path: "/contact-us", component: Contact },
];
export default RouterPublic;
