import ButtonCustom from "../../../../../../components/button/ButtonCustom.tsx";
import {FormID} from "../../../../FormID.tsx";
import Text from "../../../../../../components/text/Text.tsx";
import {Stack} from "@mui/material";

const ActionCreateProduct = () => {
    return <Stack width={"100%"} height={"auto"} pt={"20px"} borderTop={1} direction={"row"}  alignItems={"center"} justifyContent={"flex-end"}>
        <ButtonCustom type={"submit"} form={FormID["#create-product"]} >
            <Text>Create Product</Text>
        </ButtonCustom>
    </Stack>
};

export default ActionCreateProduct;
