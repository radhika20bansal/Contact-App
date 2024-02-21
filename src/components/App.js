import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";
import EditContact from "./EditContact";
import { v4 as uuidv4 } from "uuid";
import api from "../api/contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  // retrieve data from local storage and assign it to state
  // () => {
  //   const storedList = localStorage.getItem(LOCAL_STORAGE_KEY);
  //   return storedList ? JSON.parse(storedList) : [];
  // }

  //To store the data in local storage
  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  const addContactHandler = async (contact) => {
    const requestBody = {
      id: uuidv4(),
      ...contact,
    };
    const response = await api.post("/contacts", requestBody);
    console.log("Response", response);
    setContacts([...contacts, response.data]);
  };

  const onRemoveContact = async (contactId) => {
    await api.delete(`/contacts/${contactId}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== contactId;
    });
    setContacts(newContactList);
  };

  const onEditContact = async (contact) => {
    await api.put(`/contacts/${contact.id}`, contact);
    setContacts(
      contacts.map((c) => {
        if (c.id === contact.id) {
          return contact;
        } else {
          return c;
        }
      })
    );
    window.location.href= '/';
  };

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <ContactList
                contacts={contacts}
                onRemoveContact={onRemoveContact}
              />
            }
          />
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            path="/edit/:id"
            element={
              <EditContact contacts={contacts} onEditContact={onEditContact} />
            }
          />
          <Route
            path="/contact/:id"
            element={<ContactDetails contacts={contacts} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
