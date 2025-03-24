import {Stack} from "@mui/material";
import {NGLeftArrowIcon} from "../../../../../assets/CreateSvgIcon.tsx";
import {useAppDispatch} from "../../../../../redux/redux.ts";
import {setDialogRTK} from "../../../../../redux/store/application.ts";

const TopNav = () => {
    const dispatch=useAppDispatch()
    return <Stack
        height="60px"
        width="100%"
        bgcolor={"#121232"}
        direction="row"
        sx={{
            position: "relative",
        }}
        alignItems="center"
        justifyContent="space-between">
        <Stack width="fit-content" direction="row" alignItems="center">
            <Stack width="60px" alignItems="center">
                <NGLeftArrowIcon
                    sx={{mt: "3px", cursor: "pointer"}}
                    onClick={() => {
                        dispatch(setDialogRTK({adminCreateProduct:false}))
                    }}
                />
            </Stack>
            {/*<Text*/}
            {/*    sx={{*/}
            {/*        fontWeight: 700,*/}
            {/*        fontSize: "17px",*/}
            {/*        color: "white",*/}
            {/*        textDecorationLine: "underline",*/}
            {/*        fontFamily: "Poppins",*/}
            {/*        width: "fit-content",*/}
            {/*    }}>*/}
            {/*    Create Product*/}
            {/*</Text>*/}
        </Stack>

        {/*<Stack direction="row" alignItems="center" >*/}
        {/*    <ButtonCustom*/}
        {/*        variant="contained"*/}
        {/*        onClick={() => {*/}

        {/*        }}*/}
        {/*        endIcon={*/}
        {/*            <NGRightArrowIcon*/}
        {/*                sx={{*/}
        {/*                    mt: "6px",*/}
        {/*                }}*/}
        {/*            />*/}
        {/*        }*/}
        {/*        sx={{*/}
        {/*            textTransform: "none",*/}
        {/*            fontFamily: "Poppins",*/}
        {/*            fontSize: "11px",*/}
        {/*            fontWeight: 600,*/}
        {/*            mr: "20px",*/}
        {/*        }}>*/}
        {/*        Next*/}
        {/*    </ButtonCustom>*/}
        {/*</Stack>*/}
    </Stack>
};

export default TopNav;
