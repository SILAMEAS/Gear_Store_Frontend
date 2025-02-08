import {Box, Stack, ThemeProvider} from "@mui/material";
import AppHeader from "./Header.tsx";
import AppContent from "./Content.tsx";
import AppFooter from "./Footer.tsx";
import theme from "../../../theme.tsx";

const AppLayout = () => {
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
