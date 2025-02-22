import {Box} from "@mui/material";
import AdminHeader from "../../utils/ui/admin/layout/AdminHeader.tsx";
import AdminSideBar from "../../utils/ui/admin/layout/AdminSideBar.tsx";
import AdminContent from "../../utils/ui/admin/layout/AdminContent.tsx";

const AdminLayout = () => {
  return  <Box sx={{ display: "flex" }}>
      {/** Sidebar **/}
      <AdminSideBar />
      <Box component="main" sx={{ flexGrow: 1 }}>
          {/*** Header  **/}
          <AdminHeader />
          {/*** Content of admin  **/}
          <AdminContent/>
      </Box>
  </Box>
};

export default AdminLayout;
