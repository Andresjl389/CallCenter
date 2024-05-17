import styled from "styled-components";

type Props = {
  children?: any;
  title?: string;
};

const CardComponent = ({ children, title }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

const Container = styled.div`
  grid-template-rows: auto 1fr;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 700px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  align-self: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Title = styled.div`
  grid-row: 1; /* Coloca el título en la primera fila */
  grid-column: 1 / -1; /* Ocupa todas las columnas disponibles */
  text-align: center; /* Centra el texto horizontalmente */
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px; /* Agrega espacio debajo del título */
`;

export default CardComponent;
