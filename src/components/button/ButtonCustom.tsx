import {PropsWithChildren} from "react";
import {Button, ButtonProps} from "@mui/material";

const ButtonCustom = ({children,...buttonProps}:PropsWithChildren&ButtonProps) => {
    return  <Button variant={"contained"} {...buttonProps}>
        {children}
    </Button>
};

export default ButtonCustom;
