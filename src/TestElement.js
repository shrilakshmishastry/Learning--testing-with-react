import React from 'react';

const TestElement = ()=>{
  const [counter,setCount] = React.useState(0);
  return(
    <>
      <h1 data-testid="counter" >{counter}</h1>
      <button data-testid="button-up" onClick={()=>setCount(counter+1)} >
        Up
      </button>
      <button disabled  data-testid="button-down" onClick={()=>setCount(counter-1)} >
        Down
      </button>
    </>
  );
}
export default TestElement;
