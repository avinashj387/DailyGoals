import { useState } from "react";

function Card() {
  const [cardstyle, setcardStyle] = useState({
    width: '340px',
    border: '2px solid grey',
    boxShadow: '2px 2px 2px 2px grey',
    padding: '4px 4px 4px 4px',
    gap: '20px',
    marginRight: ' 20px',
    marginBottom: '20px'
  }
  )
  const [text,settext]=useState('balck');
  const changecolor=(backgclor,text)=>{
    setcardStyle({...cardstyle,backgroundColor:backgclor}),
    settext(text)
  }

  return (
    <div>
      <button onClick={()=>changecolor('grey','yellow')}>Change Color</button>
      <button onClick={()=>changecolor('white','black')}>Default Color</button>
      <div style={{ display: 'flex', flexWrap: 'wrap', }}>
        <div style={cardstyle}>
          <img style={{ width: '340px', height: "240px" }} src="https://images.unsplash.com/photo-1654070552470-baf370f1b66e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwMnx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <div style={{ padding: '4px', margin: '1px', color:text}}>
            <h4>vishal more</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardstyle}>
          <img style={{ width: '340px', height: "240px" }} src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          <div style={{ padding: '4px', margin: '1px', color:text}}>
            <h4>vishal more</h4>
            <p>Software Developer</p>
          </div>
        </div>      <div style={cardstyle}>
          <img style={{ width: '340px', height: "240px" }} src="https://images.unsplash.com/photo-1580748195703-0328caea8e9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg2fHx8ZW58MHx8fHx8" alt="" />
          <div style={{ padding: '4px', margin: '1px',color:text }}>
            <h4>vishal more</h4>
            <p>Software Developer</p>
          </div>
        </div>      <div style={cardstyle}>
          <img style={{ width: '340px', height: "240px" }} src="https://images.unsplash.com/photo-1613062832864-d141554f7d5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDkwfHx8ZW58MHx8fHx8" alt="" />
          <div style={{ padding: '4px', margin: '1px',color:text }}>
            <h4>vishal more</h4>
            <p>Software Developer</p>
          </div>
        </div>      <div style={cardstyle}>
          <img style={{ width: '340px', height: "240px" }} src="https://images.unsplash.com/photo-1745178880293-6745f868880e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc3fHx8ZW58MHx8fHx8" alt="" />
          <div style={{ padding: '4px', margin: '1px' ,color:text}}>
            <h4>vishal more</h4>
            <p>Software Developer</p>
          </div>
        </div>      <div style={cardstyle}>
          <img style={{ width: '340px', height: "240px" }} src="https://plus.unsplash.com/premium_photo-1723489275655-ea33cb273109?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU3fHx8ZW58MHx8fHx8" alt="" />
          <div style={{ padding: '4px', margin: '1px',color:text }}>
            <h4>vishal more</h4>
            <p>Software Developer</p>
          </div>
        </div>      <div style={cardstyle}>
          <img style={{ width: '340px', height: "240px" }} src="https://plus.unsplash.com/premium_photo-1723762810488-ae31c6050da4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMzfHx8ZW58MHx8fHx8" alt="" />
          <div style={{ padding: '4px', margin: '1px',color:text }}>
            <h4>vishal more</h4>
            <p>Software Developer</p>
          </div>
        </div>      <div style={cardstyle}>
          <img style={{ width: '340px', height: "240px" }} src="https://plus.unsplash.com/premium_photo-1663089338262-7ba2fd07481d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8" alt="" />
          <div style={{ padding: '4px', margin: '1px', color:text}}>
            <h4>vishal more</h4>
            <p>Software Developer</p>
          </div>
        </div>      <div style={cardstyle}>
          <img style={{ width: '340px', height: "240px" }} src="https://plus.unsplash.com/premium_photo-1661391295164-cdf5902bbd98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8" alt="" />
          <div style={{ padding: '4px', margin: '1px',color:text}}>
            <h4>vishal more</h4>
            <p>Software Developer</p>
          </div>
        </div>      <div style={cardstyle}>
          <img style={{ width: '340px', height: "240px" }} src="https://plus.unsplash.com/premium_photo-1663076171756-66d02a8c6168?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D" alt="" />
          <div style={{ padding: '4px', margin: '1px' ,color:text}}>
            <h4>vishal more</h4>
            <p>Software Developer</p>
          </div>
        </div>      <div style={cardstyle}>
          <img style={{ width: '340px', height: "240px" }} src="https://media.istockphoto.com/id/1086647064/photo/outdoor-close-up-portrait-of-young-10-11-year-old-girl-in-sunlight.webp?a=1&s=612x612&w=0&k=20&c=1CLMKo2swqAKyT4ffAZS9DufjYrkyaZ1VjMRGz1MiSU=" alt="" />
          <div style={{ padding: '4px', margin: '1px' ,color:text}}>
            <h4>vishal more</h4>
            <p>Software Developer</p>
          </div>
        </div>      <div style={cardstyle}>
          <img style={{ width: '340px', height: "240px" }} src="https://media.istockphoto.com/id/682698110/photo/portrait-of-a-red-haired-girl.webp?a=1&s=612x612&w=0&k=20&c=JL92mB3oHv-NL2u5bLl7fmdESZapZTwfMffFJ3EAWr0=" alt="" />
          <div style={{ padding: '4px', margin: '1px' ,color:text}}>
            <h4>vishal more</h4>
            <p>Software Developer</p>
          </div>
        </div>      <div style={cardstyle}>
          <img style={{ width: '340px', height: "240px" }} src="https://media.istockphoto.com/id/1052396252/photo/smiling-young-woman-closeup-portrait-outdoors.webp?a=1&s=612x612&w=0&k=20&c=X__8ruoC24FIBXi4vr6d2P_GbqxBV5-ouS_uxBPoAvA=" alt="" />
          <div style={{ padding: '4px', margin: '1px',color:text }}>
            <h4>vishal more</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardstyle}>
          <img style={{ width: '340px', height: "240px" }} src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          <div style={{ padding: '4px', margin: '1px' ,color:text}}>
            <h4>vishal more</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardstyle}>
          <img style={{ width: '340px', height: "240px" }} src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="" />
          <div style={{ padding: '4px', margin: '1px',color:text }}>
            <h4>vishal more</h4>
            <p>Software Developer</p>
          </div>
        </div>      <div style={cardstyle}>
          <img style={{ width: '340px', height: "240px" }} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="" />
          <div style={{ padding: '4px', margin: '1px' ,color:text}}>
            <h4>vishal more</h4>
            <p>Software Developer</p>
          </div>

        </div>

      </div>
    </div>
  )

}
export default Card;