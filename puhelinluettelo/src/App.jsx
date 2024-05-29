import PersonForm from "./components/PersonForm.jsx";
import { useEffect, useState } from "react";
import fetchData from "./services/phoneBook.js";

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    fetchData.getAll().then((p) => {
      setPersons(p);
    });
  }, []);

  useEffect(() => {}, [persons]);

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm persons={persons} setPersons={setPersons} />
    </div>
  );
};

export default App;
