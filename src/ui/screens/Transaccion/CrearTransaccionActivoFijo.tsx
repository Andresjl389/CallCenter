import { useState } from "react";
import { FormInputComponent, HeaderComponent } from "../../components";
import { CardComponent } from "../../components/Cards";
import { Accordion, Button } from "@mui/material";
import { useTransaccionActivoFijoModel } from "../../../domain/models";
import { useServices } from "../../../hooks";

const CrearTransaccionActivoFijo = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };
  const handleStyle = () => {
    return sidebarCollapsed ? "220px" : "80px";
  };

  const [espera, setEspera] = useState<boolean>(false);
  const [nombre, setNombre] = useState("");
  const [valorOriginal, setValorOriginal] = useState("");
  const [vidaUtil, setVidaUtil] = useState("");
  const [metodoDepreciacion, setMetodoDepreciacion] = useState("");
  const [radioValue, setRadioValue] = useState(false);

  const {crearTransaccionActivoFijo} = useTransaccionActivoFijoModel()
  const {loading} = useServices({})

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

  const handleSubmit = async () => {
    setEspera(true);
    try {
      const activoFijo = {
        nombre: nombre,
        valor_original: valorOriginal,
        vida_util: vidaUtil,
        metodo_depreciacion: metodoDepreciacion,
        estado_actual: radioValue,
      }
      await crearTransaccionActivoFijo(activoFijo);
    } catch (error) {
      console.log(error);
    } finally {
      setEspera(false);
      alert("Transacción creada exitosamente");
      window.location.reload();
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
          flexDirection: "column",
        }}
      >
        <CardComponent title="Registro Transacción Activo Fijo">
          <FormInputComponent
            label="Nombre"
            name="nombre"
            value={nombre}
            onChange={(event) => {
              setNombre(event.target.value);
            }}
          />
          <FormInputComponent
            label="Valor original"
            name="valor_original"
            type="number"
            value={valorOriginal}
            onChange={(event) => {
              setValorOriginal(event.target.value);
            }}
          />
          <FormInputComponent
            label="Vida util"
            name="vida_util"
            type="number"
            value={vidaUtil}
            onChange={(event) => {
              setVidaUtil(event.target.value);
            }}
          />
          <FormInputComponent
            label="Metodo depreciación"
            name="metodo_depreciacion"
            type="number"
            value={metodoDepreciacion}
            onChange={(event) => {
              setMetodoDepreciacion(event.target.value);
            }}
          />
          <FormInputComponent
            label="Estado actual "
            name="estado_actual"
            type="radio"
            options={[
              { label: "Activo", value: "true" },
              { label: "Inactivo", value: "false" },
            ]}
            value={radioValue.toString()}
            onChange={(event) =>
              setRadioValue(event.target.value ? true : false)
            }
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

export default CrearTransaccionActivoFijo;
