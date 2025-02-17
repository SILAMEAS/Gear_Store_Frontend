import {Box, Card, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ReplayIcon from "@mui/icons-material/Replay";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import BackGroundCart from "../../assets/BackGroundCart.jpg"

const benefits = [
    { icon: <LocalShippingIcon />, title: "Free Shipping", description: "Free Shipping to Make Your Shopping Experience Seamless." },
    { icon: <ReplayIcon />, title: "Return Policy", description: "Flexible Returns to Ensure a Positive Shopping Experience." },
    { icon: <AttachMoneyIcon />, title: "Save Money", description: "Shop Smarter and Save Big with Our Money-Saving Solutions." },
    { icon: <HeadsetMicIcon />, title: "Support 24/7", description: "Unparalleled Support, Tailored to Your Needs 24 Hours a Day." }
];

const categories = [
    { title: "Keyboards Gaming", image: "/images/keyboard.jpg" },
    { title: "Gaming Mouse", image: "/images/mouse.jpg" },
    { title: "Headphones", image: "/images/headphones.jpg" },
    { title: "Gaming Controllers", image: "/images/controller.jpg" }
];

const UserHome = () => {
    return   <Box sx={{backgroundImage:BackGroundCart, color: "#fff", py: 5 }}>
        <Container>
            <Grid container spacing={3} justifyContent="center">
                {benefits.map((benefit, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index} textAlign="center">
                        <Box sx={{ mb: 2 }}>{benefit.icon}</Box>
                        <Typography variant="h6">{benefit.title}</Typography>
                        <Typography variant="body2">{benefit.description}</Typography>
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h4" align="center" sx={{ mt: 5, mb: 3 }}>
                SHOP BY CATEGORIES
            </Typography>

            <Grid container spacing={3} justifyContent="center">
                {categories.map((category, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card sx={{ backgroundColor: "#1e1e1e", color: "#fff" }}>
                            <CardMedia component="img" height="200" image={category.image} alt={category.title} />
                            <CardContent>
                                <Typography variant="h6" align="center">{category.title}</Typography>
                                <Typography variant="body2" align="center" color="#aaa">
                                    Shop Now ➝
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    </Box>
}

export default UserHome;