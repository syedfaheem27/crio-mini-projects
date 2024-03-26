import { useState, useEffect, useRef } from "react";
import Card from "./components/CountryCard";

export const DATA_PER_PAGE = 50;
let DATA = [];

function App() {
  const [countries, setCountries] = useState([]);
  const ref = useRef(null);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      if (!res.ok) throw new Error("Some Error occurred!");

      const data = await res.json();
      console.log(data)
      DATA = data;
      setCountries(
        DATA.filter((_, i) => {
          const data_num = i + 1;
          const max_data = page * DATA_PER_PAGE;

          return data_num <= max_data;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px 0px 96px 0px",
      threshold: 0.1,
    };

    const obsCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        if (countries.length === 0) return;
        if (page === Math.ceil(DATA.length / DATA_PER_PAGE)) return;

        setPage((page) => page + 1);
        observer.unobserve(entry.target);
      });
    };
    const observer = new IntersectionObserver(obsCallback, options);
    let copy_ref;
    if (ref.current) {
      copy_ref = ref.current;
      observer.observe(ref.current)
    }

    return () => {
      if (copy_ref) observer.unobserve(copy_ref);
    };
  }, [ref, countries]);

  useEffect(() => {
    if (page === 1) return;
    const max_page = Math.ceil(DATA.length / DATA_PER_PAGE);

    setCountries(
      DATA.filter((_, i) => {
        const data_num = i + 1;
        const page_num = page === max_page ? page : page + 1;
        const max_data = page_num * DATA_PER_PAGE;

        return data_num <= max_data;
      })
    );
  }, [page]);

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
      <footer
        ref={ref}
        style={{
          height: "100px",
          width: "100vw",
          marginTop: "48px",
        }}
      ></footer>
    </>
  );
}

export default App;
