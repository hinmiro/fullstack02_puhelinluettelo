import PersonForm from "./components/PersonForm.jsx";
import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Tony Stark", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm persons={persons} setPersons={setPersons} />
    </div>
  );
};

export default App;
