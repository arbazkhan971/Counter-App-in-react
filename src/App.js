import './App.css';
import FeatherIcon from 'feather-icons-react';
import {useState} from "react";

function App() {

  const [count,setcount] = useState(0);

  return (
    <div className="counter-box">
         
         <div className="counter-header">
           <h2> Counter App</h2>
         </div>

         <div className="counter">
           <p> {count} </p>
         </div>

         <div className="counter-buttons">

              <button
                onClick={() => setcount(count + 1)}
              >
                <FeatherIcon icon="plus" />
              </button>

              <button
                onClick={() => setcount(count - 1)}

              >
                <FeatherIcon icon="minus" />
              </button>

              <button
                onClick={() => setcount(0)}
              >
                <FeatherIcon icon="refresh-ccw" />
              </button>

         </div>

    </div>
    );
}

export default App;
