import { useState } from "react";

function Checkbox() {
  const [skills, setSkills] = useState([]);
  
  const handler = (event) => {
    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((item) => item !== event.target.value));
    }
  }
  
  return(
    <div>
      <input type="checkbox" onChange={handler} id="HTML" value="HTML"/>
      <label htmlFor="HTML">HTML</label>
      <br />
      <br />
      
      <input type="checkbox" onChange={handler} id="css" value="CSS"/>
      <label htmlFor="css">CSS</label>
      <br />
      <br />
      
      <input type="checkbox" onChange={handler} id="java" value="Java"/>
      <label htmlFor="java">Java</label>
      <br />
      <br />
      
      <input type="checkbox" onChange={handler} id="react" value="React"/>
      <label htmlFor="react">React</label>
      <br />
      <br />
      
      <input type="checkbox" onChange={handler} id="PHP" value="PHP"/>
      <label htmlFor="PHP">PHP</label>
      <br />
      <br />
      
      <h3>Skills: {skills.join(", ")}</h3>
    </div>
  );
}

export default Checkbox;