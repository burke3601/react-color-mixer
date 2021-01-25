import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App() {

  const[red, setRed] = useState(23)
  const[green, setGreen] = useState(10)
  const[blue, setBlue] = useState(9)

  const appStyle = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`
  }


  return (
    <div className="fakey-body" style={appStyle}> 
      R: <input type="range" min="0" max="255"

      value={red}
      onChange={(event) => {
        //console.log(event.target.value);
        setRed(event.target.value)
      }}
      
      />
      {red}
      <br></br>


      G: <input type="range" min="0" max="255"

        value={green}
        onChange={(event) => {
          //console.log(event.target.value);
          setGreen(event.target.value)
        }}

        />
        {green}

        <br></br>

      B: <input type="range" min="0" max="255"

          value={blue}
          onChange={(event) => {
            //console.log(event.target.value);
            setBlue(event.target.value)
          }}

          />
          {blue}
    
    </div>
  );
}

export default App;
