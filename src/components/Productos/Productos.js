import "./Productos.css";
import ScrollSpy from "react-ui-scrollspy";
import { motion } from "framer-motion";

function Productos() {
  return (
    <ScrollSpy>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ y: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ease: "easeOut", duration: 2 }}
        id="Productos"
        class="container text-center container-Productos"
      >
        <div class="row">
          <div class="col order-first">
            <section className="section-box">
              <h3>Productos</h3>
              <h4>NUESTRO PAN</h4>
              <p>
                Somos una industria artesanal que elabora pan de masa madre sin
                conservantes ni otros aditivos. Nuestra propuesta viene de la
                tradición danesa donde el pan no es sólo un acompañamiento, es
                un alimento de todos los días. Esa es nuestra visión y por eso
                trabajamos: para ofrecer un pan rico en calidad, sabor y textura
                a miles de mesas.
              </p>
            </section>
            <section className="img-section">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src="https://www.pandanes.com.ar/wp-content/uploads/2020/06/HISTORIA.jpg"
                class="rounded float-end img-size1"
                alt="..."
              />
            </section>
          </div>
          <div class="col order-second img-box">
            <section>
              <motion.img
                whileHover={{ scale: 1.1 }}
                src="https://www.pandanes.com.ar/wp-content/uploads/2020/08/elaboracion-pandanes2.jpg"
                class="rounded float-end img-size2"
                alt="..."
              />
            </section>
          </div>
          <div class="col order-last">
            <section>
              <motion.img
                whileHover={{ scale: 1.1 }}
                src="https://www.pandanes.com.ar/wp-content/uploads/2020/06/PANES-NOSOTROS.jpg"
                class="rounded float-end img-size3"
                alt="..."
              />
            </section>
            <section>
              <motion.img
                whileHover={{ scale: 1.1 }}
                src="https://www.pandanes.com.ar/wp-content/uploads/2020/06/PACK-NOSOTROS.jpg"
                class="rounded float-end img-size4"
                alt="..."
              />
            </section>
          </div>
        </div>
      </motion.div>
    </ScrollSpy>
  );
}

export default Productos;
