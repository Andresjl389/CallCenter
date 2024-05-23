import { ListItemText } from "@mui/material";
import { ItemComponent } from "../sidebar/components";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import UpgradeIcon from "@mui/icons-material/Upgrade";

type Props = {
  name: string;
  link: string;
  onDelete?: () => void;
  onUpdate?: () => void;
};

const SeccionComponent = ({ name, link, onDelete, onUpdate }: Props) => {
  return (
    <div style={styles.container}>
      <p style={{ fontWeight: 500, margin: 0 }}>Secciones</p>
      <ItemComponent to={link}>
        <AddIcon sx={{ fontSize: 20 }} />
        <ListItemText secondary={`Añadir ${name}`} />
      </ItemComponent>
      <ItemComponent to="" onClick={onUpdate}>
        <UpgradeIcon sx={{ fontSize: 20 }} />
        <ListItemText secondary={`Actualizar ${name}`} />
      </ItemComponent>
      <ItemComponent to='' onClick={onDelete}>
        <DeleteIcon sx={{ fontSize: 20 }}  />
        <ListItemText secondary={`Eliminar ${name}`} />
      </ItemComponent>
    </div>
  );
};

const styles = {
  container: {
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: 10,
    // width: '14%',
    padding: 10,
    marginRight: 15,
  },
};

export default SeccionComponent;
