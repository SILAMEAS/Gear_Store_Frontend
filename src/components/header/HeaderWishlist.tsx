import {Badge, Box, ButtonProps, IconButton, Stack, Typography} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DrawerCustom from "../Drawer/DrawerCustom.tsx";
import {useGetAllWishlistsQuery} from "../../redux/services/wishlistApi.ts";

const HeaderWishlist = (props: ButtonProps) => {
    const defaultStyle = {
        color: "primary.main",
        p: 0,
    };
    const {currentData,isLoading}=useGetAllWishlistsQuery({});
    if(!currentData||isLoading){
        return  <>loading ...</>
    }
    return (
        <DrawerCustom
            renderButton={<IconButton {...props} sx={defaultStyle}>
                <Badge badgeContent={currentData.total} color="primary">
                    <FavoriteBorderIcon sx={{color:"white"}}/>
                </Badge>
            </IconButton>}
            anchor={"right"}
            bgcolor={"black"}
        >
            <Stack>
                <Typography color={"white"}>HeaderWishlist</Typography>
                <Stack>
                    {currentData?.contents?.map(item=>
                        <Box key={item.id}>
                            <Typography color={"white"}>
                                {item.product}
                            </Typography>
                        </Box>
                    )}
                </Stack>
            </Stack>
        </DrawerCustom>
    );
};

export default HeaderWishlist;
