import {Stack} from "@mui/material";
import AdminHeader from "../../utils/ui/admin/layout/AdminHeader.tsx";
import AdminSideBar from "../../utils/ui/admin/layout/AdminSideBar.tsx";
import AdminContent from "../../utils/ui/admin/layout/AdminContent.tsx";
import PageTransition from "../../components/loading/PageTransition.tsx";

const AdminLayout = () => {
  return  <Stack overflow={"hidden"}>
      {/*** Header  **/}
      <AdminHeader />
      <Stack direction={"row"} height={"calc(100vh - 65px)"} width={"100%"}>
          {/** Sidebar **/}
          <AdminSideBar />
          {/*** Content of admin  **/}
          <PageTransition>
              <AdminContent/>
          </PageTransition>
      </Stack>
  </Stack>
};

export default AdminLayout;
