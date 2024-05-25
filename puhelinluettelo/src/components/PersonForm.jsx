import { useState } from "react";
import Filter from "./Filter.jsx";

const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const personExists = persons.some((person) => person.name === newName);
    personExists
      ? alert(`${newName} is already in list`)
      : setPersons(persons.concat({ name: newName, number: newNumber }));
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
      <Filter key={persons.length} persons={persons} />
    </>
  );
};

export default PersonForm;
