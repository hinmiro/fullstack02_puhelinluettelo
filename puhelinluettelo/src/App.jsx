import { useState } from "react";

const Person = ({ person }) => {
  return (
    <tr>
      <td>{person.name}</td>
    </tr>
  );
};

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNewName = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPersons(persons.concat({ name: newName }));
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <table>
        <thead>
          <tr>
            <th>
              <h2>Numbers</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person, i) => (
            <Person key={i} person={person} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
