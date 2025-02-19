import {Box, Stack, ThemeProvider} from "@mui/material";
import theme from "../../theme/theme.tsx";
import AppHeader from "../../utils/ui/layout/end-user/Header.tsx";
import AppContent from "../../utils/ui/layout/end-user/Content.tsx";
import AppFooter from "../../utils/ui/layout/end-user/Footer.tsx";
import useCheckUrl from "../../utils/hooks/useCheckUrl.tsx";

const PublicLayout = () => {
    const {IsLoginPage}=useCheckUrl();
  return (
      <ThemeProvider theme={theme}>
          <Box
              sx={{
                  display: "flex",
                  flexDirection: "column",
                  maxHeight: "98vh",
                  alignItems: "center",
                  overflow:"hidden"
              }}
          >
              {
                  !IsLoginPage&&  <AppHeader />
              }
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
