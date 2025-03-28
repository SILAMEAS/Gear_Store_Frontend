import {Stack} from "@mui/material";
import AdminHeader from "../../utils/ui/admin/layout/AdminHeader.tsx";
import AdminSideBar from "../../utils/ui/admin/layout/AdminSideBar.tsx";
import AdminContent from "../../utils/ui/admin/layout/AdminContent.tsx";
import DialogProduct from "../form/admin/dialog/dialog-product/DialogProduct.tsx";
import {EnumAction} from "../../constants/GlobalConstants.tsx";
import useRKTFromStore from "../../utils/hooks/useRTKFromStore.tsx";
import useGlobalHook from "../../utils/hooks/useGlobalHook.tsx";
import {useEffect} from "react";
import {setDialogRTK} from "../../redux/store/application.ts";

const AdminLayout = () => {
    const {dialogRTK:{adminCreateProduct,adminEditProduct}}=useRKTFromStore();
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
      {Boolean(adminCreateProduct)&&<DialogProduct action={EnumAction.create}/>}
      {/** Dialog Product Edition */}
      {Boolean(adminEditProduct)&&<DialogProduct action={EnumAction.update}/>}
  </Stack>
};

export default AdminLayout;
