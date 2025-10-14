import { useEffect, useState } from "react";

function FoxComponent() {
  const [data, setData] = useState(null);
    const [buscar, setBuscar] = useState(false);


  useEffect(() => {
    fetch("https://randomfox.ca/floof/")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        console.log("Datos recibidos:", result);
      })
      .catch((error) => console.error("Error al obtener datos:", error));
  }, [buscar]);


  function buscarNuevaImg(){
    setBuscar(!buscar)
  }

  return (
    <div>
      <img src={data?.image || "https://feelthebrain.me/wp-content/uploads/2017/10/question-types.png?w=1400"} alt="Fox"/>
      <button onClick={buscarNuevaImg}>Nueva imagen</button>
    </div>
  );
}

export default FoxComponent;
