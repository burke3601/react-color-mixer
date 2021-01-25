
import './App.css';

import { useState } from 'react';
import ColorPicker from './ColorPicker';
import FakeDiv from './FakeDiv';
function App() {

  const[red, setRed] = useState(25)
  const[green, setGreen] = useState(255)
  const[blue, setBlue] = useState(25)

  const appStyle = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`
  }


  return (

    <FakeDiv 
      className="fakey-body" 
      style={appStyle}> 

      <ColorPicker
        label="Red:   "
        color={red}
        setColor={setRed}
      />
      <br></br>


      <ColorPicker
        label="Green:"
        color={green}
        setColor={setGreen}
        />

        <br></br>

        <ColorPicker
          label="Blue:  "
          color={blue}
          setColor={setBlue}
        />

        <br></br>
    
    </FakeDiv>
  );
}

export default App;
