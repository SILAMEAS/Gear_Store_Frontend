import {Box, Stack, ThemeProvider} from "@mui/material";
import theme from "../../../theme/theme.tsx";
import AppHeader from "../../../utils/ui/layout/Header.tsx";
import AppContent from "../../../utils/ui/layout/Content.tsx";
import AppFooter from "../../../utils/ui/layout/Footer.tsx";

const PublicLayout = () => {
    console.log('PublicLayout')
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

export default PublicLayout;
