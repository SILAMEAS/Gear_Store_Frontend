import {Box, Stack} from "@mui/material";
import AppHeader from "../../utils/ui/end-user/layout/Header.tsx";
import AppContent from "../../utils/ui/end-user/layout/Content.tsx";
import AppFooter from "../../utils/ui/end-user/layout/Footer.tsx";


const UserLayout = () => {

  return (
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
  );
};

export default UserLayout;
