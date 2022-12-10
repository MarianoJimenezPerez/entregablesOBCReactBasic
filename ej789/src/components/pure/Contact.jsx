import React from "react";

const Contact = ({ cont, del, con }) => {
  return (
    <tr>
      <td>{cont.id}</td>
      <td>{cont.name}</td>
      <td>{cont.lastName}</td>
      <td>
        {cont.conected ? "Conected" : "Desconected"}{" "}
        <i className="bi bi-arrow-clockwise" onClick={() => con(cont)}></i>
      </td>
      <td>
        <i className="bi bi-trash3" onClick={del}></i>
      </td>
    </tr>
  );
};

export default Contact;
