import * as React from "react";
import {PropsWithChildren} from "react";
import Box, {BoxProps} from "@mui/material/Box";
import {Anchor, DefaultAnchorTemporaryDrawer, PropsDrawerCustom} from "./type.ts";
import {Drawer, IconButton, Stack} from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

export default function DrawerCustom({children,anchor,renderButton,...contentsProps}:PropsWithChildren&PropsDrawerCustom&BoxProps) {
    const [anchorTemporaryDrawer, setAnchorTemporaryDrawer] = React.useState(DefaultAnchorTemporaryDrawer);
    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === "keydown" &&
                    ((event as React.KeyboardEvent).key === "Tab" ||
                        (event as React.KeyboardEvent).key === "Shift")
                ) {
                    return;
                }

                setAnchorTemporaryDrawer({ ...anchorTemporaryDrawer, [anchor]: open });
            };

    return  <Stack key={anchor}>
        <Stack onClick={toggleDrawer(anchor, true)}>{renderButton}</Stack>
        <Drawer
            anchor={anchor}
            open={anchorTemporaryDrawer[anchor]}
            onClose={toggleDrawer(anchor, false)}
        >
            <Box
                sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
                // role="banner"
                // onClick={toggleDrawer(anchor, false)}
                // onKeyDown={toggleDrawer(anchor, false)}
                height={"100vh"}
                {...contentsProps}
            >
                {children}
            </Box>
            <Stack alignItems={"center"} justifyContent={"center"}>
                {anchor === "top"&& <IconButton sx={{zIndex:100}} onClick={toggleDrawer(anchor, false)}><KeyboardDoubleArrowUpIcon/></IconButton>}
            </Stack>
        </Drawer>
    </Stack>
}