import {Box, CssBaseline} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import AdminHeader from "../../utils/ui/layout/admin/AdminHeader.tsx";
import AdminSideBar from "../../utils/ui/layout/admin/AdminSideBar.tsx";
import AdminContent from "../../utils/ui/layout/admin/AdminContent.tsx";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});
const AdminLayout = () => {
  return (
      <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Box sx={{ display: "flex" }}>
              {/** Side bar **/}
              <AdminSideBar />
              <Box component="main" sx={{ flexGrow: 1 }}>
                  {/*** Header  **/}
                  <AdminHeader />
                  {/*** Content of admin  **/}
                  <AdminContent/>
              </Box>
          </Box>
      </ThemeProvider>
  );
};

export default AdminLayout;
