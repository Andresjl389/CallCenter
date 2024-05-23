import { useState } from "react";
import { useServices } from "../../../hooks";
import { CardInfoComponent, HeaderComponent, SeccionComponent } from "../../components";
import { useCuentasPorPagarModel, usePresupuestosModel } from "../../../domain/models";


const PresupuestosScreen = () => {
    
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [borrar, setBorrar] = useState(false);
  const [actualizar, setActualizar] = useState(false);
  const [disable, setDisable] = useState(false);
  const [idCuentas, setIdCuentas] = useState<bigint>();

  const { eliminarPresupuesto } = usePresupuestosModel();

  const {
    loading,
    presupuestosData: presupuesto,
  } = useServices({
    loadPresupuestos: true,
  });

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleStyle = () => {
    return sidebarCollapsed ? "220px" : "80px";
  };

  const deleteCliente = async (id: bigint) => {
    setDisable(true);
    try {
      console.log("HOLA: ", id);
      setIdCuentas(id);
      await eliminarPresupuesto(id);
      alert("Presupuesto eliminado exitosamente");
      window.location.reload();
    } catch (error) {
      console.log(error);
    } finally {
      setDisable(false);
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
            name="Presupuestos"
            link="/Presupuestos/añadir"
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
          {presupuesto?.map((item) => {
            return (
              <CardInfoComponent
                borrar={borrar}
                actualizar={actualizar}
                onDelete={() => {
                  deleteCliente(item.id_presupuesto);
                }}
                onUpdate={() => console.log("actializar: ", item.id_presupuesto)}
              >
                <div style={{ display: "flex" }}>
                  <p style={styles.p}>{item.id_presupuesto?.toString()}</p>
                  <p style={styles.p}>{item.año_fiscal?.toString()}</p>
                </div>
                <p style={styles.p}>
                  <span style={styles.span}>Cantidad asignada:</span>{" "}
                  {item.cantidad_asignada?.toString()}
                </p>
                <p style={styles.p}>
                  <span style={styles.span}>Cantidad gastada: </span>
                  {item.cantidad_gastada?.toString()}
                </p>
              </CardInfoComponent>
            );
          })}
        </div>
      </div>
    </>
  );
}

const styles = {
    p: {
      margin: "2px 5px 2px 5px",
    },
    span: {
      fontWeight: 700,
    },
  };
  
export default PresupuestosScreen;