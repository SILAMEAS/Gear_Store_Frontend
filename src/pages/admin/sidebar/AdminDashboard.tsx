import {Box, Grid, Stack} from "@mui/material";
import MetricCard from "./dashboard/MetricCard.tsx";
import SalesChart from "./dashboard/SalesChart.tsx";
import TopProducts from "./dashboard/TopProducts.tsx";
import RecentOrders from "./dashboard/RecentOrders.tsx";
import {useGetDashboardQuery} from "../../../redux/services/adminApi.ts";
import MainLoading from "../../../components/loading/MainLoading.tsx";
import {EnumICard} from "../../../redux/services/types/IAdminApi.ts";
import {RenderIcon} from "../../../components/TableCustom/constant/Constants.tsx";

const AdminDashboard = () => {
  const {currentData,isLoading} = useGetDashboardQuery({});
  if(isLoading||!currentData){
    return <MainLoading/>
  }
  return   <Box component="main" sx={{ p:10, minHeight: "100%" }}>
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
                    color="primary.main"
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
};

export default AdminDashboard;
