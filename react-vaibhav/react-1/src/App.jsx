import { useState } from 'react'
import './App.css'
import Form from './Form.jsx'
import Checkbox from './Checkbox.jsx'
import Radio from './Radio.jsx'
import Map from './Map.jsx'
import Card from './Card.jsx'
import UseRef from './Useref.jsx'

function App() {
  return (
    <div>
      <UseRef />
      <Card/>
      <h1 style={{color:"red", backgroundColor:'grey'}}>Skills</h1>
      <Checkbox />
      <Form />
      <Radio />
      <Map/>
    </div>
  )
}

export default App;