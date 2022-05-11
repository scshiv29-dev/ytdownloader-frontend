
import "./App.css";
import Typewriter from "typewriter-effect";
import Videos from "./Videos";
import React, { useState} from "react";
function App() {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  const [url, setUrl] = useState("");
  const getSecondPart = (text) => {
    let arr = text.split("=");
    let arr2 = text.split("be/");
    console.log(arr[1]);
    console.log(arr2[1]);
    if (arr[1] !== undefined)return arr[1];
    else return arr2[1];
  };
  const getData = async (e) => {
    e.preventDefault();
    setData([]);
    setFlag(true);
    const response = await fetch(`https://ytlaw.herokuapp.com/get/${url}`, {
      headers: {
        Accept: "application/json",
      },
    });

    const data = await response.json().catch((err) => {console.log(err)});
    setData(data);
    
  };
  const handleInput = () => {
    const input = document.getElementById("GetVideo");
    input.classList.remove("d-none");
  }
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
            typewriter.typeString('Paste youtube URL')
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
          onInput={handleInput}
          />
          </div>
          <button
            id="GetVideo"
            className="btn btn-outline-warning d-none fw-bolder mt-5"
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
    
    {flag ? typeof data.stream != "undefined" ? <><Videos videos={data} /></> :<><div id="spinner" className="spinner"></div></> : <></>}
    </div>
  );
}

export default App;
