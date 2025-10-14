import { useEffect, useState } from "react";

function Contador({titulo}) { 
  const [count, setCount] = useState(0);
  const handleIncrement = () => { 
    setCount(count + 1); 
  };

  useEffect ( () => { 
    document.title = `${count}`;
   }, [count] ); 

  return ( 
    <div> 
      <h1>{titulo}: {count}</h1> 
      <button onClick={handleIncrement}>Incremento</button> 
    </div> 
  ); 
}
export default Contador;