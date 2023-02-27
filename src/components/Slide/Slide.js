import "./Slide.css";
import ScrollSpy from "react-ui-scrollspy";
import { motion } from "framer-motion";

function Slide() {
  return (
    <ScrollSpy>
      <motion.div
        initial={{ opacity: 0, x:200 }}
        animate={{ x:10 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ease: "easeOut", duration: 1}}
        id="slidePrincipal"
        className="mt-5"
      >
        <div class="card text-bg-dark">
          <picture id="mobileSlide">
            <img
              src="https://i.ibb.co/Dp8Dqyf/slidenire.png"
              class="card-img slide-size d-none d-md-block "
              alt="Logo Imagen desktop"
            />
            <img
              src="https://i.ibb.co/g6BbK11/nire-logo-mobile.png"
              alt="Logo Imagen mobile"
              class="d-inline-block align-text-top d-md-none"
            />
          </picture>
          <div class="card-img-overlay">
            <p class="card-text"></p>
            <p class="card-text">
              <small></small>
            </p>
          </div>
        </div>
      </motion.div>
    </ScrollSpy>
  );
}

export default Slide;
