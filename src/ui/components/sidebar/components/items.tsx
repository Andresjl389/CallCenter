import { ListItem, ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";


type Props = {
  children?: any;
  to: string;
  onClick?: () => void;
};
const ItemComponent = ({
  children,
  to,
  onClick
}: Props) => {
  return (
    <ListItemButton component={Link} to={to} style={{ borderRadius: 50 }} onClick={onClick}>
      <ListItem component="li" sx={{ padding: 0, margin: 0 }}>
        {children}
      </ListItem>
    </ListItemButton>
  );
};

export default ItemComponent;
