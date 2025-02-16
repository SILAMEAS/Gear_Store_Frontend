import {Box, Stack, ThemeProvider} from "@mui/material";
import AppHeader from "./Header.tsx";
import AppFooter from "./Footer.tsx";
import theme from "../../theme/theme.tsx";
import AppContent from "./Content.tsx";
import {useGetUserDetailQuery} from "../../redux/services/userApi.ts";
import React from "react";
import getToken from "../../utils/local-storage/token/useGetToken.ts";

const AppLayout = () => {
    console.log('AppLayout')
    const {currentData}=useGetUserDetailQuery({},{skip:!getToken()?.access});
    React.useEffect(()=>{
        console.log('currentData',currentData)
    },[])
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
