import { useState } from "react";
import {
  FormInputComponent,
  HeaderComponent,
} from "../../components";
import { CardComponent } from "../../components/Cards";
import { Button } from "@mui/material";
import { useInformeModel } from "../../../domain/models";

const AñadirInformeScreen = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [espera, setEspera] = useState<boolean>(false);
  const [nombre, setNombre] = useState("");
  const [tipoInforme, setTipoInforme] = useState("");
  const [detalleInforme, setDetalleInforme] = useState("");
  const [responsable, setResponsable] = useState("");
  const [transaccionFinanciera, setTransaccionFinanciera] = useState("");

  const {crearInforme} = useInformeModel()

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };
  const handleStyle = () => {
    return sidebarCollapsed ? "220px" : "80px";
  };

  const handleSubmit = async() => {
    setEspera(true);
    const dataInforme = {
      nombre_informe: nombre,
      tipo_informe: tipoInforme,
      detalle_informe: detalleInforme,
      nombre_responsable: responsable,
      id_transaccion_financiera: transaccionFinanciera,
    }
    await crearInforme(dataInforme);
    setEspera(false);
    alert("Informe creado exitosamente");
    window.location.reload();
  }

  return (
    <>
      <HeaderComponent
        sidebarCollapsed={sidebarCollapsed}
        toggleSidebar={toggleSidebar}
      />
      <div
        style={{
          display: "flex",
          marginLeft: handleStyle(),
          flexDirection: "column",
        }}
      >
        <CardComponent title="Añadir informe">
          <FormInputComponent
            label="Nombre"
            name="nombre_informe"
            type="text"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
          <FormInputComponent
            label="Tipo informe"
            name="tipo_informe"
            type="text"
            value={tipoInforme}
            onChange={(event) => setTipoInforme(event.target.value)}
          />
          <FormInputComponent
            label="Detalle informe"
            name="detalle_informe"
            type="text"
            value={detalleInforme}
            onChange={(event) => setDetalleInforme(event.target.value)}
          />
          <FormInputComponent
            label="Nombre responsable"
            name="nombre_responsable"
            type="text"
            value={responsable}
            onChange={(event) => setResponsable(event.target.value)}
          />
          <FormInputComponent
            label="Transacción financiera"
            name="id_transaccion_financiera"
            type="number"
            value={transaccionFinanciera}
            onChange={(event) => setTransaccionFinanciera(event.target.value)}
          />
          <Button
            variant="contained"
            style={{ gridColumn: "1/-1", width: "50%", margin: "auto" }}
            onClick={handleSubmit}
            disabled={espera}
          >
            Enviar
          </Button>
        </CardComponent>
      </div>
    </>
  );
};

export default AñadirInformeScreen;
