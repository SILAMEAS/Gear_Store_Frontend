import {Box,} from "@mui/material"
import CompanyLogo from "@pages/admin/sidebar/settings/sidebar/appearance-setting/logo-setting/CompanyLogo.tsx";
import InterfaceTheme
    from "@pages/admin/sidebar/settings/sidebar/appearance-setting/interface-theme/InterfaceTheme.tsx";
import TablePreview from "@pages/admin/sidebar/settings/sidebar/appearance-setting/table-preview/TablePreview.tsx";
import ColorSetting from "@pages/admin/sidebar/settings/sidebar/appearance-setting/color-setting/ColorSetting.tsx";


function AppearanceSettingsPage() {

    return (
        <Box sx={{width:"100%", mx: "auto", p: 3 ,overflow:"auto"}}>
            {/** ========================= Company Logo ========================== */}
            <CompanyLogo/>
            {/** ========================= Interface Theme ========================= */}
           <InterfaceTheme/>
            {/** ========================= Tables View ========================= */}
            <TablePreview/>
            {/** ========================= Color ========================= */}
            <ColorSetting/>
        </Box>
    )
}


export default AppearanceSettingsPage;
