import React from "react";
import { useState } from "react";
import db from "../../database/db";
import Contact from "./Contact";
import ContactAdd from "./ContactAdd";

const ContactsList = () => {
  const [ddbb, setDdbb] = useState(db);

  const createContact = (cont) => {
    const tempDb = [...ddbb];
    tempDb.push(cont);
    setDdbb(tempDb);
  };

  const deleteContact = (cont) => {
    const tempDb = [...ddbb];
    const ix = tempDb.indexOf(cont);
    tempDb.splice(ix, 1);
    setDdbb(tempDb);
  };

  const changeConected = (cont) => {
    const tempDb = [...ddbb];
    const ix = tempDb.indexOf(cont);
    tempDb[ix].conected = !tempDb[ix].conected;
    setDdbb(tempDb);
  };

  return (
    <div>
      <table className="container mt-3">
        <thead>
          <th scope="col">id</th>
          <th scope="col">Name</th>
          <th scope="col">Last name</th>
          <th scope="col">Conected</th>
          <th scope="col">Actions</th>
        </thead>
        <tbody>
          {ddbb.map((cont) => (
            <Contact
              cont={cont}
              key={cont.id}
              del={deleteContact}
              con={changeConected}
            />
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-center mt-5">
        <ContactAdd contacts={ddbb} add={createContact} />
      </div>
    </div>
  );
};

export default ContactsList;
