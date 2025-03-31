import {Checkbox, MenuItem, Stack} from "@mui/material";
import {DataFilter} from "@redux/services/types/ProductInterface.tsx";

export const $handleContainerRender=(key:string,data_filter?:DataFilter)=>{
    const selectedCategories=[0];

    switch (key){
        case "category":{
            return <Stack>
                {
                    data_filter?.category?.map(item=>
                    <MenuItem key={item.id} onClick={()=>{
                        selectedCategories.push(item.id)
                        console.log("selectedCategories",selectedCategories)
                    }}>
                        <Checkbox checked={Boolean(selectedCategories.includes(item.id))}/>
                        {item.name}
                    </MenuItem>
                    )
                }
            </Stack>
        }
        case "price":{
            return <Stack>Price</Stack>
        }
        default:{
            return  <></>
        }
    }
}