import {Stack} from "@mui/material";
import ButtonCustom from "@components/button/ButtonCustom.tsx";
import {FormID} from "@pages/form/FormID.tsx";
import Text from "@components/text/Text.tsx";

const ActionCreateProduct = () => {
    return <Stack width={"100%"} height={"auto"} pt={"20px"} borderTop={1} direction={"row"}  alignItems={"center"} justifyContent={"flex-end"}>
        <ButtonCustom type={"submit"} form={FormID["#create-product"]} >
            <Text>Create Product</Text>
        </ButtonCustom>
    </Stack>
};

export default ActionCreateProduct;
