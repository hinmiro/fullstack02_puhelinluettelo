import { useEffect, useState } from "react";
import fetchData from "./services/fetchData.js";
import Table from "./components/Table.jsx";
import MoreInfo from "./components/MoreInfo.jsx";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    fetchData.getAll().then((countries) => setAllCountries(countries));
  }, []);

  return (
    <>
      <h1>Country app</h1>
      {selectedCountry ? (
        <table>
          <MoreInfo country={selectedCountry} />
        </table>
      ) : (
        <Table
          setCountries={setCountries}
          countries={countries}
          allCountries={allCountries}
          setSelectedCountry={setSelectedCountry}
        />
      )}
    </>
  );
};

export default App;
