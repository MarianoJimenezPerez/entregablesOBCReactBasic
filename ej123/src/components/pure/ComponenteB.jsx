import React from "react";

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

export default ComponenteB;
