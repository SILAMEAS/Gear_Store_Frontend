import {Stack} from "@mui/material";
import {useEffect} from "react";
import useGlobalHook from "@utils/hooks/useGlobalHook.tsx";
import useRKTFromStore from "@utils/hooks/useRTKFromStore.tsx";
import {setDialogRTK} from "@redux/store/application.ts";
import AdminHeader from "@utils/ui/admin/layout/AdminHeader.tsx";
import AdminSideBar from "@utils/ui/admin/layout/AdminSideBar.tsx";
import AdminContent from "@utils/ui/admin/layout/AdminContent.tsx";
import DialogProduct from "@pages/form/admin/dialog/dialog-product/DialogProduct.tsx";
import CreateUserForm from "@pages/form/admin/drawer/create-user/CreateUserForm.tsx";

const AdminLayout = () => {
    const {dialogRTK:{adminCreateProduct,adminEditProduct,adminCreateUser}}=useRKTFromStore();
    const {dispatch,param}=useGlobalHook();
    const {productId}=param;
    useEffect(() => {
        if(productId&&!adminCreateProduct){
             dispatch(setDialogRTK({adminEditProduct:Boolean(productId)}))
        }
    }, [productId]);
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
      {Boolean(adminCreateProduct)&&<DialogProduct/>}
      {/** Dialog Product Edition */}
      {Boolean(adminEditProduct)&&<DialogProduct productId={productId}/>}
      {/** Dialog User Creation */}
      {Boolean(adminCreateUser)&& <CreateUserForm/>}

  </Stack>
};

export default AdminLayout;
