import { useState } from "react";
import { useServices } from "../../../hooks";
import { CardInfoComponent, HeaderComponent, SeccionComponent } from "../../components";
import { useProveedorModel } from "../../../domain/models";


const ProveedorScreen = () => {
    
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [borrar, setBorrar] = useState(false);
  const [actualizar, setActualizar] = useState(false);
  const [disable, setDisable] = useState(false);
  const [idCuentas, setIdCuentas] = useState<bigint>();

  const { eliminarProveedor } = useProveedorModel();

  const {
    loading,
    proveedorData: proveedor,
    cuentasPagarData: cuenta
  } = useServices({
    loadCuentasPorPagar: true,
    loadProveedores: true,
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
      await eliminarProveedor(id);
      alert("Proveedor eliminado exitosamente");
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert(error)
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
            name="Proveedor"
            link="/Proveedor/añadir"
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
          {proveedor?.map((item) => {
            const cuentaEncontrada = cuenta?.find(
              (cuentas) =>
                cuentas.id_cuenta_pp === item.id_cuenta_pp
            );
            return (
              <CardInfoComponent
                borrar={borrar}
                actualizar={actualizar}
                onDelete={() => {
                  deleteCliente(item.id_proveedor);
                }}
                onUpdate={() => console.log("actializar: ", item.id_proveedor)}
              >
                <div style={{ display: "flex" }}>
                  <p style={styles.p}>{item.id_proveedor?.toString()}</p>
                  <p style={styles.p}>{item.nombre?.toString()}</p>
                </div>
                <p style={styles.p}>
                  <span style={styles.span}>Condiciones de pago:</span>{" "}
                  {item.condiciones_pago?.toString()}
                </p>
                <p style={styles.p}>
                  <span style={styles.span}>Dirección: </span>
                  {item.direccion?.toString()}
                </p>
                <p style={styles.p}>
                  <span style={styles.span}>Telefono: </span>
                  {item.telefono?.toString()}
                </p>
                <p style={styles.p}>
                  <span style={styles.span}>Tipo proveedor: </span>
                  {item.tipo_proveedor?.toString()}
                </p>
                <p style={styles.p}>
                  <span style={styles.span}>Monto pendiente: </span>
                  {cuentaEncontrada?.monto_pendiente?.toString()}
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
  
export default ProveedorScreen;