import {Stack} from "@mui/material";
import ButtonCustom from "@components/button/ButtonCustom.tsx";
import {FormID} from "@pages/form/FormID.tsx";
import Text from "@components/text/Text.tsx";
import {IDType} from "@redux/services/types/IAdminApi.ts";

const ActionCreateUpdateProduct = ({productId}:{productId?:IDType}) => {
    return <Stack width={"100%"} height={"auto"} pt={"20px"} borderTop={1} direction={"row"}  alignItems={"center"} justifyContent={"flex-end"}>
        <ButtonCustom type={"submit"} form={FormID[productId? "#update-product":"#create-product"]} >
            <Text>{productId?"Update Product":"Create Product"}</Text>
        </ButtonCustom>
    </Stack>
};

export default ActionCreateUpdateProduct;
