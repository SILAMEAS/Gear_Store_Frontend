import {Stack} from "@mui/material";
import {DataFilter} from "@redux/services/types/ProductInterface.tsx";

export const $handleContainerRender=(key:string,data_filter?:DataFilter)=>{
    console.log('data_filter',data_filter)
    switch (key){
        case 'category':{
            return <Stack>Category</Stack>
        }
        case 'price':{
            return <Stack>Price</Stack>
        }
        default:{
            return  <></>
        }
    }
}