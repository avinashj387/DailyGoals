import {  useState } from "react";

function Radio() {
  const [gender, setGender] = useState("male");
  const [city, setCity] = useState("pishor");

  return (
    <div>
      <h3>handle Radio Button in react.js</h3>
      <input 
        type="radio" 
        name="gender" 
        id="male" 
        value={"male"} 
        onChange={(event) => setGender(event.target.value)} 
        checked={gender === "male"} 
      />
      <label htmlFor="male">Male</label>
      
      <input 
        type="radio" 
        name="gender" 
        id="female" 
        value={"female"} 
        onChange={(event) => setGender(event.target.value)} 
        checked={gender === "female"} 
      />
      <label htmlFor="female">Female</label>
      
      <h2>Selected Gender: {gender}</h2>
      
      <br />
      <br />
      <br />
      
      <h3>Select City</h3>
      <select onChange={(event) => setCity(event.target.value)} value={city}>
        <option value="pishor">Pishor</option>
        <option value="kannad">Kannad</option>
        <option value="vasadi">Vasadi</option>
        <option value="sillod">Sillod</option>
      </select>
      <h2>Selected City: {city}</h2>
    </div>
  )
}

export default Radio;