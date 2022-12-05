import React, { useState, useEffect } from "react";

const persona = {
  fecha: new Date(),
  edad: 0,
  nombre: "Martín",
  apellidos: "San José",
};

const Clock = () => {
  const [fecha, setFecha] = useState(persona.fecha);
  const [edad, setEdad] = useState(persona.edad);

  useEffect(() => {
    const tick = () => {
      setEdad(edad + 1);
      setFecha(new Date());
    };

    persona.timerId = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(persona.timerID);
    };
  }, [edad]);

  return (
    <div>
      <h2>
        Hora Actual:
        {fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {persona.nombre} {persona.apellidos}
      </h3>
      <h1>Edad: {edad}</h1>
    </div>
  );
};

export default Clock;
