import "./Pedidos.css";
import ScrollSpy from "react-ui-scrollspy";
import { motion } from "framer-motion";

function Pedidos() {
  return (
    <ScrollSpy>
    <motion.div
        initial={{ opacity: 0, y:300 }}
        animate={{ y:0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ease: "easeOut", duration: 2}}id="Pedidos" className="container container-box">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center cardBackground-1">
          <div className="card-body col-md-6 mt-5 mb-5 mx-auto">
            <h5 className="card-title mt-2 mb-3">¡SUSCRIBITE!</h5>
            <p className="card-text">
              Recibí tu pedido de pan todas las semanas en tu casa. Un pago
              mensual, sin costos de envío.
            </p>
            <button className="btn btn-outline-light">VER MAS</button>
          </div>
        </div>
        <div className="col-md-6 cardBackground-2">
          <div className="card-body col-md-6  mt-5 mb-5 mx-5">
            <h5 className="card-title mb-3">PAN A DOMICILIO</h5>
            <p className="card-text">
              El pan de cada día, del horno a tu casa. Realiza tu pedido con un
              mínimo de 48 hs. de anticipación del día que lo querés recibir.
              Elaboramos por pedido.
            </p>
            <button className="btn btn-outline-dark">COMPRAR</button>
          </div>
        </div>
      </div>
    </motion.div>
    </ScrollSpy>
  );
}

export default Pedidos;
