import {Stack} from "@mui/material";
import AdminHeader from "../../utils/ui/admin/layout/AdminHeader.tsx";
import AdminSideBar from "../../utils/ui/admin/layout/AdminSideBar.tsx";
import AdminContent from "../../utils/ui/admin/layout/AdminContent.tsx";
import useRKTFromStore from "../../utils/hooks/useRTKFromStore.tsx";
import DialogProduct from "../form/admin/dialog/dialog-product/DialogProduct.tsx";
import {EnumAction} from "../../constants/GlobalConstants.tsx";

const AdminLayout = () => {
    const {dialogRTK:{adminCreateProduct,adminEditProduct}}=useRKTFromStore();
  return  <Stack overflow={"hidden"}>
      {/*** Header  **/}
      <AdminHeader />
      <Stack direction={"row"} height={"calc(100vh - 65px)"} width={"100%"}>
          {/** Sidebar **/}
          <AdminSideBar />
          {/*** Content of admin  **/}
          <AdminContent/>
      </Stack>
      {/** Dialog Product Creation */}
      {Boolean(adminCreateProduct)&&<DialogProduct action={EnumAction.create}/>}
      {/** Dialog Product Edition */}
      {Boolean(adminEditProduct)&&<DialogProduct action={EnumAction.update}/>}
  </Stack>
};

export default AdminLayout;
