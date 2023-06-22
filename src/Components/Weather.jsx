import React, { useState, useEffect } from "react";
import fog from "/Users/petertsekov/Desktop/Projects/Weather2/my-app/src/Pictures/fog copy.png";
import rainy from "/Users/petertsekov/Desktop/Projects/Weather2/my-app/src/Pictures/rainy copy.png";
import sun from "/Users/petertsekov/Desktop/Projects/Weather2/my-app/src/Pictures/sun copy.png";
import weather from "/Users/petertsekov/Desktop/Projects/Weather2/my-app/src/Pictures/weather copy.png";
function Weather() {
  const [data, setData] = useState();
  const [inputValue, setInputValue] = useState();
  const icons = [fog, rainy, sun, weather];
  const [icon1, setIcon1] = useState(icons[Math.round(Math.random() * 3)]);
  const [icon2, setIcon2] = useState(icons[Math.round(Math.random() * 3)]);
  const [icon3, setIcon3] = useState(icons[Math.round(Math.random() * 3)]);
  const [icon4, setIcon4] = useState(icons[Math.round(Math.random() * 3)]);
  const [icon5, setIcon5] = useState(icons[Math.round(Math.random() * 3)]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  function fetchCurrentData(cityName = "Plovdiv") {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9155c8b6f528a136028548c9d9a13c13`
    )
      .then((data) => {
        if (data.ok) {
          return data.json();
        } else {
          setIcon1("");
          setIcon2("");
          setIcon3("");
          setIcon4("");
          setIcon5("");
          console.log("Enter valid city name");
        }
      })
      .then((apiData) => setData(apiData));
    setInputValue("");
  }
  function handleClick(e) {
    if (e.key == "Enter") setIcon1(icons[Math.round(Math.random() * 3)]);
    setIcon2(icons[Math.round(Math.random() * 3)]);
    setIcon3(icons[Math.round(Math.random() * 3)]);
    setIcon4(icons[Math.round(Math.random() * 3)]);
    setIcon5(icons[Math.round(Math.random() * 3)]);
    setInputValue("");
    fetchCurrentData(inputValue);
  }

  function handleClick2(e) {
    if (e.key == "Enter") {
      setIcon1(icons[Math.round(Math.random() * 3)]);
      setIcon2(icons[Math.round(Math.random() * 3)]);
      setIcon3(icons[Math.round(Math.random() * 3)]);
      setIcon4(icons[Math.round(Math.random() * 3)]);
      setIcon5(icons[Math.round(Math.random() * 3)]);
      setInputValue("");
      fetchCurrentData(inputValue);
    }
  }
  useEffect(() => {
    fetchCurrentData(inputValue);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container-fluid position-absolute top-0 bottom-0 d-flex align-items-center mainContainer">
      <div className="container weatherWindow border border-black rounded-4 position-relative">
        <div className="row mt-4">
          <div className="input-group mb-3 mt-2">
            <input
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleClick2}
              value={inputValue}
              type="text"
              className="form-control"
              placeholder="City name"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              onClick={handleClick}
              className="btn btn-outline-secondary fw-bolder"
              type="button"
              id="button-addon2"
            >
              Search
            </button>
          </div>
        </div>
        <div className="row d-block mt-4">
          <div className="col">
            <h2 className="text-center">
              Weather in {data == null ? "" : data.name}
            </h2>
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            <img
              src={
                data == undefined
                  ? ""
                  : `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
              }
              alt=""
            />
            <h3 className="fw-bolder">
              {data == undefined ? "" : Math.round(data.main.temp - 273)} °C
            </h3>
          </div>
          <div className="col">
            <p className="text-center humidity fw-bolder fs-5">
              HUMIDITY: {data == undefined ? "" : data.main.humidity}%
            </p>
          </div>
          <div className="col">
            <p className="text-center wind fw-bolder fs-5">
              WIND: {data == undefined ? "" : data.wind.speed} km/h
            </p>
          </div>
          <div className="container">
            <div className="row row d-flex justify-content-center m-0 fw-bolder">
              <div className="col-2 ms-2 text-center">
                {windowWidth < 560 ? "Mon" : "Monday"}
              </div>
              <div className="col-2 ms-2 text-center">
                {windowWidth < 560 ? "Tue" : "Tuesday"}
              </div>
              <div className="col-2 ms-2 text-center">
                {windowWidth < 560 ? "Wed" : "Wednesday"}
              </div>
              <div className="col-2 ms-2 text-center">
                {windowWidth < 560 ? "Thu" : "Thursday"}
              </div>
              <div className="col-2 ms-2 text-center">
                {windowWidth < 560 ? "Fri" : "Friday"}
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center m-0 fw-bolder text-center">
            <div className="col-2 ms-2 dayilyCont d-grid justify-content-center">
              <img className="imgSize img-fluid" src={icon1} alt="" />
              <p className="mt-3"> {windowWidth < 560 ? "15/3" : "15/3°C"}</p>
            </div>

            <div className="col-2 ms-2 dayilyCont d-grid justify-content-center">
              <img className="imgSize img-fluid" src={icon2} alt="" />
              <p className="mt-3"> {windowWidth < 560 ? "20/3" : "20/5°C"}</p>
            </div>
            <div className="col-2 ms-2 dayilyCont d-grid justify-content-center">
              <img className="imgSize img-fluid" src={icon3} alt="" />
              <p className="mt-3"> {windowWidth < 560 ? "18/2" : "18/2°C"}</p>
            </div>
            <div className="col-2 ms-2 dayilyCont d-grid justify-content-center">
              <img className="imgSize img-fluid" src={icon4} alt="" />
              <p className="mt-3"> {windowWidth < 560 ? "21/7" : "21/7°C"}</p>
            </div>
            <div className="col-2 ms-2 dayilyCont d-grid justify-content-center">
              <img className="imgSize img-fluid" src={icon5} alt="" />
              <p className="mt-3"> {windowWidth < 560 ? "23/8" : "23/8°C"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
