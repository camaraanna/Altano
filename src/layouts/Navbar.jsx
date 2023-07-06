import { Link as ScrollLink } from "react-scroll";
import { useRef } from "react";
import * as Scroll from "react-scroll";
import { Link } from "react-router-dom";

// The logo is also an Access Link,Element,etc as follows
import logo from "../assets/img/Logo/Logo.png";
import { useState } from "react";

export const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <a href="/" className="Logo">
          <figure className="Logo-img">
            <img src={logo} alt="Logo" />
          </figure>
        </a>

        <div className="nav-info">
          {/* ScrollLink allow us to scroll down to an component on the same page */}

          <ScrollLink id="ScrollLink" className="navbar-title" smooth="true" to="Program">
            Program
          </ScrollLink>
          <ScrollLink className="navbar-title" smooth="true" to="About">
            About
          </ScrollLink>

          {/*Link is use to connect the navigator to the page Reservation */}

          <Link className="navbar-title" smooth="true" to={`/Reservation`}>
            Reservation{" "}
          </Link>
        </div>

        {/*------------------------------------BURGER NAVIGATOR---------------------------------------*/}

        <section className="container-navbar-burger">
          <input id="nav-burger" type="checkbox" name="nav-burger" />
          <label id="burger-label" htmlFor="nav-burger">
            {" "}
          </label>

          <div className="information">
            <ScrollLink id="ScrollLink" className="navbar-title-burger" smooth="true" to="Program">
              Program
            </ScrollLink>
            <ScrollLink className="navbar-title-burger" smooth="true" to="About">
              About
            </ScrollLink>

            {/*Link is use to connect the navigator to the page Reservation */}

            <Link className="navbar-title-burger" smooth="true" to={`/Reservation`}>
              Reservation{" "}
            </Link>
          </div>
        </section>
      </nav>
    </>
  );
};
export default Navbar;
