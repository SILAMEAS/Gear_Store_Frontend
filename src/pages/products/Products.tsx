import {useGetAllProductsQuery} from "../../services/productApi.ts";
import {GamingAccessoryCard, IGamingAccessory} from "../../components/Cart/GamingAccessoryCard.tsx";
import {Stack} from "@mui/material";

const Products = () => {
    const {currentData}=useGetAllProductsQuery({limit:10,page:1});
    if(currentData){
        console.log("currentData",currentData)
    }
    const exampleAccessory: IGamingAccessory = {
        image: "https://resource.logitech.com/content/dam/gaming/en/products/astro-a50-x/product-gallery/astro-a50-x-black-gallery-1.png",
        title: "Gaming Headset",
        description: "Immersive sound with noise cancellation.  A really long description to test the noWrap functionality.",
        price: 99.99,
        rating: 4.5,
        link: "https://www.example.com/gaming-headset"
    };
    return (
        <Stack justifyContent={'center'} alignItems={'center'} width={'100%'} direction={'row'} flexWrap={'wrap'} gap={'10px'}>
                {currentData?.contents?.map((item) => (
                    <Stack
                        key={item.id}
                        sx={{
                            width: "auto",
                            height: "400px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <GamingAccessoryCard {...exampleAccessory} title={item.name} description={item.description} price={Number(item.price)} image={item?.image!==null?item.image:exampleAccessory.image} addToCart={()=>{}}/>
                    </Stack>
                ))}
        </Stack>
    );
};

export default Products;
