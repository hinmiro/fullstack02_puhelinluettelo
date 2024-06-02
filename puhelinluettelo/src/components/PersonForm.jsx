import { useState } from "react";
import Filter from "./Filter.jsx";
import fetchData from "../services/phoneBook.js";
import Notification from "./Notification.jsx";

const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [message, setMessage] = useState(null);
  const [remove, setRemove] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const personExists = persons.find((person) => person.name === newName);
    if (personExists) {
      if (
        window.confirm(
          `Person is already in phonebook, do you want to replace old number with new one?`,
        )
      ) {
        const updatedPerson = { ...personExists, number: newNumber };
        setMessage(`Changed phone number on ${newName} to ${newNumber}`);

        fetchData
          .update(updatedPerson)
          .then((returnedPerson) => {
            setPersons((persons) =>
              persons.map((person) =>
                person.id !== personExists.id ? returnedPerson : person,
              ),
            );
            setNewName("");
            setNewNumber("");
          })
          .catch((err) => {
            setRemove(true);
            setMessage(`${newName} has already been removed from server`);
          });
      }
    } else {
      fetchData
        .create({ name: newName, number: newNumber })
        .then((newPerson) => {
          setPersons(persons.concat(newPerson));
        });
      setMessage(`Added ${newName} to phonebook`);
    }
    setNewName("");
    setNewNumber("");

    setTimeout(() => {
      setMessage(null);
      setRemove(false);
    }, 3000);
  };

  const handleNewName = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    event.preventDefault();
    setNewNumber(event.target.value);
  };

  return (
    <>
      <Notification message={message} remove={remove} />
      <form onSubmit={handleSubmit}>
        <h3>Add new Number</h3>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <Filter
        key={persons.length}
        persons={persons}
        setPersons={setPersons}
        setRemove={setRemove}
        setMessage={setMessage}
      />
    </>
  );
};

export default PersonForm;
