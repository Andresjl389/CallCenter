import React, { useState } from "react";
import styled from "styled-components";
import {
  HeaderComponent,
  FormInputComponent,
  CardComponent,
  SelectInputComponent,
  SeccionComponent,
} from "../../components";
import { Button } from "@mui/material";
import { useCuentasPorCobrarModel } from "../../../domain/models";
import { useServices } from "../../../hooks";

const CrearCuentasPorCobrar = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [idCliente, setIdCliente] = useState("");
  const [idTransaccion, setIdTransaccion] = useState("");
  const [montoPendiente, setMontoPendiente] = useState("");
  const [fecha, setFecha] = useState("");
  const [espera, setEspera] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleStyle = () => {
    return sidebarCollapsed ? "220px" : "80px";
  };

  const { crearCuentasPorCobrar } = useCuentasPorCobrarModel();
  const {
    loading,
    clienteData: cliente,
    transaccionData: transaccion,
  } = useServices({ loadClientes: true, loadTransacciones: true });

  const handleSubmit = async() => {
    setEspera(true);
    try{
      const cuenta = {
        monto_pendiente: montoPendiente,
        fecha_vencimiento: fecha,
        id_cliente: idCliente,
        id_transaccion: idTransaccion,
      };
      console.log("DATOS: ",cuenta)
      await crearCuentasPorCobrar(cuenta);
      alert("Cuenta por cobrar creada exitosamente");
      window.location.reload();
    }catch(error){
      console.log(error);
    }finally{
      setEspera(false);
    }
  }

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height:'100vh'
        }}
      >
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <>
      <HeaderComponent
        toggleSidebar={toggleSidebar}
        sidebarCollapsed={sidebarCollapsed}
      />
      <div
        style={{
          display: "flex",
          marginLeft: handleStyle(),
          flexDirection: "column",
        }}
      >
        <CardComponent title="Registro cuentas por cobrar">
          <FormInputComponent
            label="Monto pendiente"
            name="monto_peniente"
            type="number"
            onChange={(event) => setMontoPendiente(event.target.value)}
            value={montoPendiente}
          />
          <FormInputComponent
            label="Fecha vencimiento"
            name="fencha_vencimiento"
            type="date"
            onChange={(event) => setFecha(event.target.value)}
            value={fecha}
          />
          <SelectInputComponent
              label="Cliente"
              value={idCliente}
              onChange={(event) => {
                setIdCliente(event.target.value);
              }}
            >
              {cliente?.map((item) => (
                <option
                  key={item.id_cliente?.toString()}
                  value={item.id_cliente.toString()}
                >
                  {item.id_cliente?.toString()} {item.nombre}
                </option>
              ))}
            </SelectInputComponent>
          <SelectInputComponent
              label="Transacción"
              value={idTransaccion}
              onChange={(event) => {
                setIdTransaccion(event.target.value);
              }}
            >
              {transaccion?.map((item) => (
                <option
                  key={item.id_transaccion?.toString()}
                  value={item.id_transaccion?.toString()}
                >
                  {item.id_cliente?.toString()} {item.tipo_transaccion}
                </option>
              ))}
            </SelectInputComponent>

          <Button
            variant="contained"
            style={{ gridColumn: "1/-1", width: "50%", margin: "auto" }}
            onClick={handleSubmit}
            disabled={espera || loading}
          >
            Enviar
          </Button>
        </CardComponent>
      </div>
    </>
  );
};

export default CrearCuentasPorCobrar;
