import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {Badge, Box, ButtonProps, IconButton, Stack, Typography} from "@mui/material";
import DrawerCustom from "../Drawer/DrawerCustom.tsx";
import {useGetAllCartsQuery} from "../../redux/services/cartApi.ts";

const HeaderCart = (props: ButtonProps) => {
  const defaultStyle = {
    color: "primary.main",
    p: 0,
  };
  const {currentData,isLoading}=useGetAllCartsQuery({});
    if(!currentData||isLoading){
        return  <>loading ...</>
    }

  return (
      <DrawerCustom
          renderButton={<IconButton {...props} sx={defaultStyle}>
              <Badge badgeContent={currentData.total} color="primary">
                  <ShoppingCartOutlinedIcon sx={{color:"white"}}/>

              </Badge>
          </IconButton>}
          anchor={"right"}
          bgcolor={"black"}
      >
          <Stack>
            <Typography color={"white"}>HeaderCart</Typography>
              <Stack>
                  {currentData?.contents?.map(item=>
                  <Box key={item.id}>
                      <Typography color={"white"}>
                          {item.product} * {item.quantity}
                      </Typography>
                  </Box>
                  )}
              </Stack>
          </Stack>
      </DrawerCustom>
  );
};

export default HeaderCart;
