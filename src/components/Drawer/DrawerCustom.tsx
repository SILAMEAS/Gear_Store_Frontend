import * as React from 'react';
import {PropsWithChildren} from 'react';
import Box, {BoxProps} from '@mui/material/Box';
import {Anchor, DefaultAnchorTemporaryDrawer, PropsDrawerCustom} from "./type.ts";
import {Button, Drawer} from "@mui/material";

export default function DrawerCustom({children,anchor,renderButton,...contentsProps}:PropsWithChildren&PropsDrawerCustom&BoxProps) {
    const [anchorTemporaryDrawer, setAnchorTemporaryDrawer] = React.useState(DefaultAnchorTemporaryDrawer);
    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setAnchorTemporaryDrawer({ ...anchorTemporaryDrawer, [anchor]: open });
            };

    return (
        <div>
            <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>{renderButton}</Button>
                <Drawer
                    anchor={anchor}
                    open={anchorTemporaryDrawer[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                >
                    <Box
                        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                        role="presentation"
                        onClick={toggleDrawer(anchor, false)}
                        onKeyDown={toggleDrawer(anchor, false)}
                        height={'100vh'}
                        {...contentsProps}
                    >
                       <> {children}</>
                    </Box>
                </Drawer>
            </React.Fragment>
        </div>
    );
}