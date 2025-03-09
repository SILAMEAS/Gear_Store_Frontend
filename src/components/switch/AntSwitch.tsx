import {styled, Switch} from "@mui/material";

export const AntSwitch = styled(Switch)<{overridecolor?: string}>(
    ({theme, overridecolor}) => ({
        width: 38,
        height: 20,
        padding: 0,
        display: "flex",
        marginLeft:"12px",
        "&:active": {
            "& .MuiSwitch-thumb": {
                width: 15,
            },
            // '& .MuiSwitch-switchBase.Mui-checked': {
            //   transform: 'translateX(9px)',
            // },
        },
        "& .MuiSwitch-switchBase": {
            padding: 2,
            "&.Mui-checked": {
                transform: "translateX(18px)",
                color: "white",
                "& + .MuiSwitch-track": {
                    opacity: 1,
                    backgroundColor: overridecolor,
                },
                "&.Mui-disabled + .MuiSwitch-track": {
                    opacity:0.3,
                },
            },
            "&.Mui-disabled .MuiSwitch-thumb": {
                color: "#EEEEEE",
            },
            "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.5,
            },
        },
        "& .MuiSwitch-thumb": {
            boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
            width: 15,
            height: 15.5,

            borderRadius: 7,
            transition: theme.transitions.create(["width"], {
                duration: 200,
            }),
        },
        "& .MuiSwitch-track": {
            borderRadius: 16,
            opacity: 1,
            backgroundColor:
                theme.palette.mode === "dark"
                    ? "rgba(255,255,255,.35)"
                    : "rgba(0,0,0,.25)",
            boxSizing: "border-box",
        },
    }),
);