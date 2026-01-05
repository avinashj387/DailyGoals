import { useRef } from "react"

function Useref() {
  const useEffect = useRef(null);
  const eventHandler = () => {
    useEffect.current.focus();
    useEffect.current.placeholder="enter Feedback here";
    useEffect.current.style.color='red'
  }
  const toggleHandler=()=>{
    if(useEffect.current.style.display!='none'){
      useEffect.current.style.display='none'
    }else{
      useEffect.current.style.display='inline'
    }
  }
  return (
    <div>
      <h1>UseRef in React</h1>
      <button onClick={toggleHandler}>Toggle</button>
      <input ref={useEffect} type="text" placeholder="feedback" />
      <button onClick={eventHandler}>submit</button>
      
      <hr />
    </div>
  )
}
export default Useref;