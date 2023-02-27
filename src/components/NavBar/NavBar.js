import "./NavBar.css";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    scroll.scrollTo(id, { duration: 500 });
    navigate("/");
  };
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
        <ScrollLink
          className="navbar-brand"
          smooth
          to="slidePrincipal"
          onClick={handleClick}
        >
          <img
            src="https://i.ibb.co/0yn5Ct1/nireLogo.png"
            alt="Logo"
            width="100"
            height="40"
            class="d-inline-block align-text-top"
          />
        </ScrollLink>
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
              <ScrollLink
                id="Nosotros"
                class="nav-link active text-dark click"
                smooth
                to="Nosotros"
                aria-current="page"
                onClick={handleClick}
              >
                Nosotros
              </ScrollLink>
            </li>
            <li class="nav-item">
              <ScrollLink
                class="nav-link text-dark click"
                smooth
                to="Productos"
                onClick={handleClick}
              >
                Productos
              </ScrollLink>
            </li>
            <li class="nav-item">
              <ScrollLink
                class="nav-link text-dark click"
                smooth
                to="DondeEstamos"
                onClick={handleClick}
              >
                Donde Estamos
              </ScrollLink>
            </li>
            <li class="nav-item">
              <Link to="/trabaja-en-nire" class="nav-link text-dark">
                Trabajá en Ñire
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </nav>
  );
}

export default NavBar;
