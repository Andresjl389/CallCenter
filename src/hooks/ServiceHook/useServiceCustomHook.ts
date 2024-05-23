import React, { useState, useEffect } from "react";
import {
  ClienteType,
  CuentasPorCobrarType,
  CuentasPorPagarType,
  InformeType,
  PresupuestosType,
  ProveedorType,
  TransaccionesType,
  TransaccionActivoFijo,
} from "../../domain/interfaces";
import {
  useClienteModel,
  useCuentasPorCobrarModel,
  useInformeModel,
  usePresupuestosModel,
  useProveedorModel,
  useTransaccionActivoFijoModel,
  useTransaccionModel,
  useCuentasPorPagarModel,
} from "../../domain/models";

type Props = {
  loadClientes?: boolean;
  loadInformes?: boolean;
  loadCuentasPorPagar?: boolean;
  loadCuentasPorCobrar?: boolean;
  loadPresupuestos?: boolean;
  loadProveedores?: boolean;
  loadTransacciones?: boolean;
  loadTransaccionActivoFijo?: boolean;
};

const useServices = ({
  loadClientes,
  loadInformes,
  loadCuentasPorPagar,
  loadCuentasPorCobrar,
  loadPresupuestos,
  loadProveedores,
  loadTransacciones,
  loadTransaccionActivoFijo,
}: Props) => {
  const [clienteData, setClienteData] = useState<ClienteType[]>();
  const [informeData, setInformeData] = useState<InformeType[]>();
  const [cuentasPagarData, setCuentasPagarData] = useState<CuentasPorPagarType[]>();
  const [cuentasCobrarData, setCuentasCobrarData] = useState<CuentasPorCobrarType[]>();
  const [presupuestosData, setPresupuestosData] = useState<PresupuestosType[]>();
  const [proveedorData, setProveedorData] = useState<ProveedorType[]>();
  const [transaccionData, setTransaccionData] = useState<TransaccionesType[]>();
  const [transaccionActivoFijoData, setTransaccionActivoFijoData] = useState<TransaccionActivoFijo[]>();
  const [loading, setLoading] = useState<boolean>(true);

  const { obtenerClientes } = useClienteModel();
  const { obtenerInformes } = useInformeModel();
  const { obtenerCuentasPorPagar } = useCuentasPorPagarModel();
  const { obtenerCuentasPorCobrar } = useCuentasPorCobrarModel();
  const { obtenerPresupuestos } = usePresupuestosModel();
  const { obtenerProveedor } = useProveedorModel();
  const { obtenerTransacciones } = useTransaccionModel();
  const { obtenerTransaccionActivoFijo } = useTransaccionActivoFijoModel();

  const MethodGet = async () => {
    setLoading(true);
    const promises = [];

    if (loadClientes) promises.push(obtenerClientes().then(setClienteData));
    if (loadInformes) promises.push(obtenerInformes().then(setInformeData));
    if (loadCuentasPorPagar) promises.push(obtenerCuentasPorPagar().then(setCuentasPagarData));
    if (loadCuentasPorCobrar) promises.push(obtenerCuentasPorCobrar().then(setCuentasCobrarData));
    if (loadPresupuestos) promises.push(obtenerPresupuestos().then(setPresupuestosData));
    if (loadProveedores) promises.push(obtenerProveedor().then(setProveedorData));
    if (loadTransacciones) promises.push(obtenerTransacciones().then(setTransaccionData));
    if (loadTransaccionActivoFijo) promises.push(obtenerTransaccionActivoFijo().then(setTransaccionActivoFijoData));

    try {
      await Promise.all(promises);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    MethodGet();
  },[])

  return {
    clienteData,
    informeData,
    cuentasPagarData,
    cuentasCobrarData,
    presupuestosData,
    proveedorData,
    transaccionData,
    transaccionActivoFijoData,
    loading,
  };
};

export default useServices;
