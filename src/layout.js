import React from "react";
import { useLocation } from "react-router-dom";
import { Route, Routes, Navigate } from "react-router";
import { finalRoutes } from "./routes";
import Navbar from "./components/navbar/navbar.component";

import Footer from "./components/footer/footer.component";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="layout-component">
      {location.pathname === "/" ? <Navbar /> : ""}
      <div className="layout">
        <React.Suspense fallback="">
          <Routes>
            {finalRoutes.map(({ component: Component, ...rest }, idx) => {
              return (
                Component && (
                  <Route
                    key={idx}
                    path={rest.path}
                    exact={rest.exact}
                    element={Component}
                  />
                )
              );
            })}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </React.Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
