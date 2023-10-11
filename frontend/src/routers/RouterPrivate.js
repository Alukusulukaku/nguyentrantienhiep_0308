import Home from "../layouts/LayoutAdmin/Home";
import Brand from "../pages/backend/brand";
import BrandDetail from "../pages/backend/brand/BrandDetail";
import BrandEdit from "../pages/backend/brand/BrandEdit";
import BrandNew from "../pages/backend/brand/BrandNew";
import Category from "../pages/backend/category";
import CategoryDetail from "../pages/backend/category/CategoryDetail";
import CategoryEdit from "../pages/backend/category/CategoryEdit";
import CategoryNew from "../pages/backend/category/CategoryNew";
import Contact from "../pages/backend/contact";
import ContactDetail from "../pages/backend/contact/ContactDetail";
import ContactReply from "../pages/backend/contact/ContactReply";
import Menu from "../pages/backend/menu";
import MenuDetail from "../pages/backend/menu/MenuDetail";
import MenuEdit from "../pages/backend/menu/MenuEdit";
import MenuNew from "../pages/backend/menu/MenuNew";
import Order from "../pages/backend/order";
import OrderDetail from "../pages/backend/order/OrderDetail";
import Post from "../pages/backend/post";
import PostNew from "../pages/backend/post/PostNew";
import Product from "../pages/backend/product";
import AddSale from "../pages/backend/product/AddSale";
import ProductDetail from "../pages/backend/product/ProductDetail";
import ProductNew from "../pages/backend/product/ProductNew";
import Slider from "../pages/backend/slider";
import SliderDetail from "../pages/backend/slider/SliderDetail";
import SliderEdit from "../pages/backend/slider/SliderEdit";
import SliderNew from "../pages/backend/slider/SliderNew";
import User from "../pages/backend/user";

const RouterPrivate = [
  /* Dashboard & Login */
  { path: "/admin", component: Home },

  /* Brand */
  { path: "/admin/brand/:page", component: Brand },
  { path: "/admin/brand/new", component: BrandNew },
  { path: "/admin/brand/detail/:id", component: BrandDetail },
  { path: "/admin/brand/edit/:id", component: BrandEdit },

  /* Category */
  { path: "/admin/category/:page", component: Category },
  { path: "/admin/category/new", component: CategoryNew },
  { path: "/admin/category/edit/:id", component: CategoryEdit },
  { path: "/admin/category/detail/:id", component: CategoryDetail },

  /* Contact */
  { path: "/admin/contact/:page", component: Contact },
  { path: "/admin/contact/detail/:id", component: ContactDetail },
  { path: "/admin/contact/edit/:id", component: ContactReply },

  /* Menu */
  { path: "/admin/menu/:page", component: Menu },
  { path: "/admin/menu/new", component: MenuNew },
  { path: "/admin/menu/edit/:id", component: MenuEdit },
  { path: "/admin/menu/detail/:id", component: MenuDetail },

  /* Order */
  { path: "/admin/order/:page", component: Order },
  { path: "/admin/order/detail/:id", component: OrderDetail },

  /* Post */
  { path: "/admin/post", component: Post },
  { path: "/admin/post/new", component: PostNew },

  /* Product */
  { path: "/admin/product/:page", component: Product },
  { path: "/admin/product/new", component: ProductNew },
  { path: "/admin/product/detail/:id", component: ProductDetail },
  { path: "/admin/product/sale", component: AddSale },

  /* Slider */
  { path: "/admin/slider/:page", component: Slider },
  { path: "/admin/slider/new", component: SliderNew },
  { path: "/admin/slider/detail/:id", component: SliderDetail },
  { path: "/admin/slider/edit/:id", component: SliderEdit },

  /* User */
  { path: "/admin/user/:roles", component: User },
];

export default RouterPrivate;
