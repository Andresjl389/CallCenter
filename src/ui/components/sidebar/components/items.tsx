import { ListItem, ListItemButton } from "@mui/material";



const ItemComponent = ({children}:any) => {
    return(
        <ListItemButton style={{ borderRadius: 50 }}>
        <ListItem component="li" sx={{ padding: 0, margin: 0 }}>
          {children}
        </ListItem>
      </ListItemButton>
    )
}

export default ItemComponent;