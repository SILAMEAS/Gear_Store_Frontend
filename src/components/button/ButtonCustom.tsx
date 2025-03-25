import {PropsWithChildren} from "react";
import {Button, ButtonProps, SxProps} from "@mui/material";
import Colors from "../../theme/mode/Colors.ts";

interface IButtonCustom {
    MuiButtonHover?: SxProps;
    MuiButtonContained?: SxProps;
    MuiButtonText?: SxProps;
    MuiButtonOutlined?: SxProps;
}

const ButtonCustom = ({
                          children,
                          MuiButtonOutlined = {} as SxProps,
                          MuiButtonContained = {} as SxProps,
                          MuiButtonText = {} as SxProps,
                          MuiButtonHover = {} as SxProps,
                          ...buttonProps
                      }: PropsWithChildren<ButtonProps> & Partial<IButtonCustom>) => {
    const defaultNormal: SxProps = {
        fontWeight: 600,
        textTransform: "capitalize",
    };

    const sxStyles: SxProps = {
        "&:hover": { backgroundColor: Colors._555, ...MuiButtonHover } as SxProps,
        "&.MuiButton-contained": { ...defaultNormal, ...MuiButtonContained } as SxProps,
        "&.MuiButton-text": { ...defaultNormal, ...MuiButtonText } as SxProps,
        "&.MuiButton-outlined": { ...defaultNormal, ...MuiButtonOutlined } as SxProps,
    } as SxProps;

    return (
        <Button variant="contained" {...buttonProps} sx={sxStyles}>
            {children}
        </Button>
    );
};

export default ButtonCustom;
