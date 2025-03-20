import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import {IconButton} from "@mui/material";
import {enqueueSnackbar} from "notistack";

const Copy = ({content,message= "Copy Success"}:{content:string,message?:string}) => {
    return  <IconButton  onClick={event => {
        event.stopPropagation();
        navigator.clipboard.writeText(`${content}`).then(r => r);
        enqueueSnackbar(
            message,
            {
                variant: "success",
            },
        );
    }}>
        <ContentCopyOutlinedIcon
            sx={{
                color: "primary.main",
                cursor:"pointer",
            }}
        />
    </IconButton>
};

export default Copy;
