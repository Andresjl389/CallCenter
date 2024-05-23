import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TransaccionesType } from './domain/interfaces';
import AppRouter from './domain/router/Router';

function App() {

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
