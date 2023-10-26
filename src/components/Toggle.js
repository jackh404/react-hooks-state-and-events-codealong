import React, {useState} from "react";


function Toggle() {
  const [power, switchPower] = useState(false)
  return <button onClick={()=>switchPower((current)=>!current)}>{power? 'ON' : 'OFF'}</button>;
}

export default Toggle;
