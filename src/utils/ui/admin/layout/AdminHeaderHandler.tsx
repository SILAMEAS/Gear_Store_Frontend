import {AddCard, FilterList} from "@mui/icons-material";
import DrawerCustom from "../../../../components/Drawer/DrawerCustom.tsx";
import {StyleCustom} from "../../../../styles/StyleCustom.tsx";
import FilterSidebar from "../../../../components/Filter-side-bar/FilterSideBar.tsx";
import {IconButton, Stack} from "@mui/material";
import useCheckUrl from "../../../hooks/useCheckUrl.tsx";
import {Route} from "../../../../constants/Route.ts";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import Typography from "@mui/material/Typography";
const AdminHeaderHandler = () => {
    const {pathnameRemoveLastSlash}=useCheckUrl();
    switch (pathnameRemoveLastSlash){
        case Route.admin.PRODUCT:{
            return <Stack direction={"row"} width={"100%"} justifyContent={"space-between"}>
                <DrawerCustom renderButton={<IconButton>
                    <FilterList/>
                </IconButton>} anchor={"left"}
                              overflow={"auto"} width={"300px"} sx={{...StyleCustom.scrollNormal}}
                >
                    <FilterSidebar/>
                </DrawerCustom>
                <DrawerCustom renderButton={<IconButton>
                    <AddCard/>
                </IconButton>} anchor={"top"}
                              overflow={"auto"} width={"300px"} sx={{...StyleCustom.scrollNormal}}
                >
                    <FilterSidebar/>
                </DrawerCustom>
            </Stack>
        }
        case Route.admin.USER:{
            return  <DrawerCustom renderButton={<IconButton>
                        <PersonAddAltIcon/>
                    </IconButton>} anchor={"top"} overflow={"auto"}  sx={{...StyleCustom.scrollNormal}}
                    >
                        <Stack height={"100%"} width={"100%"} justifyContent={"center"} alignItems={"center"}>
                            <Typography> Add new User</Typography>
                        </Stack>
            </DrawerCustom>
        }
        default:{
            return <></>
        }
    }

};

export default AdminHeaderHandler
;
