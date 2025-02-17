import React from "react";
import {Box, Container, Typography} from "@mui/material";

const NotFoundPagePermission: React.FC = () => {
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
                Page Not Found With Permission Information
            </Typography>
            <Typography variant="h1" fontWeight="bold" color="error">
                403
            </Typography>
        </Container>
    );
};


export default NotFoundPagePermission;
