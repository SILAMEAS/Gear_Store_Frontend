import Colors from "../../../theme/mode/Colors.ts";

const _webkitBoxShadow = "inset 0 0 6px rgba(0,0,0,0.00)";
const _outline = "1px solid";
export const StyleConstant = {
    inputStyleLogin: {
        "& input::placeholder": {
          fontSize: "12px",
        },
        "& .MuiOutlinedInput-root": {
          // "& fieldset": {
          //   borderColor: "primary.main",
          //   borderWidth: "0.1px",
          //   // background: 'blue',
          //   // height: 40,
          //   // background: "inherit",
          // },
          "&:hover fieldset": {
            borderColor: "primary.light",
          },
          "&.Mui-focused fieldset": {
            borderColor: "primary.main",
            borderWidth: "0.2px",
          },
        },
      },
      select: {
        iconDropDownSelectPrimary: {
          ".MuiSvgIcon-root": {
            color:Colors._ffffff,
          },
        },
      },
  scrollNormal: {
    "&::-webkit-scrollbar": {
      width: "0.2em"
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: _webkitBoxShadow,
      webkitBoxShadow: _webkitBoxShadow,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "primary.main",
      borderRadius:"20px",
      outline: _outline,
    },
  },
  scrollNoWidth: {
    "&::-webkit-scrollbar": {
      width: "0.00em",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: _webkitBoxShadow,
      webkitBoxShadow: _webkitBoxShadow,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "primary.main",
      outline: _outline,
    },
  },
}
