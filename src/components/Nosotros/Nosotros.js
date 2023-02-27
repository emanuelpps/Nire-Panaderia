import "./Nosotros.css";
import { useState, useRef, useEffect } from "react";
import ScrollSpy from "react-ui-scrollspy";
import { motion } from "framer-motion";

function Nosotros() {
  const [imageIndex, setImageIndex] = useState(0);
  const targetImageRef = useRef(null);

  const images = [
    "https://i.ibb.co/JRyKKKV/panmasamadre-removebg.png",
    "https://i.ibb.co/FW1WmZk/mp355t1ojlf51-Photo-Room-png-Photo-Room.png",
    "https://i.ibb.co/N7s88W2/3lkq2gg823c51-Photo-Room-png-Photo-Room.png",
  ];

  useEffect(() => {
    const targetImage = targetImageRef.current;
    targetImage.onLoad = () => {
      setTimeout(() => {
        setImageIndex((imageIndex + 1) % images.length);
      }, 1000);
    };
  }, [imageIndex, images.length]);

  return (
    <ScrollSpy>
      <motion.div
        initial={{ opacity: 0, y:300 }}
        animate={{ y:0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ease: "easeOut", duration: 2}}
        id="Nosotros"
        className="box-container"
      >
        <div className="container-fluid">
          <div className="row max-auto justify-content-md-center ">
            <div className="col ms-md-auto mx-auto pb-5">
              <div className="text-nosotros">
                <h3>Nosotros</h3>
                <h4>PAN DE MASA MADRE</h4>
                <h5>Una Propuesta Diferente</h5>
                <p>
                  Somos una industria artesanal que elabora pan de masa madre
                  sin conservantes ni otros aditivos. Nuestra propuesta viene de
                  la tradición danesa donde el pan no es sólo un acompañamiento,
                  es un alimento de todos los días. Esa es nuestra visión y por
                  eso trabajamos: para ofrecer un pan rico en calidad, sabor y
                  textura a miles de mesas.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="p-3 box-image">
                <img
                  id="targetImage"
                  ref={targetImageRef}
                  src={images[imageIndex]}
                  className="top rounded float-end img-size"
                  alt="..."
                  onLoad={() => {
                    setTimeout(() => {
                      setImageIndex((imageIndex + 1) % images.length);
                    }, 1000);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </ScrollSpy>
  );
}

export default Nosotros;
