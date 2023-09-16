import "./assets/sass/app.scss";

import { Route, Routes } from "react-router-dom";
import LayoutSite from "./layouts/LayoutSite";
import LayoutAdmin from "./layouts/LayoutAdmin";
import RouterSite from "./routers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutSite />}>
        {RouterSite.RouterPublic.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}
      </Route>
      <Route path="/admin" element={<LayoutAdmin />}>
        {RouterSite.RouterPrivate.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}
      </Route>
    </Routes>
  );
}

export default App;
