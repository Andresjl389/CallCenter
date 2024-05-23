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
import { useCuentasPorPagarModel } from "../../../domain/models";
import { useServices } from "../../../hooks";

const CrearCuentasPorPagar = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [espera, setEspera] = useState<boolean>(false);
  const [factura, setFactura] = useState("");
  const [montoPendiente, setMontoPendiente] = useState("");
  const [fecha, setFecha] = useState("");
  const [proveedorDebe, setProveedorDebe] = useState("");
  const [idTransaccion, setIdTransaccion] = useState("");
  const [radioValue, setRadioValue] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleStyle = () => {
    return sidebarCollapsed ? "220px" : "80px";
  };

  const { crearCuentasPorPagar } = useCuentasPorPagarModel();
  const {
    loading,
    transaccionData: transaccion,
  } = useServices({ loadTransacciones: true });

  const handleSubmit = async () => {
    setEspera(true);
    try {
      const cuenta = {
        numero_factura: factura,
        monto_pendiente: montoPendiente,
        fecha_vencimiento: fecha,
        proveedor_debe: proveedorDebe,
        estado: radioValue,
        id_transaccion: idTransaccion,
      };
      console.log("DATOS: ", cuenta);
      await crearCuentasPorPagar(cuenta);
      alert("Cuenta por cobrar creada exitosamente");
      window.location.reload();
    } catch (error) {
      console.log(error);
    } finally {
      setEspera(false);
    }
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
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
        <CardComponent title="Registro cuentas por pagar">
          <FormInputComponent
            label="Numero factura"
            name="numero_factura"
            type="number"
            onChange={(event) => setFactura(event.target.value)}
            value={factura}
          />
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
          <FormInputComponent
            label="Proveedor debe"
            name="proveedor_debe"
            type="text"
            onChange={(event) => setProveedorDebe(event.target.value)}
            value={proveedorDebe}
          />
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
                {item.id_transaccion?.toString()} {item.tipo_transaccion}
              </option>
            ))}
          </SelectInputComponent>

          <FormInputComponent
            label="Estado actual "
            name="estado_actual"
            type="radio"
            options={[
              { label: "Activo", value: "true" },
              { label: "Inactivo", value: "false" },
            ]}
            value={radioValue.toString()}
            onChange={(event) => setRadioValue(event.target.value ? true : false)}
          />

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

export default CrearCuentasPorPagar;
