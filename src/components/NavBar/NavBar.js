import "./NavBar.css";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

function NavBar() {
  return (
    <nav
      id="navegationBar"
      className="container-fluid navbar navbar-expand-lg bg-white sticky-top "
    >
      <motion.div
        animate={{ x: 80 }}
        transition={{ ease: "easeOut", duration: 2 }}
        className="container"
      >
        <HashLink
          className="navbar-brand"
          smooth
          to="#slidePrincipal"
        >
          <img
            src="https://i.ibb.co/0yn5Ct1/nireLogo.png"
            alt="Logo"
            width="100"
            height="40"
            class="d-inline-block align-text-top"
          />
        </HashLink>
        <button
          className="navbar-toggler mx-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="nav mx-auto">
            <li class="nav-item">
              <HashLink
                smooth
                to="#Nosotros"
                class="nav-link active text-dark click"
                aria-current="page"
              >
                Nosotros
              </HashLink>
            </li>
            <li class="nav-item">
              <HashLink
                class="nav-link text-dark click"
                smooth
                to="#Productos"
              >
                Productos
              </HashLink>
            </li>
            <li class="nav-item">
              <HashLink
                class="nav-link text-dark click"
                smooth
                to="#DondeEstamos"
              >
                Donde Estamos
              </HashLink>
            </li>
          </ul>
        </div>
      </motion.div>
    </nav>
  );
}

export default NavBar;
