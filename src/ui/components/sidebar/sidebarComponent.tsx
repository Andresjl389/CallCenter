import { ListItemText } from "@mui/material";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PaymentIcon from "@mui/icons-material/Payment";
import { Link } from "react-router-dom";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HomeIcon from "@mui/icons-material/Home";
import HailIcon from "@mui/icons-material/Hail";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import styled from "styled-components";
import { ItemComponent } from "./components";

type Props = {
  collapsed?: boolean;
};

const SideBarComponent = ({ collapsed }: Props) => {
  return (
    <Container>
      <ItemComponent to="/">
        <HomeIcon sx={{ fontSize: 25 }} />
        <ListItemText primary="Home" />
      </ItemComponent>
      <ItemComponent to="/Transaccion">
        <PointOfSaleIcon sx={{ fontSize: 25 }} />
        <ListItemText primary="Transacciones" />
      </ItemComponent>
      <ItemComponent to="/Cliente">
        <PersonIcon sx={{ fontSize: 25 }} />
        <ListItemText primary="Cliente" />
      </ItemComponent>
      <ItemComponent to="/CuentasPorCobrar">
        <AccountBalanceWalletIcon sx={{ fontSize: 25 }} />
        <ListItemText primary="Cuenta por cobrar" />
      </ItemComponent>
      <ItemComponent to="/CuentasPorPagar">
        <PaymentIcon sx={{ fontSize: 25 }} />
        <ListItemText primary="Cuenta por pagar" />
      </ItemComponent>
      <ItemComponent to="/Informe">
        <TextSnippetIcon sx={{ fontSize: 25 }} />
        <ListItemText primary="Informe" />
      </ItemComponent>
      <ItemComponent to="/Presupuestos">
        <AttachMoneyIcon sx={{ fontSize: 25 }} />
        <ListItemText primary="Presupuesto" />
      </ItemComponent>
      <ItemComponent to="/Proveedor">
        <HailIcon sx={{ fontSize: 25 }} />
        <ListItemText primary="Proveedor" />
      </ItemComponent>
      <ItemComponent to="/TransaccionActivoFijo">
        <ReceiptLongIcon sx={{ fontSize: 25 }} />
        <ListItemText primary="Transaccion activo fijo" />
      </ItemComponent>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-left: 10px;
  background: #ecfffe;
  width: 200px;
  border-radius: 10px;
  position: absolute;
`;

export default SideBarComponent;
