import {styled} from "@mui/material";

export const ThumbnailImage = styled("img")({
    width: "80px",
    height: "80px",
    objectFit: "cover",
    border: "1px solid #ddd",
    borderRadius: "4px",
    cursor: "pointer",
    "&:hover": {
        borderColor: "#000",
    },
})
