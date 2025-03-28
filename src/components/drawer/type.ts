import React, {ReactNode} from "react";

export type Anchor = "top" | "left" | "bottom" | "right";
export interface IAnchorTemporaryDrawer{     top: boolean,     left: boolean  ,   bottom: boolean  ,   right: boolean }
export interface PropsDrawerCustom{     setAnchorTemporaryDrawer?: React.Dispatch<React.SetStateAction<IAnchorTemporaryDrawer>>, anchorTemporaryDrawer?: IAnchorTemporaryDrawer,renderButton:ReactNode,anchor:Anchor}
export const DefaultAnchorTemporaryDrawer={     top: false,     left: false  ,   bottom: false  ,   right: false }