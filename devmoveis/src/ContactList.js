import React from "react";

function ContactList({ contacts, onRemoveContact }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <span>{contact.name} - {contact.phone} - {contact.email}</span>
          <button onClick={() => onRemoveContact(contact.id)}>Remover</button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
