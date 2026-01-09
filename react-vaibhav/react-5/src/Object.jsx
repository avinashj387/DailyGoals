import { useState } from "react";

function Object(){
  const [data, setdata] = useState({
    name : "vaibhav",
    address : {
      city:'Chh. Sambhajinagar',
      country: "india"
    }
})
const handleupdate=(val)=>{
  data.name = val
  setdata({...data})
}
const handleAddress=(city,country)=>{
 
  setdata({...data,address:{...data.address,city:city}})
  setdata({...data,address:{...data.address,country:country}})
}
const handleCountry=(country)=>{
  
  setdata({...data,address:{...data.address,country:country}})
}



  return(
    <div>
      <h1>Updating Objects in state </h1>
      <input onChange={(event)=>handleupdate(event.target.value)} type="text" placeholder="update user" />
      <input onChange={(event)=>handleAddress(event.target.value)} type="text" placeholder="update address" />
      <input onChange={(event)=>handleCountry(event.target.value)} type="text" placeholder="update country" />
      <h2>Name:{data.name}</h2>
      <h2>city:{data.address.city}</h2>
      <h2>country:{data.address.country}</h2>
    </div>
  )
}

export default Object;