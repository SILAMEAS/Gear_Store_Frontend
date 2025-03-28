import {Box, Stack} from "@mui/material";
import useCheckUrl from "@utils/hooks/useCheckUrl.tsx";
import AppHeader from "@utils/ui/end-user/layout/Header.tsx";
import AppContent from "@utils/ui/end-user/layout/Content.tsx";
import AppFooter from "@utils/ui/end-user/layout/Footer.tsx";


const PublicLayout = () => {
    const {IsLoginPage}=useCheckUrl();
  return (
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
  );
};

export default PublicLayout;
