import { useEffect, useState } from "react";
import "./App.css";
import ListaProductos from "./components/ListaProductos";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./db/firebaseconfig";

function App() {
  const [productosC, setProductosC] = useState({})
  const [users, setUsers] = useState([]);
  const [bool, setBool] = useState(false)
    const productos = [
    {
      id: 1,
      name: "iPhone 15",
      price: 999,
      description: "Smartphone con cámara de 48MP y chip A17 Pro",
      url: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300",
    },
    {
      id: 2,
      name: "MacBook Air",
      price: 1199,
      description: "Laptop ultradelgada con chip M2 y 13 pulgadas",
      url: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300",
    },
    {
      id: 3,
      name: "AirPods Pro",
      price: 249,
      description: "Audífonos inalámbricos con cancelación de ruido",
      url: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=300",
    },
    {
      id: 4,
      name: "iPad Pro",
      price: 1099,
      description: "Tablet profesional de 12.9 pulgadas con chip M2",
      url: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300",
    },
  ];

    useEffect(() => {
    const fetchUsers = async () => {
      const snapshot = await getDocs(collection(db, "usuario"));
      const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsers(list);
    };
    fetchUsers();
    console.log(users)
  }, [bool]);

  function handlerCarrito(id){
    productos.map(producto =>{
      if(producto.id === id){
      setProductosC(prev => {
        return {...prev, producto}
    });
      }
    })
    console.log(productosC)
  }

  // Agrega esta función en App.js

async function agregarAuto(modelo, placa, año, kmRecorridos) {
  try {
    const docRef = await addDoc(collection(db, "autos"), {
      modelo: modelo,
      placa: placa,
      año: año,
      kmRecorridos: kmRecorridos,
      fechaRegistro: new Date()
    });
    console.log("Auto agregado con ID: ", docRef.id);
  } catch (error) {
    console.error("Error al agregar auto: ", error);
  }
}

// Ejemplo de uso - puedes llamarla así:
function crearAuto() {
  agregarAuto("Toyota Corolla", "ABC-123", 2020, 45000);
}

  return (
    <div className="App">
      <header className="App-header">
        <ListaProductos productos={productos} handlerCarrito={handlerCarrito}/>
        <button onClick={()=>{setBool(!bool)}}>Hola</button>
        <button onClick={crearAuto}>Hola</button>

      </header>
    </div>
  );
}

export default App;
