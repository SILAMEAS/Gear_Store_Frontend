import React from 'react';
import {CardMedia, Paper, Stack} from '@mui/material';
import {Waypoint} from 'react-waypoint';
import Grid from '@mui/material/Grid';
import {IFilterTableCustom} from "@components/TableCustom/components/types.ts";
import Text from "@components/text/Text.tsx";
import {StyleConstant} from "@components/TableCustom/constant/StyleConstant.tsx";

interface IGridTemplate<T extends Record<string, any>> {
    visibleRows: T[];
    setFilter: React.Dispatch<React.SetStateAction<IFilterTableCustom>>;
    filter: IFilterTableCustom;
    wayPointProcess: boolean;
}

const GridProduct = <T extends Record<string,any>>({
                          visibleRows,
                          setFilter,
                          filter,
                          wayPointProcess,
                      }: IGridTemplate<T>) => {
    const gotoNextPage = ({currentPosition}: Waypoint.CallbackArgs) => {
        if (currentPosition === 'inside') {
            setFilter({...filter, page: filter.page + 1});
        }
    };
    return (
        <Grid
            container
            height={{xs:'570px',sm:'700px',smd:'700px', md:'600px',lg:'auto'}}
            width={'100%'}
            sx={{overflow: "hidden",overflowY:"scroll", ...StyleConstant.scrollNormal}}
        >
            {visibleRows.map(item => (
                <Grid item key={item.id} xl={1.20} lg={1.5} md={3} sm={6} xs={9} >
                    <Stack>
                        <Paper
                            elevation={1}
                            sx={{
                                position: "relative",
                                p: {xs:"2px",sm:"16px"},
                            }}>
                            <Stack sx={{ backgroundColor: "#1e1e1e", color: "#fff"}} height={{xs: "120px",md:'350px'}} direction={{xs:'row',md:'column'}} alignItems={'center'} justifyContent={'space-between'}>
                                <CardMedia
                                    component="img"
                                    image={item?.image!==null?item.image: "https://resource.logitech.com/content/dam/gaming/en/products/astro-a50-x/product-gallery/astro-a50-x-black-gallery-1.png"}
                                    alt={item.name}
                                    sx={{
                                        objectFit:"contain",
                                        height:{md:200,xs:100},
                                        width:{md:'auto', xs:100}
                                    }}
                                />
                                <Stack width={'100%'} justifyContent={'center'}  height={'100%'}>
                                    <Text variant="h6" align="center">{item.name}</Text>
                                    <Text variant="subtitle2" align="center">{item.price}$  ➝</Text>
                                </Stack>
                            </Stack>
                        </Paper>
                        {wayPointProcess && <Waypoint onEnter={gotoNextPage} />}
                    </Stack>
                </Grid>
            ))}
        </Grid>
    );
};

export default GridProduct;