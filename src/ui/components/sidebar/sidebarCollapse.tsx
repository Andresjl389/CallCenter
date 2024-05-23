import { Collapse } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PaymentIcon from "@mui/icons-material/Payment";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HailIcon from "@mui/icons-material/Hail";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import styled from "styled-components";
import { ItemComponent } from "./components";

type Props = {
  collapsed?: boolean;
};

const SideCollapseComponent = ({}: Props) => {
  return (
    <Collapse in={true} timeout={500}>
      <Container>
        <ItemComponent to="/">
          <Tooltip title="Home" placement="right" arrow>
            <HomeIcon sx={{ fontSize: 25 }} />
          </Tooltip>
        </ItemComponent>

        <ItemComponent to="/Transaccion">
          <Tooltip title="Transaccion" placement="right" arrow>
            <PointOfSaleIcon sx={{ fontSize: 25 }} />
          </Tooltip>
        </ItemComponent>

        <ItemComponent to="/Cliente">
          <Tooltip title="Cliente" placement="right" arrow>
            <PersonIcon sx={{ fontSize: 25 }} />
          </Tooltip>
        </ItemComponent>

        <ItemComponent to="/CuentasPorCobrar">
          <Tooltip title="Cuenta por Cobrar" placement="right" arrow>
            <AccountBalanceWalletIcon sx={{ fontSize: 25 }} />
          </Tooltip>
        </ItemComponent>

        <ItemComponent to="/CuentasPorPagar">
          <Tooltip title="Cuenta por Pagar" placement="right" arrow>
            <PaymentIcon sx={{ fontSize: 25 }} />
          </Tooltip>
        </ItemComponent>

        <ItemComponent to="/Informe">
          <Tooltip title="Informe" placement="right" arrow>
            <TextSnippetIcon sx={{ fontSize: 25 }} />
          </Tooltip>
        </ItemComponent>

        <ItemComponent to="/Presupuestos">
          <Tooltip title="Presupuesto" placement="right" arrow>
            <AttachMoneyIcon sx={{ fontSize: 25 }} />
          </Tooltip>
        </ItemComponent>

        <ItemComponent to="/Proveedor">
          <Tooltip title="Proveedor" placement="right" arrow>
            <HailIcon sx={{ fontSize: 25 }} />
          </Tooltip>
        </ItemComponent>

        <ItemComponent to="/TransaccionActivoFijo">
          <Tooltip title="Transaccion Activo Fijo" placement="right" arrow>
            <ReceiptLongIcon sx={{ fontSize: 25 }} />
          </Tooltip>
        </ItemComponent>
      </Container>
    </Collapse>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-left: 10px;
  background: #ecfffe;
  width: 50px;
  border-radius: 10px;
  transition: width 0.5s ease;
  position: absolute;
`;

export default SideCollapseComponent;
