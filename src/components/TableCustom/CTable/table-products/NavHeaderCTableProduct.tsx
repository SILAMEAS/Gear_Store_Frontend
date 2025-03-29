import React from 'react';
import {Stack} from "@mui/material";
import {SearchFormTableCustom} from "@components/TableCustom/components/NGSearch.tsx";
import ButtonCustom from "@components/button/ButtonCustom.tsx";
import {setDialogRTK} from "@redux/store/application.ts";
import {FilterList} from "@mui/icons-material";
import Text from "@components/text/Text.tsx";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import useGlobalHook from "@utils/hooks/useGlobalHook.tsx";
import {IFilterTableCustom} from "@components/TableCustom/components/types.ts";

const NavHeaderCTableProduct = ({setFilter,filter}:{setFilter: React.Dispatch<React.SetStateAction<IFilterTableCustom>>,filter:IFilterTableCustom}) => {
    const {dispatch}=useGlobalHook();
    return  <Stack gap={'20px'} mb={'20px'}>
        {/** Header Navigation of Table Product **/}
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
            <SearchFormTableCustom setFilter={setFilter} filter={filter} placeholder={"Search Product"}/>
            <Stack direction={'row'} gap={'10px'}>
                <ButtonCustom
                    variant={"outlined"} onClick={()=>dispatch(setDialogRTK({adminCreateProduct:true}))} sx={{px:2,py:1}}
                >
                    <FilterList fontSize="small" sx={{ mr: 0.5 }} />
                    <Text color={"primary.main"} ml={"5px"}>Filter</Text>
                </ButtonCustom>
                <ButtonCustom
                    variant={"outlined"} onClick={()=>dispatch(setDialogRTK({adminCreateProduct:true}))} sx={{px:2,py:1}}
                >
                    <AddCircleOutlineOutlinedIcon fontSize={"small"}/>
                    <Text color={"primary.main"} ml={"5px"}>Create Product</Text>
                </ButtonCustom>
            </Stack>
        </Stack>
        <Stack direction={'row'}>
            <ButtonCustom
                variant={"text"} onClick={()=>dispatch(setDialogRTK({adminCreateProduct:true}))} sx={{px:2,py:1}}
            >
                <FilterList fontSize="small" sx={{ mr: 0.5 }} />
                <Text color={"primary.main"} ml={"5px"}>Active Filter</Text>
            </ButtonCustom>
        </Stack>
    </Stack>
};

export default NavHeaderCTableProduct;
