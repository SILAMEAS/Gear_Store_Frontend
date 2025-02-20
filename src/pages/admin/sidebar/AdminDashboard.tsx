import {ThemeProvider} from "@mui/material/styles";
import {theme} from "./dashboard/theme.ts";
import {Box, CssBaseline, Grid, Stack} from "@mui/material";
import MetricCard from "./dashboard/MetricCard.tsx";
import {AttachMoney, LocalShipping, People, ShoppingCart} from "@mui/icons-material";
import SalesChart from "./dashboard/SalesChart.tsx";
import TopProducts from "./dashboard/TopProducts.tsx";
import RecentOrders from "./dashboard/RecentOrders.tsx";

const AdminDashboard = () => {
  return  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box component="main" sx={{ p:10, bgcolor: "background.default", minHeight: "100vh" }}>
      <Stack height={"100%"}>
        <Grid container spacing={3}>
          {/* Metric Cards */}
          <Grid item xs={12} sm={6} md={3}>
            <MetricCard
                title="Total Sales"
                value="$54,598"
                icon={<ShoppingCart />}
                trend={12.5}
                trendLabel="vs last month"
                color="#90caf9"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MetricCard
                title="Active Orders"
                value="126"
                icon={<LocalShipping />}
                trend={-2.3}
                trendLabel="vs last month"
                color="#4caf50"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MetricCard
                title="Total Customers"
                value="2,457"
                icon={<People />}
                trend={8.4}
                trendLabel="vs last month"
                color="#ff9800"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MetricCard
                title="Revenue"
                value="$21,589"
                icon={<AttachMoney />}
                trend={4.7}
                trendLabel="vs last month"
                color="#f48fb1"
            />
          </Grid>

          {/* Charts and Tables */}
          <Grid item xs={12} lg={8}>
            <SalesChart />
          </Grid>
          <Grid item xs={12} lg={4}>
            <TopProducts />
          </Grid>
          <Grid item xs={12}>
            <RecentOrders />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  </ThemeProvider>
};

export default AdminDashboard;
