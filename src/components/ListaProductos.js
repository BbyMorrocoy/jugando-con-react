import { useState } from "react";

function ListaProductos({productos, handlerCarrito}) {
  const [contadores, setContadores] = useState({});



  function handlerContador(accion, id) {
    setContadores(prev => {
      const contActual = prev[id] || 0;
      if (accion === "-") {
        return {...prev, [id]: contActual -1}
      } else {
        return {...prev, [id]: contActual +1}
      }
    });
  }

  return (
    <div>
      {productos.map((producto) => (
        <div key={producto.id}>
          <img src={producto.url} alt='' />
          <h3>{producto.name}</h3>
          <p>{producto.description}</p>
          <h4>${producto.price}</h4>
          <div>
            <button onClick={() => handlerContador("-")}>-</button>
            <label>{contadores[producto.id] || 0}</label>
            <button onClick={() => handlerContador("+", producto.id)}>+</button>
            <button onClick={() => handlerCarrito(producto.id)}>Agregar al carro</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListaProductos;
