import fetchData from "../services/phoneBook.js";

const Person = (props) => {
  const { person, setPersons, persons } = props;

  const handleDelete = () => {
    if (window.confirm(`Are you sure to delete ${person.name} from book`)) {
      fetchData.remove(person.id).then((removedPerson) => {
        setPersons(persons.filter((person) => person.id !== removedPerson.id));
      });
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
