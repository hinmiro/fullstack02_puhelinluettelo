import fetchData from "../services/phoneBook.js";

const Person = (props) => {
  const { person, setPersons, setRemove, setMessage } = props;

  const handleDelete = () => {
    if (window.confirm(`Are you sure to delete ${person.name} from book`)) {
      fetchData
        .remove(person.id)
        .then((updatedPersons) => {
          setPersons(updatedPersons);
        })
        .catch((err) => {
          setRemove(true);
          setMessage(`${person.name} already removed from the server`);
        });
      setRemove(true);
      setMessage(`${person.name} remove from phonebook`);

      setTimeout(() => {
        setRemove(false);
        setMessage(null);
      }, 3000);
    }
  };

  return (
    <tr>
      <td>{props.person.name}</td>
      <td>{props.person.number}</td>
      <td>
        <button onClick={handleDelete} id={props.person.id}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Person;
