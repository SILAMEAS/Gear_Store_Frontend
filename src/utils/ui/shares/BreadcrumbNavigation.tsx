import {Box, Breadcrumbs} from "@mui/material";
import Text from "@components/text/Text.tsx";

{/* Breadcrumb navigation */}
const BreadcrumbNavigation=()=>{
 return <Box sx={{ mb: 2 }}>
     <Breadcrumbs aria-label="breadcrumb">
         <Text color="text.secondary">YOU ARE HERE</Text>
         <Text color="text.primary">Colors</Text>
     </Breadcrumbs>
 </Box>
}


export default BreadcrumbNavigation