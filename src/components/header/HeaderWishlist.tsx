import {Badge, Box, IconButton, Stack, Typography} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {BoxProps} from "@mui/material/Box";
import {useGetAllWishlistsQuery} from "@redux/services/wishlistApi.ts";
import getToken from "@utils/local-storage/token/useGetToken.ts";
import Colors from "@theme/mode/Colors.ts";
import DrawerCustom from "@components/drawer/DrawerCustom.tsx";

const HeaderWishlist = (props: BoxProps) => {
    const defaultStyle = {
        color: "primary.main",
        p: 0,
    };
    const {currentData}=useGetAllWishlistsQuery({},{skip:!getToken().access});
    return (
        <DrawerCustom
            renderButton={<Box sx={defaultStyle} {...props}>
                <IconButton color="inherit">
                    <Badge badgeContent={currentData?.total??0} color="primary">
                        <FavoriteBorderIcon sx={{color:"black.main"}}/>
                    </Badge>
                </IconButton>
            </Box>}
            anchor={"right"}
            bgcolor={"black"}
        >
            <Stack>
                <Typography color={Colors._ffffff}>HeaderWishlist</Typography>
                <Stack>
                    {currentData?.contents?.map(item=>
                        <Box key={item.id}>
                            <Typography color={Colors._ffffff}>
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
