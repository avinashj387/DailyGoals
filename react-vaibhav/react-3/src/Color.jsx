import { useState, useStatel } from "react";

function Color() {
  const [color, setColor] = useState("Blue");
  const colorChnager=()=>{
    setColor("Red");
  }
  return(
    <div>
      <h1>creating  state from another file </h1>
      <h1>{color}</h1>
      <button onClick={colorChnager}>Change Color</button>
    </div>
  );
}

export default Color;