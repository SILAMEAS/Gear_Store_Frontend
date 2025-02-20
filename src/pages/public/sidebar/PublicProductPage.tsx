import {Stack} from "@mui/material";
import FilterSidebar from "../../../components/Filter-side-bar/FilterSideBar.tsx";
import Products from "../../../utils/ui/public/table/Products.tsx";
import {StyleCustom} from "../../../styles/StyleCustom.tsx";

const LayoutProducts = () => {
    return (
        <Stack direction={"row"} height={"90vh"} width={"100%"}>
            <Stack overflow={"auto"} width={"300px"} sx={{...StyleCustom.scrollNormal}}>
                <FilterSidebar/>
            </Stack>
           <Stack width={"100%"} p={"20px"}>
               <Products/>
           </Stack>
        </Stack>
    );
};

export default LayoutProducts;
