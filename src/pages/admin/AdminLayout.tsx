import {Outlet} from "react-router-dom";
import AppTheme from "../../theme/AdminTheme.tsx";
import {chartsCustomizations} from "../../theme/charts.ts";
import {dataGridCustomizations} from "../../theme/dataGrid.ts";
import AppHeader from "../../utils/ui/layout/Header.tsx";
import {Box, Stack} from "@mui/material";
import AppFooter from "../../utils/ui/layout/Footer.tsx";

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
};

const AdminLayout = (props: { disableCustomTheme?: boolean }) => {
    console.log('AdminLayout')

  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
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
                <Outlet />
                <AppFooter />
            </Stack>
        </Box>

    </AppTheme>
  );
};

export default AdminLayout;
