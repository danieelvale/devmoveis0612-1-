import React, { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);


  useEffect(() => {
document.title = ` Contatos (${contacts.length})`;
  }, [contacts]);

  const addContact = (contact) => {
    setContacts((prevContacts) => [
      ...prevContacts,
      { id: Math.random().toString(), ...contact },
    ]);
  };

  const removeContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((c) => c.id !== id));
  };

  return (
    <div>
      <h1>Lista de Contatos</h1>
      <ContactForm onAddContact={addContact} />
      <ContactList contacts={contacts} onRemoveContact={removeContact} />
    </div>
  );
}

export default App;