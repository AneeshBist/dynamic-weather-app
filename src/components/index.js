import React, { useEffect, useState } from "react";
import "./styling/styles.css";

const Component = (props) => {
  const DEFAULT_CITY = "Dehradun";

  const [city, setCity] = useState(null);
  const [search, setSearch] = useState(DEFAULT_CITY);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=219e680aeb5a2cab7cf3cccec33e903e`;
      const response = await fetch(url);
      const resJson = await response.json();
      if (resJson.cod === "400") {
        setSearch(DEFAULT_CITY);
      } else {
        setCity(resJson);
      }
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            placeholder="showing default..."
            onChange={(event) => {
              event.preventDefault();
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city || city.cod === "404" ? (
          <div className="no-data"> No Data Found </div>
        ) : (
          <div className="info">
            <h2 className="location">
              <i className="fa-solid fa-street-view"></i>
              <p>{city.name}</p>
            </h2>
            <p id="date"></p>
            <h1 className="temp">{city.main.temp}&deg;C</h1>
            <h3 className="temp min-max">
              {" "}
              Min {city.main.temp_min}&deg;C | Max {city.main.temp_max}&deg;C
            </h3>
          </div>
        )}
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>
    </>
  );
};

export default Component;
