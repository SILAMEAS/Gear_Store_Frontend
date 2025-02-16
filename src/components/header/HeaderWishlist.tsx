import {Badge, Box, Stack, Typography} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DrawerCustom from "../Drawer/DrawerCustom.tsx";
import {useGetAllWishlistsQuery} from "../../redux/services/wishlistApi.ts";
import {BoxProps} from "@mui/material/Box";
import getToken from "../../utils/local-storage/token/useGetToken.ts";

const HeaderWishlist = (props: BoxProps) => {
    const defaultStyle = {
        color: "primary.main",
        p: 0,
    };
    const {currentData}=useGetAllWishlistsQuery({},{skip:!getToken().access});
    return (
        <DrawerCustom
            renderButton={<Box sx={defaultStyle} {...props}>
                <Badge badgeContent={currentData?.total??0} color="primary">
                    <FavoriteBorderIcon sx={{color:getToken().access? "white":"grey"}}/>
                </Badge>
            </Box>}
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
