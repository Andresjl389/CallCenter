import { ListItem, ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";

const ItemComponent = ({
  children,
  to,
}: {
  children: React.ReactNode;
  to: string;
}) => {
  return (
    <ListItemButton component={Link} to={to} style={{ borderRadius: 50 }}>
      <ListItem component="li" sx={{ padding: 0, margin: 0 }}>
        {children}
      </ListItem>
    </ListItemButton>
  );
};

export default ItemComponent;
