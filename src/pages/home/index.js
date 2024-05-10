import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "react-typewriter-effect";
import { introdata, meta } from "../../hook";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center">
          <div
            className="h_bg-image order-1 order-lg-2 border rounded-5"
            style={{ backgroundImage: `url(https://plus.unsplash.com/premium_vector-1734332717463-b2d77c881a31?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkxfHxkZXZlbG9wZXJ8ZW58MHx8MHx8fDA%3D)` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    textStyle={{
                      fontWeight: 700,
                      fontSize: '1em',
                    }}
                    startDelay={500}
                    cursorColor="black"
                    multiText={[introdata.animated.first, introdata.animated.second, introdata.animated.third]}
                    multiTextDelay={1000}
                    typeSpeed={100}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn rounded-4">
                      My Portfolio
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn rounded-4">
                      Contact Me
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
}
