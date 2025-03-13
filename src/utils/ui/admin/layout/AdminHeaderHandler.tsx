import {AddCard, FilterList} from "@mui/icons-material";
import DrawerCustom from "../../../../components/Drawer/DrawerCustom.tsx";
import {StyleCustom} from "../../../../styles/StyleCustom.tsx";
import FilterSidebar from "../../../../components/Filter-side-bar/FilterSideBar.tsx";
import {IconButton, Stack} from "@mui/material";
import useCheckUrl from "../../../hooks/useCheckUrl.tsx";
import {Route} from "../../../../constants/Route.ts";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import CreateUserForm from "../../../../pages/form/admin/create-user/CreateUserForm.tsx";
import CreateProductForm from "../../../../pages/form/admin/create-product/CreateProductForm.tsx";
import Text from "../../../../components/Text/Text.tsx";

const AdminHeaderHandler = () => {
    const {pathnameRemoveLastSlash}=useCheckUrl();
    switch (pathnameRemoveLastSlash){
        case Route.admin.PRODUCT:{
            return <Stack direction={"row"} width={"100%"} justifyContent={"space-between"}>
                {/** Filter Side Bar **/}
                <DrawerCustom renderButton={<IconButton>
                    <FilterList/>
                </IconButton>} anchor={"left"}
                              overflow={"auto"} width={"300px"} sx={{...StyleCustom.scrollNormal}}
                >
                    <FilterSidebar/>
                </DrawerCustom>
                {/** Create Product **/}
                <DrawerCustom renderButton={<IconButton>
                    <AddCard/>
                </IconButton>}
                              anchor={"top"}
                              overflow={"auto"}
                              sx={{...StyleCustom.scrollNormal}}
                >
                  <Stack justifyContent={"center"} alignItems={"center"} height={"100%"}>
                      <Text> Create Product</Text>
                      <CreateProductForm/>
                  </Stack>

                </DrawerCustom>
            </Stack>
        }
        case Route.admin.USER:{
            return  <DrawerCustom renderButton={<IconButton>
                        <PersonAddAltIcon/>
                    </IconButton>} anchor={"top"} overflow={"auto"}  sx={{...StyleCustom.scrollNormal}}
                    >
                        <Stack height={"100%"} width={"100%"} justifyContent={"center"} alignItems={"center"}>
                            <CreateUserForm/>
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
