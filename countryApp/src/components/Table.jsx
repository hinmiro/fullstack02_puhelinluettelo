import Countries from "./Countries.jsx";
import country from "./Countries.jsx";
import MoreInfo from "./MoreInfo.jsx";

const Table = ({
  countries,
  setCountries,
  allCountries,
  setSelectedCountry,
}) => {
  const handleInput = (event) => {
    event.preventDefault();
    if (event.target.value === "") {
      setCountries([]);
      return;
    }
    const filteredCountries = allCountries.filter((country) =>
      country.name.common
        .toLowerCase()
        .includes(event.target.value.toLowerCase()),
    );
    setCountries(filteredCountries);
  };

  return (
    <>
      <label>Find countries: </label>
      <input placeholder={"Search"} onChange={handleInput} />

      <table>
        {countries.length > 10 ? (
          <tbody>
            <tr>
              <td>Too many matches, specify more of your search</td>
            </tr>
          </tbody>
        ) : countries.length === 1 ? (
          countries.map((country) => (
            <MoreInfo key={country.cca3} country={country} />
          ))
        ) : (
          <tbody>
            {countries.map((country) => (
              <tr key={country.cca3}>
                <Countries
                  country={country}
                  setSelectedCountry={setSelectedCountry}
                />
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </>
  );
};

export default Table;
