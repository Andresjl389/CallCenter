import React, { useState } from "react";
import {
  HeaderComponent,
  FormInputComponent,
  CardComponent,
} from "../../components";
import { Button } from "@mui/material";
import { usePresupuestosModel } from "../../../domain/models";
import { useServices } from "../../../hooks";

const CrearPresupuestos = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [espera, setEspera] = useState<boolean>(false);
  const [asignada, setAsignada] = useState("");
  const [gastada, setGastada] = useState("");

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleStyle = () => {
    return sidebarCollapsed ? "220px" : "80px";
  };

  const { crearPresupuesto } = usePresupuestosModel();
  const {
    loading,
  } = useServices({});

  const handleSubmit = async () => {
    setEspera(true);
      const presupuesto = {
        cantidad_asignada: asignada,
        cantidad_gastada: gastada,
      };
      await crearPresupuesto(presupuesto);
      alert("Cuenta por cobrar creada exitosamente");
      window.location.reload();
      setEspera(false);
  }

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
            label="Cantidad asignada"
            name="cantidad_asignada"
            type="number"
            onChange={(event) => setAsignada(event.target.value)}
            value={asignada}
          />
          <FormInputComponent
            label="Cantidad gastada"
            name="cantidad_gastada"
            type="number"
            onChange={(event) => setGastada(event.target.value)}
            value={gastada}
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

export default CrearPresupuestos;
