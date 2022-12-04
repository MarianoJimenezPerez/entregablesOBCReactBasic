import React, { Component } from "react";
import PropTypes from "prop-types";
import ComponenteB from "./ComponenteB";

class ComponenteA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "Mariano",
      apellido: "Jimenez",
      email: "marianojimenezperez1@gmail.com",
      conectado: false,
    };
  }
  render() {
    return (
      <div>
        <ComponenteB contacto={this.state} hdc={this.handleConection} />
      </div>
    );
  }

  handleConection = () => {
    this.setState((prevState) => ({
      conectado: prevState.conectado ? false : true,
    }));
  };
}

ComponenteA.propTypes = {
  nombre: PropTypes.string,
  apellido: PropTypes.string,
  email: PropTypes.string,
  conectado: PropTypes.bool,
};

export default ComponenteA;
