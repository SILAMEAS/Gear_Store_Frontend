import {Stack} from "@mui/material";
import AdminHeader from "../../utils/ui/admin/layout/AdminHeader.tsx";
import AdminSideBar from "../../utils/ui/admin/layout/AdminSideBar.tsx";
import AdminContent from "../../utils/ui/admin/layout/AdminContent.tsx";
import useRKTFromStore from "../../utils/hooks/useRTKFromStore.tsx";
import DialogCreateProduct from "../form/admin/dialog/dialog-create-product/DialogCreateProduct.tsx";

const AdminLayout = () => {
    const {dialogRTK:{adminCreateProduct}}=useRKTFromStore();
  return  <Stack overflow={"hidden"}>
      {/*** Header  **/}
      <AdminHeader />
      <Stack direction={"row"} height={"calc(100vh - 65px)"} width={"100%"}>
          {/** Sidebar **/}
          <AdminSideBar />
          {/*** Content of admin  **/}
          <AdminContent/>
      </Stack>
      {/** Dialog  */}
      {adminCreateProduct&&<DialogCreateProduct/>}
  </Stack>
};

export default AdminLayout;
