import {Stack, StackProps} from "@mui/material";

const UILogo = (stackProps:StackProps) => {
    return <Stack
        sx={{ display: { xs: "none", md: "flex" }}}
        {...stackProps}
    >
        <img
            src={"/logo.png"}
            alt={"logo.png"}
            loading="lazy"
            height={60}
        />
    </Stack>
};

export default UILogo;
