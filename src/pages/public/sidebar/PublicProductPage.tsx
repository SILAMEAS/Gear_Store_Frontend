import {Stack} from "@mui/material";
import GridListProducts from "@utils/ui/public/table/GridListProducts.tsx";

const LayoutProducts = () => {
    return (
        <Stack direction={"row"} height={"90vh"} width={"100%"}>
            <GridListProducts/>
        </Stack>
    );
};

export default LayoutProducts;
