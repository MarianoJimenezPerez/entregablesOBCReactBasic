import React from "react";
import PropTypes from "prop-types";

const ComponenteB = ({ contacto, hdc }) => {
  return (
    <div>
      <p>{contacto.nombre}</p>
      <p>
        {contacto.conectado ? "Contacto en linea" : "Contacto no disponible"}
      </p>
      <button onClick={hdc}>
        {contacto.conectado ? "Desconectar" : "Conectar"}
      </button>
    </div>
  );
};

ComponenteB.propTypes = {
  contacto: PropTypes.object,
  hdc: PropTypes.func,
};

export default ComponenteB;
