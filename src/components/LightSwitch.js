import { useState } from "react";

function LightSwitch() {
  const [lightSwitch, setLightSwitch] = useState(false);

  {/* 
    this.state = {
      lightSwitch: false,
      setLightSwitch(x) {
        lightSwitch = x;
      }
    }
*/}

  function turnLightOn() {
    setLightSwitch(true);
  }

  function turnLightOff() {
    setLightSwitch(false);
  }

  return (
    <div>
      <p>{lightSwitch ? "Light is ON" : "Light is OFF"}</p>
      <button onClick={turnLightOn}>ON</button>
      <button onClick={turnLightOff}>OFF</button>
    </div>
  );
}

export default LightSwitch;
