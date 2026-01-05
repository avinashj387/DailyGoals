import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function clear() {
    setEmail("");
    setName("");
    setPassword("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully");
  }

  return (
    <div>
      <h3>Login to your account</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder='Enter Your Name'
        />
        <br />
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder='Enter Your Email'
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder='Enter Your Password'
        />
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={{clear,}}>Clear Form</button>
      </form>

      <h2>Name: {name}</h2>
      <h2>Email: {email}</h2>
      <h2>Password: {password}</h2>
    </div>
  )
}

export default Form;