import {styled, TextField, TextFieldProps} from "@mui/material";

const CustomTextField = styled(TextField)(({ theme }) => ({
    "& label": {
        color: theme.palette.Grey.main, // Label color
    },
    "& label.Mui-focused": {
        color: "#d63384", // Focused label color (pinkish)
    },
    "& .MuiInputBase-root": {
        color: "#fff", // Text color
        backgroundColor: "#121212", // Dark background
        borderRadius: "8px", // Rounded corners
        padding: "4px 8px",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#333", // Default border color
        },
        "&:hover fieldset": {
            borderColor: "#d63384", // Hover border color
        },
        "&.Mui-focused fieldset": {
            borderColor: "#d63384", // Focused border color
        },
    },
    "& input::placeholder": {
        color: "#888", // Placeholder color
        opacity: 0.7,
    },
}));
const TextFieldCustom = (props:TextFieldProps) => {
    return <CustomTextField
        fullWidth
        variant="outlined"
        size="small"
        {...props}
    />
};

export default TextFieldCustom;
