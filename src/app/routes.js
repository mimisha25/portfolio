import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Home from "../pages/home";
import About from "../pages/about";
import Portfolio from "../pages/portfolio";
import ContactUs from "../pages/contact";
import OfficeTools from '../pages/portfolio/officeTools';
import Games from '../pages/portfolio/games';


function AppRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup className="page-transition-container">
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={300}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/officeTools" element={<OfficeTools />} />
          <Route path="/games" element={<Games />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default AppRoutes;