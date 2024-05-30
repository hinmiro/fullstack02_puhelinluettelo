import { useState } from "react";
import Filter from "./Filter.jsx";
import fetchData from "../services/phoneBook.js";

const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

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

        fetchData.update(updatedPerson).then((returnedPerson) => {
          setPersons((persons) =>
            persons.map((person) =>
              person.id !== personExists.id ? returnedPerson : person,
            ),
          );
          setNewName("");
          setNewNumber("");
        });
      }
    } else {
      fetchData
        .create({ name: newName, number: newNumber })
        .then((newPerson) => {
          setPersons(persons.concat(newPerson));
        });
    }
    setNewName("");
    setNewNumber("");
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
      <Filter key={persons.length} persons={persons} setPersons={setPersons} />
    </>
  );
};

export default PersonForm;
