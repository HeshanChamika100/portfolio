import React from "react";
import Logo from "../assets/logo2.png";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="home">
            <img src={Logo} className="h-10" alt="Logo" />
          </a>
          <Link
            to="contact"
            smooth={true}
            spy={true}
            offset={-50}
            className="btn btn-sm cursor-pointer flex items-center justify-center"
          >
            Work with me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
