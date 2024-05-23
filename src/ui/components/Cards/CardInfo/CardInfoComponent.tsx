import { Margin } from "@mui/icons-material";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@mui/material";

type Props = {
  children?: any;
  borrar?: boolean;
  actualizar?: boolean;
  onDelete?: () => void;
  onUpdate?: () => void;
};

const CardInfoComponent = ({ children, borrar, onDelete, actualizar, onUpdate }: Props) => {
  return (
    <>
    <Container>
      <ContainerInfo>{children}</ContainerInfo>
      {borrar ? (
        <ContainerDelete>
          <StyledIconButton onClick={onDelete}>
            <DeleteIcon />
          </StyledIconButton>
        </ContainerDelete>
      ) : null}
      {actualizar ? (
        <ContainerDelete>
          <StyledIconButton onClick={onUpdate}>
            <EditIcon />
          </StyledIconButton>
        </ContainerDelete>
      ) : null}
      </Container>

    </>
  );
};

const ContainerInfo = styled.div`
  margin: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-width: 150px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 5px;
  max-width: 270px;
  border-radius: 10px;
  &:hover {
    background-color: #ecfffe; /* Cambia el color de fondo al pasar el mouse */
    color: #333; /* Cambia el color del texto al pasar el mouse */
    cursor: pointer; /* Cambia el cursor al pasar el mouse */
  }
  
`;

const ContainerDelete = styled.div`
  height: 30px;
  padding: 0;
  position: absolute;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    color: #ff0000; /* Cambia el color del icono al pasar el mouse */
  }
`;

const Container = styled.div`
  display: flex;
  position: relative; /* Añadido para que ContainerDelete se posicione correctamente */
`;

const StyledIconButton = styled(IconButton)`
  padding: 0;
  

  &:hover {
    color: #ff0000; /* Cambia el color del botón al pasar el mouse */
  }
`
export default CardInfoComponent;
