import React from "react";
import {Box, Container, Typography} from "@mui/material";

const NotFound404: React.FC = () => {
    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                textAlign: "center",
            }}
        >
            <Box sx={{ maxWidth: "500px", width: "100%" }}>
            </Box>
            <Typography variant="h3" fontWeight="bold" color="error" mt={2}>
                Page Not Found
            </Typography>
            <Typography variant="h1" fontWeight="bold" color="error">
                404
            </Typography>
        </Container>
    );
};


export default NotFound404;
