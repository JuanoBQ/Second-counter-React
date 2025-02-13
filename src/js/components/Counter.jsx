import React from "react";
import { useState, useEffect } from "react";

const Counter = () => {
  const [sec, setSec] = useState(0);
  const [digits, setDigits] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const segundos = setInterval(() => {
      setSec((sec) => sec + 1);
    }, 1000);

    return () => clearInterval(segundos);
  });

  useEffect(() => {
    const number = String(sec).padStart(4, "0").split("");
    setDigits(number);
  }, [sec]);

  const reiniciar = () => {
    setSec((sec) => (sec = 0));
  };

  return (
    <div className="card" style={{ width: 400 }}>
      <div className="card-body">
        <h1 className="card-title">ONLINE</h1>
        <hr />
        <div className=" container d-flex align-items-center mb-2">
          <i
            className="fa-regular fa-clock justify-content-center me-2 col-2"
            style={{ fontSize: 30 }}
          ></i>
          <h2 className="rounded col-2" style={{ backgroundColor: "silver" }}>
            {digits[0]}
          </h2>
          <h2 className="rounded col-2" style={{ backgroundColor: "silver" }}>
            {digits[1]}
          </h2>
          <h2 className="rounded col-2" style={{ backgroundColor: "silver" }}>
            {digits[2]}
          </h2>
          <h2 className="rounded col-2" style={{ backgroundColor: "silver" }}>
            {digits[3]}
          </h2>
        </div>
        <button className="btn btn-primary" onClick={reiniciar}>
          Restart
        </button>
      </div>
    </div>
  );
};

export default Counter;
