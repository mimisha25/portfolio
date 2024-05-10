import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AppRoutes from "./routes";
import NavBar from "../navbar";
import Socialicons from "../components/socialicons";
import "./App.css";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export default function App() {
  console.log("App is rendering...");
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <NavBar />
      <AppRoutes />
      <Socialicons />
    </Router>
  );
}
