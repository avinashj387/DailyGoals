import Input from './Input';
import { useState } from 'react';
import Color from './Color';



function App() {
  const [display, setdisplay] = useState(true);
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Toggle in rect.js</h1>
      <h1>{count}</h1>
      <button onClick={() => setdisplay(!display)}>Toggle</button>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      {
        display ? <h1>vaibhav nawale</h1> : null
      }
      {
        count==0 ? <h1>condition 0</h1>
        :count==1 ? <h1>condition 1</h1>
        :count==2 ? <h1>condition 2</h1>
        :count==3 ? <h1>condition 3</h1>
        :count==4 ? <h1>condition 4</h1>
        :count==5 ? <h1>condition 5</h1>
        :count==6 ? <h1>condition 6</h1>
        :count==7 ? <h1>condition 7</h1>
        :<h1>Error</h1>
      }
    </div>
  );


}

export default App;
