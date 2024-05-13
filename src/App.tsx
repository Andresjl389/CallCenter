import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useGetTransaccionModel } from './domain/models';
import { TransaccionesType } from './domain/interfaces';
import AppRouter from './domain/router/Router';

function App() {

  const { obtenerTransacciones } = useGetTransaccionModel()
  const [transacciones, setTransacciones] = useState<TransaccionesType[]>()

  const handleTransacciones = async() => {
    const data = await obtenerTransacciones()
    console.log(data)
    setTransacciones(data)
  }

  useEffect(() => {
    handleTransacciones()
  },[])

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
