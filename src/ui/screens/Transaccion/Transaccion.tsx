import React, { useState } from "react";
import styled from "styled-components";
import { HeaderComponent, FormInputComponent } from "../../components";

const Transaccion = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [idTransaccion, setIdTransaccion] = useState("");
  const [fecha, setFecha] = useState("");
  const [monto, setMonto] = useState("");
  const [tipoTransaccion, setTipoTransaccion] = useState("");
  const [idCliente, setIdCliente] = useState("");
  const [idPresupuesto, setIdPresupuesto] = useState("");
  const [idActivoFijo, setIdActivoFijo] = useState("");
  const [idInforme, setIdInforme] = useState("");

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleStyle = () => {
    return sidebarCollapsed ? "220px" : "80px";
  };

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
        <Container>
          <Title>Registro Transaccion</Title>
          <FormInputComponent
            label="ID de Transacción"
            name="id_transaccion"
            type="number"
            onChange={(event) => setIdTransaccion(event.target.value)}
            value={idTransaccion}
          />
          <FormInputComponent
            label="Fecha"
            name="fecha"
            type="date"
            onChange={(event) => setFecha(event.target.value)}
            value={fecha}
          />
          <FormInputComponent
            label="Monto"
            name="monto"
            type="number"
            onChange={(event) => setMonto(event.target.value)}
            value={monto}
          />
          <FormInputComponent
            label="Tipo Transaccion"
            name="tipo_transaccion"
            onChange={(event) => setTipoTransaccion(event.target.value)}
            value={tipoTransaccion}
          />
          <FormInputComponent
            label="ID Cliente"
            name="id_cliente"
            type="number"
            onChange={(event) => setIdCliente(event.target.value)}
            value={idCliente}
          />
          <FormInputComponent
            label="ID Presupuesto"
            name="id_presupuesto"
            type="number"
            onChange={(event) => setIdPresupuesto(event.target.value)}
            value={idPresupuesto}
          />
          <FormInputComponent
            label="ID Activo Fijo"
            name="id_activo_fijo"
            type="number"
            onChange={(event) => setIdActivoFijo(event.target.value)}
            value={idActivoFijo}
          />
          <FormInputComponent
            label="ID Informe"
            name="id_informe"
            type="number"
            onChange={(event) => setIdInforme(event.target.value)}
            value={idInforme}
          />
        </Container>
      </div>
    </>
  );
};

export default Transaccion;

const Container = styled.div`
  grid-template-rows: auto 1fr;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 700px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  align-self: center;
  margin-top: 50px;
`;

const Title = styled.div`
  grid-row: 1; /* Coloca el título en la primera fila */
  grid-column: 1 / -1; /* Ocupa todas las columnas disponibles */
  text-align: center; /* Centra el texto horizontalmente */
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px; /* Agrega espacio debajo del título */
`;
