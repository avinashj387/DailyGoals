import { useState } from "react"
import AddUser from "./AddUser";
import DisplayUser from "./DisplayUser";
import Userform from "./Userform";
import Object from "./Object";




function App() {
  const [user, setUser] = useState('');
  return (
    <div>
      <Userform />
      <AddUser setUser={setUser} />
      <DisplayUser addeduser={user} />
      <Object />
      
    </div>
  )
}

export default App;
