import {AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, Stack} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import useGetLocalStorage from "../../utils/hooks/useGetLocalStorage.tsx";
import {useNavigate} from "react-router-dom";
const HomeUser = () => {
    const {access}=useGetLocalStorage();
    const navigate= useNavigate()
    if(!access){
        return <Stack>
            <Typography> Please login to access this page</Typography>
            <Button onClick={()=>navigate("/login")}>Login</Button>
        </Stack>
    }
    return (
        <div>
            <AppBar position="static" sx={{background: "#0d0d0d"}}>
                <Toolbar>
                    <Typography variant="h6" sx={{flexGrow: 1, fontWeight: "bold"}}>
                        Gearnix
                    </Typography>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Shop</Button>
                    <Button color="inherit">Product</Button>
                    <Button color="inherit">Blog</Button>
                </Toolbar>
            </AppBar>

            <Container sx={{textAlign: "center", py: 5, color: "white", backgroundColor: "#121212"}}>
                <Typography variant="h3" fontWeight="bold" gutterBottom>
                    Elevate Your Experience With Top-Tier Gaming Gear
                </Typography>
                <Typography variant="h6" color="gray" gutterBottom>
                    Discover the Cutting-Edge Gear That Will Revolutionize Your Gaming Journey
                </Typography>
                <Button variant="contained" color="secondary" size="large" sx={{mt: 2}}>
                    Purchase Now
                </Button>
            </Container>

            <Container sx={{py: 5, backgroundColor: "#1a1a1a", color: "white"}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{backgroundColor: "#252525", textAlign: "center"}}>
                            <CardContent>
                                <LocalShippingIcon sx={{fontSize: 50, color: "#f50057"}}/>
                                <Typography variant="h6">Free Shipping</Typography>
                                <Typography variant="body2">Free Shipping to Make Your Shopping Experience
                                    Seamless.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{backgroundColor: "#252525", textAlign: "center"}}>
                            <CardContent>
                                <ShoppingCartIcon sx={{fontSize: 50, color: "#f50057"}}/>
                                <Typography variant="h6">Return Policy</Typography>
                                <Typography variant="body2">Flexible Returns to Ensure a Positive Shopping
                                    Experience.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{backgroundColor: "#252525", textAlign: "center"}}>
                            <CardContent>
                                <MonetizationOnIcon sx={{fontSize: 50, color: "#f50057"}}/>
                                <Typography variant="h6">Save Money</Typography>
                                <Typography variant="body2">Shop Smarter and Save Big with Our Money-Saving
                                    Solutions.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{backgroundColor: "#252525", textAlign: "center"}}>
                            <CardContent>
                                <SupportAgentIcon sx={{fontSize: 50, color: "#f50057"}}/>
                                <Typography variant="h6">Support 24/7</Typography>
                                <Typography variant="body2">Unparalleled Support, Tailored to Your Needs 24 Hours a
                                    Day.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default HomeUser;
