import { useState } from "react";
import { FormInputComponent, HeaderComponent } from "../../components";
import { CardComponent } from "../../components/Cards";
import { Accordion, Button } from "@mui/material";

const TransaccionActivoFijoScreen = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };
  const handleStyle = () => {
    return sidebarCollapsed ? "220px" : "80px";
  };
  const [radioValue, setRadioValue] = useState("");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(event.target.value);
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
        <CardComponent title="Registro Transacción Activo Fijo">
          <FormInputComponent
            label="ID activo fijo"
            name="id_transaccion"
            type="number"
          />
          <FormInputComponent label="Nombre" name="nombre" />
          <FormInputComponent
            label="Valor original"
            name="valor_original"
            type="number"
          />
          <FormInputComponent
            label="Fecha adquirido"
            name="fecha_adquirido"
            type="date"
          />
          <FormInputComponent
            label="Vida util"
            name="vida_util"
            type="number"
          />
          <FormInputComponent
            label="Id transaccion"
            name="id_transaccion"
            type="number"
          />
          <FormInputComponent
            label="Estado actual "
            name="estado_actual"
            type="radio"
            options={[
              { label: "Activo", value: "true" },
              { label: "Inactivo", value: "false" },
            ]}
            value={radioValue}
            onChange={handleRadioChange}
          />
          <Button
            variant="contained"
            style={{ gridColumn: "1/-1", width: "50%", margin: "auto" }}
            // onClick={createinforme}
          >
            Enviar
          </Button>
        </CardComponent>
      </div>
    </>
  );
};

export default TransaccionActivoFijoScreen;
