import React, { useState } from "react";
import styled from "styled-components";
import { HeaderComponent, FormInputComponent } from "../../components";
import { useInformeModel } from "../../../domain/models/Informe";
import { Button } from "@mui/material";
import { useClienteModel } from "../../../domain/models";


const CrearCliente = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [idCliente, setIdCliente] = useState("");
  const [nombreCliente, setNombreCliente] = useState("");
  const [direccionCliente, setDireccionCliente] = useState("");
  const [emailCliente, setEmailCliente] = useState("");
  const [emailError, setEmailError] = useState("");
  const [disable, setDisable] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleStyle = () => {
    return sidebarCollapsed ? "220px" : "80px";
  };

  const { crearClientes } = useClienteModel();

  const validateEmail = (emailCliente: string) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(emailCliente);
  };

  const createCliente = async () => {
    setDisable(true)
    try{
    if (!validateEmail(emailCliente)) {
      setEmailError("Ingrese un email valido");
      return;
    }
    setEmailError("");
    const data = {
      nombre: nombreCliente,
      direccion: direccionCliente,
      correo: emailCliente,
    };
    console.log(data);
      await crearClientes(data);
      alert("Cliente creado exitosamente"); 
      window.location.reload();
    }catch (error) {
      console.log(error);
    }finally{
      setDisable(false);
    }
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
          <Title>Registro Cliente</Title>
          <FormInputComponent
            label="Nombre Cliente"
            name="nombre"
            onChange={(event) => setNombreCliente(event.target.value)}
            value={nombreCliente}
          />
          <FormInputComponent
            label="Direccion"
            name="direccion"
            onChange={(event) => setDireccionCliente(event.target.value)}
            value={direccionCliente}
          />
          <FormInputComponent
            label="Email"
            name="correo"
            onChange={(event) => setEmailCliente(event.target.value)}
            value={emailCliente}
          />
          {emailError && <ErrorText>{emailError}</ErrorText>}
          <Button
            variant="contained"
            disabled={disable}
            style={{ gridColumn: "1/-1", width: "50%", margin: "auto" }}
            onClick={createCliente}
          >
            Enviar
          </Button>
        </Container>
      </div>
    </>
  );
};


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

const ErrorText = styled.div`
color: red;
font-size: 12px;
margin-top: 5px;
`;

export default CrearCliente;
