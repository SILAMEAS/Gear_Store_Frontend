import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Copy from "../copy/Copy.tsx";
import getToken from "../../utils/local-storage/token/useGetToken.ts";
import {IconButton, Tooltip} from "@mui/material";

const SwaggerPage: React.FC = () => {
    return (
        <Card sx={{ p: 2, my: 2 }}>
            <Tooltip title={"Copy Token Passing Authorize To Access End point Protection"}>
               <IconButton>
                   <Copy content={`${getToken().access}`}/>
               </IconButton>
            </Tooltip>
            <CardContent sx={{overflow:"auto",height:"100%"}}>
                <Typography variant="h5" gutterBottom>
                    API Documentation
                </Typography>
                <SwaggerUI url={`${import.meta.env.VITE_BASE_URL}/schema/`}  />
            </CardContent>
        </Card>
    );
};

export default SwaggerPage;
