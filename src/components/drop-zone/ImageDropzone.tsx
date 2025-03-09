import React, {useCallback} from "react";
import {useDropzone} from "react-dropzone";
import {Box, Paper, Typography} from "@mui/material";

export const ImageDropzone: React.FC<{
    onChange: (file: File | null) => void
    value: File | null
}> = ({ onChange, value }) => {
    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            if (acceptedFiles.length > 0) {
                onChange(acceptedFiles[0])
            }
        },
        [onChange],
    )

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { "image/*": [] },
        multiple: false,
    })

    return (
        <Paper
            {...getRootProps()}
            sx={{
                my:5,
                border: "2px dashed",
                borderColor: isDragActive ? "primary.main" : "grey.300",
                bgcolor: isDragActive ? "action.hover" : "background.paper",
                cursor: "pointer",
                textAlign: "center",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                height:"250px"
            }}
        >
            <input {...getInputProps()} />
            {value ? (
                <Box>
                    <img
                        src={URL.createObjectURL(value) || "/placeholder.svg"}
                        alt="Profile preview"
                        style={{ maxWidth: "100%", maxHeight: "200px", objectFit: "contain" }}
                    />
                    <Typography variant="caption" display="block">
                        {value.name}
                    </Typography>
                </Box>
            ) : (
                <Typography>
                    {isDragActive ? "Drop the image here..." : "Drag & drop a profile image here, or click to select one"}
                </Typography>
            )}
        </Paper>
    )
}
