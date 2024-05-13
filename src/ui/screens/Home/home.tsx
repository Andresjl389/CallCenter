import { Button, IconButton } from "@mui/material";
import { useState } from "react";
import { HeaderComponent, SideBarComponent } from "../../components";
import MenuIcon from "@mui/icons-material/Menu";
import { useGetTransaccionModel } from "../../../domain/models";
import { TransaccionesType } from "../../../domain/interfaces";

const HomeScreen = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [transacciones, setTransacciones] = useState<TransaccionesType[]>();

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };
  const handleStyle = () => {
    return sidebarCollapsed ? "220px" : "80px";
  };

  const { obtenerTransacciones } = useGetTransaccionModel();

  const handleTransacciones = async () => {
    const data = await obtenerTransacciones();
    console.log(data);
    setTransacciones(data);
  };

  return (
    <>
      <HeaderComponent
        toggleSidebar={toggleSidebar}
        sidebarCollapsed={sidebarCollapsed}
      />
      <div style={{ display: "flex", marginLeft: handleStyle() }}>
        {transacciones?.map((item) => (
          <>
            <div style={{ display: "flex", flexDirection: "row"}}>
              <p>fecha: {item.fecha} </p>
              <p>monto: {item.monto} </p>
              <p>cliente: {item.id_cliente} </p>
              <p>cliente: {item.tipo_transaccion} </p>
            </div>
          </>
        ))}
        <Button variant="outlined" onClick={handleTransacciones}>
          INFO
        </Button>
      </div>
    </>
  );
};

export default HomeScreen;
