import {Stack} from "@mui/material";
import {PropsWithChildren, ReactNode} from "react";

const TopNav = ({leftSide,rightSide,children} :{leftSide:ReactNode,rightSide:ReactNode}&PropsWithChildren) => {
    return <Stack
        height="60px"
        width="100%"
        bgcolor={"primary.main"}
        direction="row"
        sx={{
            position: "relative",
        }}
        alignItems="center"
        justifyContent="space-between">
        {leftSide}
        {children}
        {rightSide}
    </Stack>
};

export default TopNav;
