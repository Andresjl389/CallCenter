import { useEffect, useState } from "react";
import { HeaderComponent, SeccionComponent } from "../../components";
import { CardInfoComponent } from "../../components/Cards/CardInfo";
import { useClienteModel } from "../../../domain/models";
import { ClienteType } from "../../../domain/interfaces";

const Clientes = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [cliente, setCliente] = useState<ClienteType[]>();
  const [borrar, setBorrar] = useState(false);
  const [actualizar, setActualizar] = useState(false);
  const [idCliente, setIdCliente] = useState<bigint>();
  const [disable, setDisable] = useState(false);
  const { obtenerClientes, elimnarCliente } = useClienteModel();
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };
  const handleStyle = () => {
    return sidebarCollapsed ? "220px" : "80px";
  };

  const handleClientes = async () => {
    const data = await obtenerClientes();
    console.log(data);
    setCliente(data);
  };
  useEffect(() => {
    handleClientes();
  }, []);

  const deleteCliente = async (id: bigint) => {
    setDisable(true);
    try{
      console.log("HOLA: ",id)
      setIdCliente(id);
      await elimnarCliente(id);
      alert("Cliente eliminado exitosamente"); 
      window.location.reload(); 
    }catch (error) {
      console.log(error);
    }finally{
      setDisable(false)
    }
  };

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
            name="Clientes"
            link="/cliente/añadir"
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
          {cliente?.map((item) => (
            <>
              <CardInfoComponent
                borrar={borrar}
                actualizar={actualizar}
                onDelete={() => {
                  deleteCliente(item.id_cliente)
                  handleClientes()
                }}
                onUpdate={() => console.log('actializar: ',item.id_cliente)}
              >
                <div style={{ display: "flex" }}>
                  <p style={styles.p}>{item.id_cliente?.toString()}</p>
                  <p style={styles.p}>{item.nombre?.toString()}</p>
                </div>
                <p style={styles.p}>
                  <span style={styles.span}>Dirección:</span>{" "}
                  {item.direccion?.toString()}
                </p>
                <p style={styles.p}>
                  <span style={styles.span}>Correo: </span>
                  {item.correo?.toString()}
                </p>
              </CardInfoComponent>
            </>
          ))}
        </div>
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

export default Clientes;
