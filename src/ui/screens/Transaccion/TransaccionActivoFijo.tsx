import { useState } from "react";
import { useServices } from "../../../hooks";
import { CardInfoComponent, HeaderComponent, SeccionComponent } from "../../components";
import { useTransaccionActivoFijoModel } from "../../../domain/models";


const TransaccionActivoFijoScreen = () => {
    
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [borrar, setBorrar] = useState(false);
  const [actualizar, setActualizar] = useState(false);
  const [disable, setDisable] = useState(false);
  const [idCuentas, setIdCuentas] = useState<bigint>();

  const { eliminarTransaccionActivoFijo } = useTransaccionActivoFijoModel();

  const {
    loading,
    transaccionActivoFijoData: activoFijo,
  } = useServices({
    loadTransaccionActivoFijo: true,
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
      await eliminarTransaccionActivoFijo(id);
      alert("Activo fijo eliminado exitosamente");
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
            name="Transacción activo fijo"
            link="/TransaccionActivoFijo/añadir"
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
          {activoFijo?.map((item) => {
            return (
              <CardInfoComponent
                borrar={borrar}
                actualizar={actualizar}
                onDelete={() => {
                  deleteCliente(item.id_activo_fijo);
                }}
                onUpdate={() => console.log("actializar: ", item.id_activo_fijo)}
              >
                <div style={{ display: "flex" }}>
                  <p style={styles.p}>{item.id_activo_fijo?.toString()}</p>
                  <p style={styles.p}>{item.nombre}</p>
                </div>
                <p style={styles.p}>
                  <span style={styles.span}>Fecha adquirido:</span>{" "}
                  {item.fecha_adquirido?.toString()}
                </p>
                <p style={styles.p}>
                  <span style={styles.span}>Metodo depreciación: </span>
                  {item.metodo_depreciacion}
                </p>
                <p style={styles.p}>
                  <span style={styles.span}>Valor original: </span>
                  {item.valor_original?.toString()}
                </p>
                <p style={styles.p}>
                  <span style={styles.span}>Estado: </span>
                  {item.estado_actual ? 'Activo' : 'Inactivo'}
                </p>
                <p style={styles.p}>
                  <span style={styles.span}>Vida util: </span>
                  {item.vida_util?.toString()}
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
  
export default TransaccionActivoFijoScreen;