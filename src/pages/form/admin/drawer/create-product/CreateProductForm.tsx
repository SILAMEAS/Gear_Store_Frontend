import {Controller, useForm} from "react-hook-form"
import {Box, FormControl, InputLabel, MenuItem, Select, Stack, TextField,} from "@mui/material"
import {enqueueSnackbar} from "notistack";
import {DefaultProductFormData, ProductFormData, ResProduct} from "@redux/services/types/ProductInterface.tsx";
import {useCreateProductsMutation, useUpdateProductsMutation} from "@redux/services/productApi.ts";
import {useGetCategoriesQuery} from "@redux/services/adminApi.ts";
import {$handleResponseMessage} from "@utils/common/$handleResponseMessage.ts";
import {FormID} from "@pages/form/FormID.tsx";
import {ImageDropzone} from "@components/drop-zone/ImageDropzone.tsx";
import {useEffect} from "react";
import {StyleConstant} from "@components/TableCustom/constant/StyleConstant.tsx";


const CreateProductForm= ({data}:{data?: ResProduct}) => {
    const [addProduct]=useCreateProductsMutation();
    const [updateProduct]=useUpdateProductsMutation()
    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue,
        watch
    } = useForm<ProductFormData>({
        defaultValues: DefaultProductFormData
    })
    useEffect(()=>{
        if(data){
            setValue("name",data.name);
            setValue("category",data.category);
            setValue("price",data.price);
            setValue("stock",data.stock);
            setValue("description",data.description);

        }
    },[data])
    const {currentData:currentDataCategories}=useGetCategoriesQuery({});
    const onSubmit = async (dataSubmit: ProductFormData) => {
        try {
            const formData = new FormData();

            /** Append all other fields using a single loop */
            Object.entries(dataSubmit).forEach(([key, value]) => {
                if(value){
                    return formData.append(key, value);
                }
            });
            /** handle action update or create */
            if(data?.id){
                await updateProduct({id:data?.id, body:formData}).unwrap();
                return  enqueueSnackbar("Product updated successfully!", { variant: "success" });
            }else {
                await addProduct({body:formData}).unwrap();
                return  enqueueSnackbar("Product created successfully!", { variant: "success" });
            }

        } catch (e) {
            enqueueSnackbar(
                $handleResponseMessage({ e }),
                { variant: "error" }
            );
        }
    };
    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate id={FormID[data?.id? "#update-product":"#create-product"]} overflow={"hidden"} sx={{...StyleConstant.scrollNormal}}>
            <Stack justifyContent={"center"} alignItems={"center"} mb={2} >
                {
                    data?.image && !watch("image")&&
                    <img src={`${data.image}`} alt={`${data.image}`} width={"150px"}
                         style={{borderRadius: 8, objectFit: "cover"}}/>
                }
            </Stack>
            <Stack>
                <Stack direction={"row"} gap={2}>
                    <Controller
                        name="name"
                        control={control}
                        rules={{required: "Product name is required"}}
                        render={({field}) => (
                            <TextField
                                {...field}
                                margin="normal"
                                fullWidth
                                id="product"
                                label="Product Name"
                                error={!!errors.name}
                                helperText={errors.name?.message}
                            />
                        )}
                    />
                    <Controller
                        name="category"
                        control={control}
                        rules={{required: "category is required"}}
                        defaultValue={data?.id}
                        render={({field}) => (
                            <FormControl fullWidth margin="normal">
                                <InputLabel id="category-label">category</InputLabel>
                                <Select {...field} labelId="role-label" id="category" label="Category"
                                        error={!!errors.category}>
                                    {
                                        currentDataCategories?.contents?.map(item =>
                                            <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>
                                        )
                                    }
                                </Select>
                            </FormControl>
                        )}
                    />
                </Stack>

                <Stack direction={"row"} gap={2}>
                    <Controller
                        name="price"
                        control={control}
                        rules={{required: "Price is required"}}
                        render={({field}) => (
                            <TextField
                                {...field}
                                margin="normal"
                                fullWidth
                                id="price"
                                label="Price"
                                error={!!errors.price}
                                helperText={errors.price?.message}
                            />
                        )}
                    />

                    <Controller
                        name="stock"
                        control={control}
                        rules={{required: "stock is required"}}
                        render={({field}) => (
                            <TextField
                                {...field}
                                margin="normal"
                                fullWidth
                                id="stock"
                                label="Stock"
                                error={!!errors.stock}
                                helperText={errors.stock?.message}
                            />
                        )}
                    />
                </Stack>
            </Stack>

            <Controller
                name="description"
                control={control}
                rules={{required: "description is required"}}
                render={({field}) => (
                    <TextField
                        {...field}
                        rows={5}
                        multiline
                        margin="normal"
                        fullWidth
                        id="description"
                        label="description"
                        error={!!errors.description}
                        helperText={errors.description?.message}
                    />
                )}
            />
            <Controller
                name="image"
                control={control}
                render={({field: {onChange, value}}) => (
                    <Box sx={{mt: 2, mb: 2}}>
                        <ImageDropzone onChange={onChange} value={value}/>
                    </Box>
                )}
            />

        </Box>
    )
}

export default CreateProductForm

