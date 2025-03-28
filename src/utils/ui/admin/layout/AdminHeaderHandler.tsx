// import {AddCard} from "@mui/icons-material";
// import {IconButton, Stack} from "@mui/material";
// import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
// import useCheckUrl from "@utils/hooks/useCheckUrl.tsx";
// import {Route} from "@constant/Route.ts";
// import DrawerCustom from "@components/drawer/DrawerCustom.tsx";
// import {StyleCustom} from "@/styles/StyleCustom.tsx";
// import CreateProductForm from "@pages/form/admin/drawer/create-product/CreateProductForm.tsx";
// import Text from "@components/text/Text.tsx";
// import CreateUserForm from "@pages/form/admin/drawer/create-user/CreateUserForm.tsx";
//
// const AdminHeaderHandler = () => {
//     const {pathnameRemoveLastSlash}=useCheckUrl();
//     switch (pathnameRemoveLastSlash){
//         case Route.admin.PRODUCT:{
//             return <Stack direction={"row"} width={"100%"} justifyContent={"space-between"}>
//                 {/** Create Product **/}
//                 <DrawerCustom renderButton={<IconButton>
//                     <AddCard/>
//                 </IconButton>}
//                               anchor={"top"}
//                               overflow={"auto"}
//                               sx={{...StyleCustom.scrollNormal}}
//                 >
//                   <Stack justifyContent={"center"} alignItems={"center"} height={"100%"}>
//                       <Text> Create Product</Text>
//                       <CreateProductForm/>
//                   </Stack>
//
//                 </DrawerCustom>
//             </Stack>
//         }
//         case Route.admin.USER:{
//             return  <DrawerCustom renderButton={<IconButton>
//                         <PersonAddAltIcon/>
//                     </IconButton>} anchor={"top"} overflow={"auto"}  sx={{...StyleCustom.scrollNormal}}
//                     >
//                         <Stack height={"100%"} width={"100%"} justifyContent={"center"} alignItems={"center"}>
//                             <CreateUserForm/>
//                         </Stack>
//             </DrawerCustom>
//         }
//         default:{
//             return <></>
//         }
//     }
//
// };
//
// export default AdminHeaderHandler
// ;
