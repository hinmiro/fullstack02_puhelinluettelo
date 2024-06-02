const Countries = ({ country, setSelectedCountry }) => {
  const handleClick = (event) => {
    event.preventDefault();
    setSelectedCountry(country);
  };

  return (
    <>
      <td>{country.name.common}</td>
      <td>
        <button onClick={handleClick}>Show more</button>
      </td>
    </>
  );
};

export default Countries;
