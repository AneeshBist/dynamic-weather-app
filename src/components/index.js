import React, { useEffect, useState } from "react";
import "./styling/styles.css";

const Component = (props) => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("haridwar");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=219e680aeb5a2cab7cf3cccec33e903e`;
      const response = await fetch(url);
      const resJson = await response.json();
      //console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [setSearch]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p> No Data Found </p>
        ) : (
          <div className="info">
            <h2 className="location">
              <i className="fa-solid fa-street-view"></i>
              <p>{search}</p>
            </h2>
            <p id="date"></p>
            <h1 className="temp">{city.temp}&deg;C</h1>
            <h3 className="temp min-max">
              {" "}
              Min {city.temp_min}&deg;C | Max {city.temp_max}&deg;C
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
