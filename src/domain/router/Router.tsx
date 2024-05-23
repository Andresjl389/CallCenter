import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  AñadirInformeScreen,
  CrearCliente,
  HomeScreen,
  InformeScreen,
  CrearTransaccionActivoFijo,
  TransactionScreen,
  CrearCuentasPorCobrar,
  Clientes,
  CuentasPorCobrarScreen,
  CuentasPorPagarScreen,
  PresupuestosScreen,
  ProveedorScreen,
  TransaccionActivoFijoScreen,
  CrearCuentasPorPagar,
  CrearPresupuestos,
  CrearProveedor
} from "../../ui/screens";


const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/Transaccion" element={<TransactionScreen />} />
        <Route path="/TransaccionActivoFijo/añadir"element={<CrearTransaccionActivoFijo />}/>
        <Route path="/TransaccionActivoFijo"element={<TransaccionActivoFijoScreen />}/>
        <Route path="/Informe" element={<InformeScreen />} />
        <Route path="/Informe/añadir" element={<AñadirInformeScreen />} />
        <Route path="/cliente/añadir" element={<CrearCliente />} />
        <Route path="/Cliente" element={<Clientes />} />
        <Route path="/CuentasPorCobrar/añadir" element={<CrearCuentasPorCobrar />} />
        <Route path="/CuentasPorCobrar" element={<CuentasPorCobrarScreen />} />
        <Route path="/CuentasPorPagar" element={<CuentasPorPagarScreen />} />
        <Route path="/CuentasPorPagar/añadir" element={<CrearCuentasPorPagar />} />
        <Route path="/Presupuestos" element={<PresupuestosScreen />} />
        <Route path="/Presupuestos/añadir" element={<CrearPresupuestos />} />
        <Route path="/Proveedor" element={<ProveedorScreen />} />
        <Route path="/Proveedor/añadir" element={<CrearProveedor />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
