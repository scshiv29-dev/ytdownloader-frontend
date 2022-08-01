
import "./App.css";
import Typewriter from "typewriter-effect";
import Videos from "./Videos";
import React, { useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  toast.error("msg from devs: Website wont work at end of the month because backend is hosted on heroku free dyno",{
    toastId: 'success1',
});

  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  const [url, setUrl] = useState("");
  const getSecondPart = (text) => {
    let arr = text.split("=");
    let arr2 = text.split("be/");
    if (arr[1] !== undefined)return arr[1];
    else return arr2[1];
  };
  const getData = async (e) => {
    e.preventDefault();
    setData([]);
    setFlag(true);
    const errorElement = document.getElementById("Error")
    if (errorElement.classList.length <=0)   errorElement.classList.add("d-none");
    fetch(`https://home.linkjaye.ga/get/${url}`, {
      headers: {
        Accept: "application/json",
      },
    }).then(res => {return res.json()}).then(data => {setData(data)}).catch(err => {errorElement.classList.remove("d-none"); setFlag(false)})

    
    
  };
  const handleInput = () => {
    const input = document.getElementById("GetVideo");
    input.classList.remove("d-none");
  }
  return (
    <div>
    <ToastContainer />
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
    
    {flag ? typeof data.stream != "undefined" ? <><Videos videos={data} url={url}/></> :<><div id="spinner" className="spinner"></div></> : <></>}
    <div id="Error" className="d-none "><h3 className="typing text-capitalize fw-bolder">Sorry,Unable to get that Video</h3></div>
    </div>
  );
}

export default App;
