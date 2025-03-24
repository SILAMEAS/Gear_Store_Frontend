import {useState} from "react";
import {Box, Button, Paper, Typography} from "@mui/material";
import {LoadingSpinner} from "../../../../../../../components/loading/LoadingSpinner.tsx";

const CompanyLogo = () => {
    const [logo, _] = useState<string | null>("http://localhost:4000/media/logo/image_2023_08_18T06_22_30_931Z.png")
    return<Box sx={{ mb: 4 }}>
        <Typography variant="h6" fontWeight="500" gutterBottom>
            Company logo
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
            Update your company logo.
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Paper
                elevation={0}
                sx={{
                    width: 80,
                    height: 80,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 2,
                    border: "1px solid #e0e0e0",
                    mr: 2,
                }}
            >
                <LoadingSpinner />
                {
                    logo && <img src={logo} alt={"logo"} width={"100%"}/>
                }
            </Paper>
            <Button
                variant="outlined"
                sx={{
                    borderRadius: 1,
                    textTransform: "none",
                    mr: 2,
                    color: "text.primary",
                    borderColor: "divider",
                }}
            >
                Replace logo
            </Button>
            <Button
                variant="text"
                sx={{
                    borderRadius: 1,
                    textTransform: "none",
                    color: "white",
                    bgcolor: "error.light",
                    "&:hover": {
                        bgcolor: "error.light",
                        opacity: 0.9,
                    },
                }}
            >
                Remove
            </Button>
        </Box>
    </Box>
};

export default CompanyLogo;
