import {Checkbox, MenuItem, Slider, Stack} from "@mui/material";
import {DataFilter} from "@redux/services/types/ProductInterface.tsx";
import React from "react";
import Text from "@components/text/Text.tsx";

const minDistance = 10;
export const HandleContainerRender=({KEY,data_filter}:{KEY: string, data_filter?: DataFilter
})=>{
    const selectedCategories=[0];
    const [value2, setValue2] = React.useState<number[]>([20, 37]);
    function valuetext(value: number) {
        return `${value}°C`;
    }
    const handleChange2 = (_event: React.SyntheticEvent | Event, newValue: number | number[], activeThumb: number) => {
        if (!Array.isArray(newValue)) return; // Ensure newValue is an array

        if (newValue[1] - newValue[0] >= minDistance) {
            setValue2(newValue);
            return;
        }

        const clampedValue = activeThumb === 0
            ? Math.min(newValue[0], 100 - minDistance)
            : Math.max(newValue[1], minDistance);

        setValue2(
            activeThumb === 0
                ? [clampedValue, clampedValue + minDistance]
                : [clampedValue - minDistance, clampedValue]
        );
    };

    switch (KEY){
        case "category":{
            return <Stack>
                {
                    data_filter?.category?.map(item=>
                    <MenuItem key={item.id} onClick={()=>{
                        selectedCategories.push(item.id)
                    }}>
                        <Checkbox checked={Boolean(selectedCategories.includes(item.id))}/>
                        {item.name}
                    </MenuItem>
                    )
                }
            </Stack>
        }
        case "price":{
            return   <Stack sx={{ width: 300 ,height:"150px"}} alignItems={"center"} justifyContent={"center"} px={"20px"}>
                <Slider
                    getAriaLabel={() => "Minimum distance shift"}
                    value={value2}
                    onChange={handleChange2}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    disableSwap
                />
                <Text>{`MIN : ${value2[0]}`}</Text>
                <Text>{`MAX :  ${value2[1]}`}</Text>
            </Stack>
        }
        default:{
            return  <></>
        }
    }
}