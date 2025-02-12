import {Card, CardActionArea, CardContent, CardMedia, Link, Typography} from "@mui/material";
import {IProductResponse} from "../../../../../redux/services/types/ProductInterface.tsx";
const Product = (props: IProductResponse) => {
    return (
        <Link href={`/products/${props.id}`}>
            <Card sx={{minWidth:250, maxWidth: 350, m: 0, cursor: "pointer" }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        image={props?.image??""}
                        alt={props.name}
                    />
                    <CardContent>
                        <Typography variant="h6" component="div">
                            {props?.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.description}
                        </Typography>
                        <Typography variant="h6" color="primary">
                            ${props?.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
};


export default Product;