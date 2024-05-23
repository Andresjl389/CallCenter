import { useEffect, useState } from "react";
import { HeaderComponent, SeccionComponent } from "../../components";
import { ItemComponent } from "../../components/sidebar/components";
import { Button, ListItemText } from "@mui/material";
import { InformeType } from "../../../domain/interfaces";
import { useInformeModel } from "../../../domain/models/Informe";
import { CardInfoComponent } from "../../components/Cards/CardInfo";
import { useServices } from "../../../hooks";
import { Tune } from "@mui/icons-material";

const InformeScreen = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [borrar, setBorrar] = useState(false);
  const [actualizar, setActualizar] = useState(false);

  const { loading, informeData: informe } = useServices({ loadInformes: true });
  const { elimnarInforme } = useInformeModel();

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };
  const handleStyle = () => {
    return sidebarCollapsed ? "220px" : "80px";
  };

  const deleteInforme = async (id: bigint) => {
    await elimnarInforme(id);
    alert("Informe eliminado exitosamente");
      window.location.reload();
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
        sidebarCollapsed={sidebarCollapsed}
        toggleSidebar={toggleSidebar}
      />
      <div
        style={{
          display: "flex",
          marginLeft: handleStyle(),
          flexDirection: "row",
        }}
      >
        <div>
          <SeccionComponent
            name="informe"
            link="/Informe/añadir"
            onDelete={() => setBorrar(true)}
            onUpdate={() => setActualizar(true)}
          />
        </div>
        <div
          style={{
            background: "",
            width: "80%",
            marginLeft: 20,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {informe?.map((item) => (
            <>
              <CardInfoComponent
                actualizar={actualizar}
                borrar={borrar}
                onDelete={() => deleteInforme(item.id_informe)}
                onUpdate={() => console.log(item.id_informe)}
              >
                <div style={{ display: "flex" }}>
                  <p style={styles.p}>{item.id_informe?.toString()}</p>
                  <p style={styles.p}>{item.nombre_informe?.toString()}</p>
                </div>
                <p style={styles.p}>
                  <span style={styles.span}>Fecha:</span>{" "}
                  {item.fecha?.toString()}
                </p>
                <p style={styles.p}>
                  <span style={styles.span}>Tipo informe: </span>
                  {item.tipo_informe?.toString()}
                </p>
                <p style={styles.p}>
                  <span style={styles.span}>Detalle informe: </span>
                  {item.detalle_informe?.toString()}
                </p>
                <p style={styles.p}>
                  <span style={styles.span}>Responsable: </span>
                  {item.nombre_responsable?.toString()}
                </p>
                <p style={styles.p}>
                  <span style={styles.span}># transaccion financiera: </span>
                  {item.id_transaccion_financiera?.toString()}
                </p>
              </CardInfoComponent>
            </>
          ))}
        </div>
        {/* <Button variant="contained" onClick={handleInformes}>
            Actualizar
          </Button> */}
      </div>
    </>
  );
};

const styles = {
  p: {
    margin: "2px 5px 2px 5px",
  },
  span: {
    fontWeight: 700,
  },
};

export default InformeScreen;
