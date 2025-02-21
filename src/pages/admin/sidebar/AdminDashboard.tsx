import {ThemeProvider} from "@mui/material/styles";
import {theme} from "./dashboard/theme.ts";
import {Box, CssBaseline, Grid, Stack} from "@mui/material";
import MetricCard from "./dashboard/MetricCard.tsx";
import {AttachMoney, LocalShipping, People, ShoppingCart, Category} from "@mui/icons-material";
import PaymentsIcon from "@mui/icons-material/Payments";
import SalesChart from "./dashboard/SalesChart.tsx";
import TopProducts from "./dashboard/TopProducts.tsx";
import RecentOrders from "./dashboard/RecentOrders.tsx";
import {useGetDashboardQuery} from "../../../redux/services/adminApi.ts";
import MainLoading from "../../../components/loading/MainLoading.tsx";
import {EnumICard} from "../../../redux/services/types/IAdminApi.ts";
const RenderIcon=({id}:{id:EnumICard})=>{
  console.log(id)
  switch (id){
    case EnumICard.total_sales:{
      return <AttachMoney/>
    }
    case EnumICard.total_customers:{
      return <People/>
    }
    case EnumICard.total_categories:{
      return <Category/>
    }
    case EnumICard.total_payment:{
      return <PaymentsIcon/>
    }
    case EnumICard.total_orders:{
      return <LocalShipping/>
    }
    case EnumICard.total_products:{
      return <ShoppingCart/>
    }
    default:{
      return <>D</>
    }
  }
}
const AdminDashboard = () => {
  const {currentData,isLoading} = useGetDashboardQuery({});
  if(isLoading||!currentData){
    return <MainLoading/>
  }
  return  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box component="main" sx={{ p:10, bgcolor: "background.default", minHeight: "100vh" }}>
      <Stack height={"100%"}>
        <Grid container spacing={3}>
          {/** Cards  **/}
          {
            currentData?.cards?.map(card=>
                <Grid item xs={12} sm={6} md={3} lg={4} key={card.id}>
                  <MetricCard
                      title={card.title}
                      value={`${card.value} ${card.id===EnumICard.total_sales?"$":""}`}
                      icon={<RenderIcon id={card.id}/>}
                      color="#90caf9"
                  />
                </Grid>

            )
          }
          {/** Charts of Sell **/}
          <Grid item xs={12} lg={8}>
            <SalesChart data={currentData?.sales_chart}/>
          </Grid>
          {/** Table Product Top Selling  **/}
          <Grid item xs={12} lg={4}>
            <TopProducts products={currentData?.top_selling_products} />
          </Grid>
          {/** Table Order Recently  **/}
          <Grid item xs={12}>
            <RecentOrders orders={currentData?.recent_orders_data}/>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  </ThemeProvider>
};

export default AdminDashboard;
