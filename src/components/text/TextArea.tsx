import {TextField, TextFieldProps} from "@mui/material";

export default function TextArea({props}:{props:TextFieldProps}) {
    return (
        <TextField
            label="Your Message"
            multiline
            rows={4} // Number of visible rows
            fullWidth
            variant="outlined"
            {...props}
        />
    );
}