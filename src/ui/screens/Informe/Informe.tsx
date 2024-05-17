import { useEffect, useState } from "react";
import { HeaderComponent, SeccionComponent } from "../../components";
import { ItemComponent } from "../../components/sidebar/components";
import { Button, ListItemText } from "@mui/material";
import { InformeType } from "../../../domain/interfaces";
import { useInformeModel } from "../../../domain/models/Informe";
import { CardInfoComponent } from "../../components/Cards/CardInfo";

const InformeScreen = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [informe, setInforme] = useState<InformeType[]>();
  const { obtenerInformes } = useInformeModel();
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };
  const handleStyle = () => {
    return sidebarCollapsed ? "220px" : "80px";
  };

  const handleInformes = async () => {
    const data = await obtenerInformes();
    console.log(data);
    setInforme(data);
  };

  useEffect(() => {
    handleInformes();
  }, []);
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
          <SeccionComponent name="informe" />
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
              <CardInfoComponent>
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
