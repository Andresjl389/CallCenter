import { Button, IconButton, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import {
  HeaderComponent,
  SideBarComponent,
  TableComponent,
} from "../../components";
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
      <div
        style={{
          display: "flex",
          marginLeft: handleStyle(),
          flexDirection: "column",
        }}
      >
        <TableComponent>
          {transacciones?.map((item) => (
            <>
              <TableRow>
                <TableCell component="th" scope="row">
                  {item.id_transaccion}
                </TableCell>
                <TableCell>{item.fecha}</TableCell>
                <TableCell>{item.monto}</TableCell>
                <TableCell>{item.tipo_transaccion}</TableCell>
                <TableCell>{item.id_cliente}</TableCell>
              </TableRow>
            </>
          ))}
        </TableComponent>
        <Button variant="outlined" onClick={handleTransacciones}>
          INFO
        </Button>
      </div>
    </>
  );
};

export default HomeScreen;
