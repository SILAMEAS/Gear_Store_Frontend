import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {Badge, ButtonProps, IconButton, Stack, Typography} from "@mui/material";
import DrawerCustom from "../Drawer/DrawerCustom.tsx";

const HeaderCart = (props: ButtonProps) => {
  const defaultStyle = {
    color: "primary.main",
    p: 0,
  };

  return (
      <DrawerCustom
          renderButton={<IconButton {...props} sx={defaultStyle}>
              <Badge badgeContent={4} color="primary">
                  <ShoppingCartOutlinedIcon sx={{color:'white'}}/>
              </Badge>
          </IconButton>}
          anchor={'right'}
          bgcolor={'black'}
      >
          <Stack>
            <Typography color={'white'}>sdf</Typography>
          </Stack>
      </DrawerCustom>
  );
};

export default HeaderCart;
