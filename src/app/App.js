import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, useLocation, withRouter } from "react-router-dom";
import AppRoutes from "./routes";
import NavBar from "../navbar";
import Socialicons from "../components/socialicons";
import "./App.css";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
        <NavBar />
        <AppRoutes />
        <Socialicons />
      </ScrollToTop>
    </Router>
  );
}
