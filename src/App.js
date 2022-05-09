import logo from "./logo.svg";
import "./App.css";
import "./form.css";

import React, { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState([]);
  const [streams, setStreams] = useState([]);
  const [url, setUrl] = useState("");
  const getSecondPart = (text) => {
    let arr = text.split("=");
    console.log(arr[1]);
    return arr[1];
  };
  const getData = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/get/QZoEAbT4Kuc", {
      headers: {
        Accept: "application/json",
      },
    });

    const data = await response.json();
    setData(data);
    setStreams(data.streams);
    console.log(data);
  };
  return (
    <div className="">
      <div className="text-center">
        <form>
          <h1 className="h3 mb-3 fw-normal">Enter the youtube URL</h1>
          <div className="form-floating">
            <label htmlFor="floatingInput">URL</label>
            <input
              className="form-control"
              id="floatingInput"
              placeholder=""
              value={url}
              onChange={(e) => setUrl(getSecondPart(e.target.value))}
            />
          </div>
          <button
            className="w-100 btn btn-lg btn-primary"
            type="submit"
            onClick={(e) => {
              getData(e);
            }}
          >
            Get Video Data
          </button>
          <p className="mt-5 mb-3 text-muted">© 2022</p>
        </form>
      </div>

      {data.length > 0 && (
        <>
          <h3>{data.title}</h3>
        </>
      )}
    </div>
  );
}

export default App;
