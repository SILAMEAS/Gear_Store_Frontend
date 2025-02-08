import {Box, Stack} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {alpha} from "@mui/material/styles";
import {Outlet} from "react-router-dom";
import AppTheme from "../AdminTheme.tsx";
import {chartsCustomizations} from "../theme/charts.ts";
import {dataGridCustomizations} from "../theme/dataGrid.ts";

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
};

const AdminLayout = (props: { disableCustomTheme?: boolean }) => {
    console.log('AdminLayout')

  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: "flex" ,bgcolor:"red"}}>
        {/*<SideMenu />*/}
        {/*<AppNavbar />*/}
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            overflow: "auto",
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: "center",
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            <Outlet />
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
};

export default AdminLayout;
