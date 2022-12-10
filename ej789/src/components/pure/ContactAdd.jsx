import React, { useRef } from "react";
import PropTypes from "prop-types";

const ContactAdd = ({ contacts, add }) => {
  const name = useRef();
  const lastName = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: contacts.length + 1,
      name: name.current.value,
      lastName: lastName.current.value,
      conected: false,
    };
    add(newContact);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="mt-3 d-flex flex-column col-4 gap-2"
    >
      <input type="text" placeholder="Name" ref={name} required autoFocus />
      <input type="text" placeholder="Last name" ref={lastName} required />
      <button type="submit" className="btn btn-success">
        Add Contact
      </button>
    </form>
  );
};

ContactAdd.propTypes = {
  contacts: PropTypes.array.isRequired,
  add: PropTypes.func.isRequired,
};

export default ContactAdd;
