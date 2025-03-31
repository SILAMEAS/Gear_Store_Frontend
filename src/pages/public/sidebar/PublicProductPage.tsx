import {Grid} from "@mui/material";
import CTableProducts from "@components/TableCustom/CTable/table-products/CTableProducts.tsx";

const LayoutProducts = () => {
    return (
        <Grid container height={"calc( 100vh - 50px )"} overflow={"hidden"}>
            {/*<Grid item xl={2}>*/}
            {/*    <FilterSidebar/>*/}
            {/*</Grid>*/}
            <Grid item  xl={12} mx={"auto"}>
                <CTableProducts/>
            </Grid>
        </Grid>
    );
};

export default LayoutProducts;
