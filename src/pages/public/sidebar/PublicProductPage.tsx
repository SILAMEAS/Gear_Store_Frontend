import {Stack} from "@mui/material";
import GridListProducts from "../../../utils/ui/public/table/GridListProducts.tsx";

const LayoutProducts = () => {
    return (
        <Stack direction={"row"} height={"90vh"} width={"100%"}>
           {/* <Stack overflow={"auto"} width={"300px"} sx={{...StyleCustom.scrollNormal}}>*/}
           {/*     <FilterSidebar/>*/}
           {/* </Stack>*/}
           {/*<Stack width={"100%"} p={"20px"}>*/}
           {/*    <GridListProducts/>*/}
           {/*</Stack>*/}
            <GridListProducts/>
        </Stack>
    );
};

export default LayoutProducts;
