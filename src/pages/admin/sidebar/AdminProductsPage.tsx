import CTableProducts from "../../../components/TableCustom/CTable/CTableProducts.tsx";
import {IconButton, Stack} from "@mui/material";
import {StyleCustom} from "../../../styles/StyleCustom.tsx";
import FilterSidebar from "../../../components/Filter-side-bar/FilterSideBar.tsx";
import DrawerCustom from "../../../components/Drawer/DrawerCustom.tsx";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const AdminProductsPage = () => {
    return <Stack direction={"row"} height={"90vh"} width={"100%"}>
        <DrawerCustom renderButton={<IconButton>
            <KeyboardDoubleArrowRightIcon/>
        </IconButton>} anchor={"top"}
            overflow={"auto"} width={"300px"} sx={{...StyleCustom.scrollNormal}}
        >
            <FilterSidebar/>
        </DrawerCustom>
        <Stack width={"100%"} p={"20px"}>
            <CTableProducts/>
        </Stack>
    </Stack>
};

export default AdminProductsPage;
