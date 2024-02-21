import React, { useState } from "react";
import { useParams } from "react-router-dom";

function EditContact({ contacts, onEditContact }) {
  const contactId = useParams().id;
  const contactInfo = contacts.find((contact) => contact.id === contactId);
  console.log("Edit contact", contactInfo, contactId);
  const [contactName, setName] = useState(contactInfo.name);
  const [contactEmail, setEmail] = useState(contactInfo.email);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Edit Contact</h2>
      <form
        className="ui form"
        onSubmit={(e) => {
          e.preventDefault();
          if (contactEmail === "" || contactName === "") {
            alert("All fields are mandatory");
            return;
          }
          onEditContact({
            id: contactId,
            name: contactName,
            email: contactEmail,
          });
        }}
      >
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contactName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={contactEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">Update Contact</button>
      </form>
    </div>
  );
}

export default EditContact;
