import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  HeaderComponent,
  FormInputComponent,
  SeccionComponent,
  SelectInputComponent,
} from "../../components";
import { Button } from "@mui/material";
import {
  ClienteType,
  InformeType,
  PresupuestosType,
} from "../../../domain/interfaces";
import {
  useClienteModel,
  useInformeModel,
  usePresupuestosModel,
  useTransaccionModel
} from "../../../domain/models";
import { useServices } from "../../../hooks";

const Transaccion = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [monto, setMonto] = useState("");
  const [tipoTransaccion, setTipoTransaccion] = useState("");
  const [idCliente, setIdCliente] = useState("");
  const [idPresupuesto, setIdPresupuesto] = useState("");
  const [idActivoFijo, setIdActivoFijo] = useState("");
  const [idInforme, setIdInforme] = useState("");
  const [espera, setEspera] = useState<boolean>(false);

  const { crearTransaccion } = useTransaccionModel()

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleStyle = () => {
    return sidebarCollapsed ? "220px" : "80px";
  };

  const {
    informeData: informe,
    clienteData: clientes,
    presupuestosData: presupuestos,
    transaccionActivoFijoData: transaccionActivoFijo,
    loading,
  } = useServices({
    loadClientes: true,
    loadInformes: true,
    loadPresupuestos: true,
    loadTransaccionActivoFijo: true,
    loadTransacciones: true,
  });

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

  const handleSubmit = async() => {
    setEspera(true);
    try{
      const transaccionData = {
        monto: monto,
        tipo_transaccion: tipoTransaccion,
        id_cliente: idCliente,
        id_presupuesto: idPresupuesto,
        id_activo_fijo: idActivoFijo,
        id_informe: idInforme,
      };
      const response = await crearTransaccion(transaccionData);
      console.log("HOLLAAAA",response);
    }catch(error){
      console.log(error);
    }finally{
      setEspera(false);
    }
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
          flexDirection: "row",
        }}
      >
        <div>
          <SeccionComponent name="Transacciones" link="/"/>
        </div>

        <div
          style={{ display: "flex", justifyContent: "center", width: "70%" }}
        >
          <Container>
            <Title>Registro Transaccion</Title>
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

            <SelectInputComponent
              label="Informe"
              value={idInforme}
              onChange={(event) => {
                setIdInforme(event.target.value);
                console.log("value: ", event.target.value);
                console.log("Tagert: ", event.target);
              }}
            >
              {informe?.map((item) => (
                <option
                  key={item.id_informe?.toString()}
                  value={item.id_informe.toString()}
                >
                  {item.id_informe?.toString()} {item.nombre_informe}
                </option>
              ))}
            </SelectInputComponent>
            <SelectInputComponent
              label="Cliente"
              onChange={(event) => {
                setIdCliente(event.target.value);
                console.log("value: ", event.target.value);
                console.log("Tagert: ", event.target);
              }}
              value={idCliente}
            >
              {clientes?.map((item) => (
                <option
                  key={item.id_cliente?.toString()}
                  value={item.id_cliente?.toString()}
                >
                  {item.id_cliente?.toString()} {item.nombre}
                </option>
              ))}
            </SelectInputComponent>

            <SelectInputComponent
              label="Presupuestos"
              onChange={(event) => setIdPresupuesto(event.target.value)}
              value={idPresupuesto}
            >
              {presupuestos?.map((item) => (
                <option
                  key={item.id_presupuesto?.toString()}
                  value={item.id_presupuesto?.toString()}
                >
                  {item.año_fiscal?.toString()}{" "}
                  {item.cantidad_asignada?.toString()}
                </option>
              ))}
            </SelectInputComponent>

            <SelectInputComponent
              label="Activo Fijo"
              onChange={(event) => setIdActivoFijo(event.target.value)}
            >
              {transaccionActivoFijo?.map((item) => (
                <option
                  key={item.id_activo_fijo?.toString()}
                  value={item.id_activo_fijo?.toString()}
                >
                  {item.id_activo_fijo?.toString()}{" "}
                  {item.fecha_adquirido?.toString()} {item.nombre?.toString()}
                </option>
              ))}
            </SelectInputComponent>
            <Button
              variant="contained"
              style={{ gridColumn: "1/-1", width: "50%", margin: "auto" }}
              onClick={handleSubmit}
            >
              Enviar
            </Button>
          </Container>
        </div>
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
