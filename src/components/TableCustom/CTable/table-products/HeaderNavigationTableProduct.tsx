import {Stack} from "@mui/material";
import {ISearchFormTableCustom, SearchFormTableCustom} from "../../components/NGSearch.tsx";
import ButtonCustom from "../../../button/ButtonCustom.tsx";
import {setDialogRTK} from "../../../../redux/store/application.ts";
import {CirclePlus} from "lucide-react";
import Text from "../../../text/Text.tsx";
import {useAppDispatch} from "../../../../redux/redux.ts";

{/** Header Navigation of Table Product **/}
const HeaderNavigationTable = (prop:ISearchFormTableCustom) => {
    const dispatch=useAppDispatch();
    return <Stack height={'100px'} justifyContent={'space-between'} alignItems={'center'} direction={'row'} >
        {/** Search Field **/}
        <SearchFormTableCustom
            {...prop}
        />
       <Stack direction={'row'} gap={2}>
           {/** Filter Product **/}
           <ButtonCustom variant={"outlined"} onClick={()=>dispatch(setDialogRTK({adminCreateProduct:true}))} sx={{px:2,py:1,height:"40px"}}>
               <Text color={"primary.main"} variant={"subtitle2"} ml={"5px"}>Filter Item</Text>
           </ButtonCustom>
           {/** Create Product **/}
           <ButtonCustom variant={"outlined"} onClick={()=>dispatch(setDialogRTK({adminCreateProduct:true}))} sx={{px:2,py:1,height:"40px"}}>
               <CirclePlus />
               <Text color={"primary.main"} variant={"subtitle2"} ml={"5px"}>Create Product</Text>
           </ButtonCustom>
       </Stack>
    </Stack>
};

export default HeaderNavigationTable;
