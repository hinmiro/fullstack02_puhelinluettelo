import { useState } from "react";
import Person from "./Person.jsx";

const Filter = ({ persons, setPersons }) => {
  const [newFilter, setNewFilter] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(persons);

  const handleFilter = (event) => {
    event.preventDefault();
    setNewFilter(event.target.value);
    setFilteredPersons(
      persons.filter((person) =>
        person.name.toLowerCase().includes(event.target.value.toLowerCase()),
      ),
    );
  };

  return (
    <>
      Filter shown with <input value={newFilter} onChange={handleFilter} />
      <br />
      <br />
      <table>
        <tbody>
          {filteredPersons &&
            filteredPersons.map((person, i) => (
              <Person
                key={i}
                person={person}
                setPersons={setPersons}
                persons={persons}
              />
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Filter;
