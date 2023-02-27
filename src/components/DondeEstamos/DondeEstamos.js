import "./DondeEstamos.css";
import ScrollSpy from "react-ui-scrollspy";
import { motion } from 'framer-motion';

function DondeEstamos() {
  return (
    <ScrollSpy>
    <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ y: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ease: "easeOut", duration: 2 }} id="DondeEstamos" className="container card boxCard border-0">
      <h4 className="text-center mb-5">Donde Estamos</h4>
      <div className="row d-flex align-items-center backgroundCard">
        <div className="col-md-6">
          <iframe className="map-section"
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2587.5083016696235!2d-67.570286745417!3d-39.02942998025902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a02d2bcedda95%3A0x6e48ff9dab832ac5!2sTucum%C3%A1n%20300%2C%20Gral.%20Roca%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses!2sar!4v1676677827245!5m2!1ses!2sar"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">Estamos en General Roca</h5>
            <section className="d-flex justify-content-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
              <p className="mx-3">Estamos en Tucuman al 300</p>
            </section>
            <section className="d-flex justify-content-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-clock"
                viewBox="0 0 16 16"
              >
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
              </svg>
              <p className="mx-3">de Lunes a Domingo, de 08 a 20 hs</p>
            </section>
            <p class="card-text">
              <button className="button-decoration"><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg></button>
              <small className="text-muted mx-3">Podes pedir a nuestro WhatsApp</small>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
    
    </ScrollSpy>
  );
}

export default DondeEstamos;
