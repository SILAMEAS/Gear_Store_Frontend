import React, {useState} from "react";
import {ListItemIcon, ListItemText, MenuItem, Stack} from "@mui/material";
import {SearchFormTableCustom} from "@components/TableCustom/components/NGSearch.tsx";
import ButtonCustom from "@components/button/ButtonCustom.tsx";
import {setDialogRTK} from "@redux/store/application.ts";
import {FilterList} from "@mui/icons-material";
import Text from "@components/text/Text.tsx";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import useGlobalHook from "@utils/hooks/useGlobalHook.tsx";
import {IFilterTableCustom} from "@components/TableCustom/components/types.ts";
import {useFilterProductsQuery} from "@redux/services/productApi.ts";
import PopOver from "@components/pop-over/PopOver.tsx";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import {
    HandleContainerRender
} from "@components/TableCustom/CTable/table-products/nav-header-table/HandleContainerRender.tsx";


const NavHeaderCTableProduct = ({setFilter,filter}:{setFilter: React.Dispatch<React.SetStateAction<IFilterTableCustom>>,filter:IFilterTableCustom}) => {
    const [popUp, setPopUp] = useState<boolean>(false);
    const [popUpItem, setPopUpItem] = useState<{key:string,popUp:boolean}>({key:"",popUp:false});
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const {dispatch}=useGlobalHook();
    const filterProductsQuery=useFilterProductsQuery({},{refetchOnMountOrArgChange:true});
    const search_fields=filterProductsQuery?.currentData?.search_fields;
    const filterset_fields=filterProductsQuery?.currentData?.filterset_fields;
    const data_filter=filterProductsQuery?.currentData?.data_filter;

    return  <Stack gap={"20px"} mb={"20px"}>
        {/** Header Navigation of Table Product **/}
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} width={"100%"}>
            <SearchFormTableCustom setFilter={setFilter} filter={filter} placeholder={"Search By : "+search_fields}/>
            <Stack direction={"row"} gap={"10px"}>
                {/** Filter Button **/}
                <PopOver
                    open={popUp}
                    button={
                        <ButtonCustom
                            variant={"outlined"}  sx={{px:2,py:1}}
                        >
                            <FilterList fontSize="small" sx={{ mr: 0.5 }} />
                            <Text color={"primary.main"} ml={"5px"}>Filter</Text>
                        </ButtonCustom>
                    }
                    onClick={() => setPopUp(true)}
                    contain={
                        /** Container of Menu Item One */
                        <Stack minWidth={"150px"}>
                            {
                                filterset_fields?.map(item=>
                                    <PopOver
                                        key={item}
                                        open={popUpItem.popUp}
                                        onClose={() => setPopUpItem({key:item,popUp:false})}
                                        onClick={() => setPopUpItem({key:item,popUp:true})}
                                        contain={<HandleContainerRender KEY={item} data_filter={data_filter} />}
                                        button={<MenuItem
                                        key={item}
                                        onMouseEnter={() => setHoveredItem(item)}
                                        onMouseLeave={() => setHoveredItem(null)}>
                                        {hoveredItem === item ? (
                                            <React.Fragment>
                                                <ListItemIcon >
                                                    <ChevronLeftOutlinedIcon color={"primary"} />
                                                </ListItemIcon>
                                                <ListItemText primary={<Text variant={"body2"} color={"primary"}>{item}</Text>}/>
                                            </React.Fragment>
                                        ) : <React.Fragment>
                                            <ListItemIcon />
                                            <ListItemText primary={<Text variant={"body2"}>{item}</Text>}/>
                                        </React.Fragment>}
                                    </MenuItem>}
                                        horizontal={"left"}
                                        vertical={"top"}
                                    />
                                )
                            }
                        </Stack>
                    }
                    horizontal={"left"}
                    vertical={"top"}
                />
                <ButtonCustom
                    variant={"outlined"} onClick={()=>dispatch(setDialogRTK({adminCreateProduct:true}))} sx={{px:2,py:1}}
                >
                    <AddCircleOutlineOutlinedIcon fontSize={"small"}/>
                    <Text color={"primary.main"} ml={"5px"}>Create Product</Text>
                </ButtonCustom>

            </Stack>
        </Stack>
        <Stack direction={"row"}>
            <ButtonCustom
                variant={"text"} sx={{px:2,py:1}}
            >
                <FilterList fontSize="small" sx={{ mr: 0.5 }} />
                <Text color={"primary.main"} ml={"5px"}>Active Filter</Text>
            </ButtonCustom>
        </Stack>
    </Stack>
};

export default NavHeaderCTableProduct;
