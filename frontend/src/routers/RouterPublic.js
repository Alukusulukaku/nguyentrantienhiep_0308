import Home from "../layouts/LayoutSite/Home";
import Detail from "../pages/frontend/product/Detail";
import Login from "../pages/frontend/user/Login";
import Cart from "../pages/frontend/cart/Cart";
import Content from "../pages/frontend/Content";
import Register from "../pages/frontend/user/Register";
import CategoryList from "../pages/frontend/category/CategoryList";
import Account from "../pages/frontend/profile";
import Search from "../pages/frontend/product/ProductSearch";
import Contact from "../pages/frontend/contact";
import Category from "../pages/frontend/category/Category";

const RouterPublic = [
  { path: "/", component: Home },
  { path: "/san-pham/:category/:slug", component: Detail },
  { path: "/products-search/:slug", component: Search },
  { path: "/account/:chucnang", component: Account },
  { path: "/cart", component: Cart },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/mycart", component: Cart },
  { path: "/category/:parent/:children/:page", component: CategoryList },
  { path: "/category", component: Category },
  { path: "/content", component: Content },
  { path: "/contact-us", component: Contact },
];
export default RouterPublic;
