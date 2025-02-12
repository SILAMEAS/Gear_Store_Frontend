import React, {useState} from "react"
import {
    Box,
    Button,
    Card,
    CardContent,
    IconButton,
    Rating,
    Stack,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
} from "@mui/material"
import {FavoriteBorder, ShoppingCart} from "@mui/icons-material"
import {ProductImage} from "./ProductImage.tsx";
import {ThumbnailImage} from "./ThumbnailImage.tsx";
import {ColorButton} from "./ColorButton.tsx";
import {useParams} from "react-router-dom";
import {useGetProductsByIdQuery} from "../../../../../redux/services/productApi.ts";

export default function ProductCard() {
    const params=useParams();
    const {currentData,isLoading}=useGetProductsByIdQuery({id:Number(params.id)},{skip:!params.id})
    const [selectedSize, setSelectedSize] = useState<string>("")

    const sizes = ["7", "8", "9", "10", "11"]
    const colors = ["#2196f3", "#4caf50", "#e91e63", "#ff5722", "#ffd700"]

    const handleSizeChange = (_event: React.MouseEvent<HTMLElement>, newSize: string) => {
        setSelectedSize(newSize)
    }
   if(isLoading||!currentData){
       return  <>loading ...</>
   }
    return (
        <Card
            sx={{
                maxWidth: 1000,
                position: "relative",
                overflow: "visible",
                "&::before": {
                    content: "\"\"",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: "40%",
                    bottom: 0,
                    background: "#ffd700",
                    transform: "skewX(-20deg)",
                    transformOrigin: "top",
                    zIndex: 0
                },
            }}
        >
            <CardContent sx={{ position: "relative", zIndex: 1 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                    <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gFcFVcHpe9wUYSZhN9kzMwAVaZEmul.png"
                        alt="Under Armour Logo"
                        style={{ width: "40px", height: "auto" }}
                    />
                </Box>

                <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                    <Box sx={{ flex: "1 1 400px" }}>
                        <ProductImage
                            src={`${currentData?.image??"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gFcFVcHpe9wUYSZhN9kzMwAVaZEmul.png"}`}
                            alt={`${currentData?.image??"UA Curry 3"}`}
                        />
                        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                            {[1, 2, 3, 4, 5].map((i) => (
                                <ThumbnailImage
                                    key={i}
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gFcFVcHpe9wUYSZhN9kzMwAVaZEmul.png"
                                    alt={`View ${i}`}
                                />
                            ))}
                        </Stack>
                    </Box>

                    <Box sx={{ flex: "1 1 400px" }}>
                        <Typography variant="h4" component="h1" gutterBottom>
                            {currentData.name}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            {currentData.description}
                        </Typography>

                        <Rating value={4} readOnly sx={{ mb: 2 }} />

                        <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                            INFINITE SUPPORT. TOTAL CONTROL.
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                            Threadborne™ upper delivers lightweight directional strength to support the game's most brilliant player.
                        </Typography>

                        <Stack direction="row" sx={{ mb: 3 }}>
                            {colors.map((color) => (
                                <ColorButton key={color} color={color as any} variant="contained" />
                            ))}
                        </Stack>

                        <Typography variant="subtitle1" gutterBottom>
                            Select Size
                        </Typography>
                        <ToggleButtonGroup value={selectedSize} exclusive onChange={handleSizeChange} sx={{ mb: 3 }}>
                            {sizes.map((size) => (
                                <ToggleButton key={size} value={size}>
                                    {size}
                                </ToggleButton>
                            ))}
                        </ToggleButtonGroup>

                        <Typography variant="h4" gutterBottom>
                            $ {currentData.price}
                        </Typography>

                        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    flex: 1,
                                    bgcolor: "#ff5722",
                                    "&:hover": {
                                        bgcolor: "#f4511e",
                                    },
                                }}
                            >
                                BUY
                            </Button>
                            <IconButton>
                                <FavoriteBorder />
                            </IconButton>
                            <IconButton>
                                <ShoppingCart />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}
