import logo from "./logo.svg";
import "./App.css";
import Typewriter from "typewriter-effect";
import Videos from "./Videos";
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
    const response = await fetch(`https://87epkm.deta.dev/get/${url}`, {
      headers: {
        Accept: "application/json",
      },
    });

    const data = await response.json();
    setData(data);
    setStreams(data.streams);
    // console.log(data);
  };
  return (
    <div>
    <main className="container">
      <div className="card-wrapper">
        <form className="content">
        
          <h3 className="typing text-capitalize fw-bolder">
          <Typewriter 
          options={{
          autoStart: true,
          loop: true,
          }}
          onInit={(typewriter) => {
            typewriter.typeString('Enter the youtube URL')
            .pauseFor(2500)
            .deleteAll()       
            .start();
          } 
          }
          /></h3>
        
          <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">URL</span>
          <input type="text" 
          className="form-control" 
          placeholder="" 
          aria-label="Url" 
          aria-describedby="addon-wrapping" 
          value={url}
          onChange={(e) => setUrl(getSecondPart(e.target.value))}
          />
          </div>
          <button
            className="btn btn-outline-warning fw-bolder mt-5"
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

    
    </main>
    
    {typeof data.stream != "undefined" ? <Videos videos={data} /> :<></>}
    </div>
  );
}

export default App;
