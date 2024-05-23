import { useState } from "react";
import { useServices } from "../../../hooks";
import { CardInfoComponent, HeaderComponent, SeccionComponent } from "../../components";
import { useCuentasPorPagarModel } from "../../../domain/models";


const CuentasPorPagarScreen = () => {
    
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [borrar, setBorrar] = useState(false);
  const [actualizar, setActualizar] = useState(false);
  const [disable, setDisable] = useState(false);
  const [idCuentas, setIdCuentas] = useState<bigint>();

  const { eliminarCuentasPorPagar } = useCuentasPorPagarModel();

  const {
    loading,
    cuentasPagarData: cuenta,
    transaccionData: transaccion,
  } = useServices({
    loadCuentasPorPagar: true,
    loadTransacciones: true,
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
      await eliminarCuentasPorPagar(id);
      alert("Cuenta eliminado exitosamente");
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
            name="Cuentas por pagar"
            link="/CuentasPorPagar/añadir"
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
          {cuenta?.map((item) => {
            const transaccionEncontrada = transaccion?.find(
              (transaction) =>
                transaction.id_transaccion === item.id_transaccion
            );
            return (
              <CardInfoComponent
                borrar={borrar}
                actualizar={actualizar}
                onDelete={() => {
                  deleteCliente(item.id_cuenta_pp);
                }}
                onUpdate={() => console.log("actializar: ", item.id_cuenta_pp)}
              >
                <div style={{ display: "flex" }}>
                  <p style={styles.p}>{item.id_cuenta_pp?.toString()}</p>
                  <p style={styles.p}>{item.monto_pendiente?.toString()}</p>
                </div>
                <p style={styles.p}>
                  <span style={styles.span}>Fecha vencimiento:</span>{" "}
                  {item.fecha_vencimiento?.toString()}
                </p>
                <p style={styles.p}>
                  <span style={styles.span}>Monto pendiente: </span>
                  {item.monto_pendiente?.toString()}
                </p>
                <p style={styles.p}>
                  <span style={styles.span}>Proveedor debe: </span>
                  {item.proveedor_debe}
                </p>
                <p style={styles.p}>
                  <span style={styles.span}>Estado: </span>
                  {item.estado ? 'Activo' : 'Inactivo'}
                </p>
                <p style={styles.p}>
                  <span style={styles.span}>Proveedor debe: </span>
                  {item.numero_factura.toString()}
                </p>
                <p style={styles.p}>
                  <span style={styles.span}>Transacción: </span>
                  {transaccionEncontrada?.tipo_transaccion}
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
  
export default CuentasPorPagarScreen;