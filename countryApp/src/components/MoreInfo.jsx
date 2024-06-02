import Weather from "./Weather.jsx";

const MoreInfo = ({ country }) => {
  return (
    <>
      <tbody>
        <tr>
          <th>{country.name.common}</th>
        </tr>
        <tr>
          <td>
            <img src={country.flags.png} alt={country.name.official} />
          </td>
        </tr>
        <tr>
          <td>Capital: {country.capital[0]}</td>
        </tr>
        <tr>
          <td>Population: {country.population}</td>
        </tr>
        <tr>
          <td>Region: {country.region}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <Weather country={country} />
        </tr>
      </tfoot>
    </>
  );
};

export default MoreInfo;
