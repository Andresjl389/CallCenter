import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  AñadirInformeScreen,
  CLienteScreen,
  HomeScreen,
  InformeScreen,
  TransaccionActivoFijoScreen,
  TransactionScreen,
  CuentasPorCobrarScreen,
} from "../../ui/screens";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/Transaccion" element={<TransactionScreen />} />
        <Route
          path="/TransaccionActivoFijo"
          element={<TransaccionActivoFijoScreen />}
        />
        <Route path="/Informe" element={<InformeScreen />} />
        <Route path="/Informe/añadir" element={<AñadirInformeScreen />} />
        <Route path="/Cliente" element={<CLienteScreen />} />
        <Route path="/CuentasPorCobrar" element={<CuentasPorCobrarScreen />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
