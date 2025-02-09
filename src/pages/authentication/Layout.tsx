import {Box, Stack, ThemeProvider} from "@mui/material";
import AppHeader from "./Header.tsx";
import AppFooter from "./Footer.tsx";
import theme from "../../theme/theme.tsx";
import AppContent from "./Content.tsx";
import React from "react";
import {useNavigate} from "react-router-dom";
import useGetLocalStorage from "../../utils/hooks/useGetLocalStorage.tsx";

const AppLayout = () => {
    const navigate=useNavigate();
    const {refresh_token}=useGetLocalStorage();
    React.useEffect(()=>{
       if(!refresh_token){
           navigate('/products')
       }
    },[refresh_token])
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          alignItems: "center",
        }}
      >
        <AppHeader />
        <Stack
          sx={{
            width: "100%",
          }}
        >
          <AppContent />
          <AppFooter />
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default AppLayout;
