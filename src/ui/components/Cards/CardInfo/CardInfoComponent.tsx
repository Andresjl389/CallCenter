import { Margin } from "@mui/icons-material";
import styled from "styled-components";

type Props = {
  children?: any;
};

const CardInfoComponent = ({ children }: Props) => {
  return <Container>
    {children}
  </Container>;
};

const Container = styled.div`
  margin: 20px;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-width: 150px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 5px;
  max-width: 270px;
`;

export default CardInfoComponent;
