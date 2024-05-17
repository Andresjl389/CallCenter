import { Collapse } from "@mui/material";
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
          <HomeIcon sx={{ fontSize: 25 }} />
        </ItemComponent>
        <ItemComponent to="/Transaccion">
          <PointOfSaleIcon sx={{ fontSize: 25 }} />
        </ItemComponent>
        <ItemComponent to="/">
          <PersonIcon sx={{ fontSize: 25 }} />
        </ItemComponent>
        <ItemComponent to="">
          <AccountBalanceWalletIcon sx={{ fontSize: 25 }} />
        </ItemComponent>
        <ItemComponent to="">
          <PaymentIcon sx={{ fontSize: 25 }} />
        </ItemComponent>
        <ItemComponent to="/Informe">
          <TextSnippetIcon sx={{ fontSize: 25 }} />
        </ItemComponent>
        <ItemComponent to="">
          <AttachMoneyIcon sx={{ fontSize: 25 }} />
        </ItemComponent>
        <ItemComponent to="">
          <HailIcon sx={{ fontSize: 25 }} />
        </ItemComponent>
        <ItemComponent to="/TransaccionActivoFijo">
          <ReceiptLongIcon sx={{ fontSize: 25 }} />
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
