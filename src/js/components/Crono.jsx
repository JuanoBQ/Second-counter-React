import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Crono = () => {
  const [time, setTime] = useState(0);
  const [digits, setDigits] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const cronometro = setInterval(() => {
      setTime((time) => (time > 0 ? time - 1 : 0));
    }, 1000);

    return () => clearInterval(cronometro);
  }, []);

  //-------------------------------------------------------------------------

  useEffect(() => {
    const number = String(time).padStart(4, "0").split("");
    setDigits(number);
  }, [time]);

  //-------------------------------------------------------------------------
  let count = 0;
  const handleTime = (e) => {
    count = e.target.value;
  };

  const regresiveCount = () => {
    setTime(count);
  };
  //--------------------------------------------------------------------------

  return (
    <div className="card" style={{ width: 400 }}>
      <div className="card-body">
        <h1 className="card-title">COUNTDOWN</h1>
        <hr />

        <div className="container-fluid d-flex align-items-center mb-2">
          <div className="d-flex justify-content-center me-4">
            <i className="fa-solid fa-stopwatch" style={{ fontSize: 30 }}></i>
          </div>

          <div className="d-flex row">
            <input
              className="rounded col-9 ms-2"
              type="setTime"
              name="time"
              id="time"
              placeholder="000000"
              onChange={handleTime}
            />
            <div className="container d-flex align-items-center mb-2">
              <h2
                className="rounded col-3"
                style={{ backgroundColor: "silver" }}
              >
                {digits[0]}
              </h2>
              <h2
                className="rounded col-3"
                style={{ backgroundColor: "silver" }}
              >
                {digits[1]}
              </h2>
              <h2
                className="rounded col-3"
                style={{ backgroundColor: "silver" }}
              >
                {digits[2]}
              </h2>
              <h2
                className="rounded col-3"
                style={{ backgroundColor: "silver" }}
              >
                {digits[3]}
              </h2>
            </div>
          </div>
        </div>
        <button className="btn btn-primary" onClick={regresiveCount}>
          Set
        </button>
      </div>
    </div>
  );
};

export default Crono;
