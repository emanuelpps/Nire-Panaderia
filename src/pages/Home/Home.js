import Slide from "../../components/Slide/Slide";
import Nosotros from "../../components/Nosotros/Nosotros";
import Pedidos from "../../components/Pedidos/Pedidos";
import Productos from "../../components/Productos/Productos";
import DondeEstamos from "../../components/DondeEstamos/DondeEstamos";

import React from "react";

export default function Home() {
  return (
    <div>
      <Slide />
      <Nosotros />
      <Pedidos />
      <Productos />
      <DondeEstamos />
    </div>
  );
}
