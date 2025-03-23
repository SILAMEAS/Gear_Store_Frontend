import {PropsWithChildren} from "react";
import Typography from "@mui/material/Typography";
import {TypographyProps} from "@mui/material";

const Text = ({children,...typographyProps}:PropsWithChildren&TypographyProps) => {
    return <Typography  {...typographyProps}>
        {children}
    </Typography>
};

export default Text;
