import {Outlet} from "react-router-dom";
import AppTheme from "../../theme/AdminTheme.tsx";
import {chartsCustomizations} from "../../theme/charts.ts";
import {dataGridCustomizations} from "../../theme/dataGrid.ts";

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
};

const AdminLayout = (props: { disableCustomTheme?: boolean }) => {
    console.log('AdminLayout')

  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
        <Outlet />
    </AppTheme>
  );
};

export default AdminLayout;
