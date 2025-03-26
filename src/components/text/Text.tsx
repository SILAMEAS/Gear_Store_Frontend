import {PropsWithChildren} from "react";
import Typography from "@mui/material/Typography";
import {TypographyProps} from "@mui/material";

const Text = ({children,...typographyProps}:PropsWithChildren&TypographyProps) => {
    return <Typography variant={"caption"}  {...typographyProps}>
        {children}
    </Typography>
};

export default Text;
