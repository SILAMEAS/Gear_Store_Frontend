import {Button, styled} from "@mui/material";

export const ColorButton = styled(Button)(({ color }) => ({
    minWidth: "24px",
    width: "24px",
    height: "24px",
    padding: 0,
    marginRight: "8px",
    backgroundColor: color,
    "&:hover": {
        backgroundColor: color,
    },
}))