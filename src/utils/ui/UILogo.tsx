import {Stack, StackProps} from "@mui/material";

const UILogo = (stackProps:StackProps) => {
    return <Stack
        sx={{ display: { xs: "none", md: "block" }}}
        {...stackProps}
    >
        <img
            src={`logo.png`}
            alt={'logo.png'}
            loading="lazy"
            width={100}
        />
    </Stack>
};

export default UILogo;
