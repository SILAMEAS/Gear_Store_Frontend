import {Box, Stack, ThemeProvider} from "@mui/material";
import theme from "../../theme/theme.tsx";
import AppHeader from "../authentication/Header.tsx";
import AppContent from "../authentication/Content.tsx";
import AppFooter from "../authentication/Footer.tsx";
import {useGetUserDetailQuery} from "../../redux/services/userApi.ts";

const AppPublicLayout = () => {
    const Me=useGetUserDetailQuery({});
    console.log(Me?.currentData)
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

export default AppPublicLayout;
