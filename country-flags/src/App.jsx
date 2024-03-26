import { useState, useEffect } from "react";
import Card from "./components/CountryCard";


function App() {
  const [countries, setCountries] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      if (!res.ok) throw new Error("Some Error occurred!");

      const data = await res.json();
      setCountries(data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (countries.length === 0)
    return (
      <div className="container">
        <div className="loader"></div>
      </div>
    );

  return (
    <>
      <div className="container">
        <div className="flags">
          {countries.map((country) => {
            return (
              <Card
                key={country.name.common}
                flag={country.flags.png ?? country.flags.svg}
                name={country.name.common}
                alt={country.flags.alt}
              />
            );
          })}
        </div>
      </div>

    </>
  );
}

export default App;
