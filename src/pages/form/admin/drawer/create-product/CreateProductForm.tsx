import React from "react"
import {Controller, useForm} from "react-hook-form"
import {Box, FormControl, InputLabel, MenuItem, Select, Stack, TextField,} from "@mui/material"
import {enqueueSnackbar} from "notistack";
import {DefaultProductFormData, ProductFormData} from "@redux/services/types/ProductInterface.tsx";
import {useCreateProductsMutation} from "@redux/services/productApi.ts";
import {useGetCategoriesQuery} from "@redux/services/adminApi.ts";
import {$handleResponseMessage} from "@utils/common/$handleResponseMessage.ts";
import {FormID} from "@pages/form/FormID.tsx";
import {ImageDropzone} from "@components/drop-zone/ImageDropzone.tsx";


const CreateProductForm: React.FC = ({data}:{data?: ProductFormData}) => {
    const [addProduct]=useCreateProductsMutation();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ProductFormData>({
        defaultValues: data || DefaultProductFormData
    })
    const {currentData:currentDataCategories}=useGetCategoriesQuery({});
    const onSubmit = async (data: ProductFormData) => {
        try {
            const formData = new FormData();


            // Append all other fields using a single loop
            Object.entries(data).forEach(([key, value]) => {
                formData.append(key, value);
            });

            await addProduct({body:formData}).unwrap();
            enqueueSnackbar("User created successfully!", { variant: "success" });
        } catch (e) {
            enqueueSnackbar(
                $handleResponseMessage({ e }),
                { variant: "error" }
            );
        }
    };
    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate id={FormID["#create-product"]}>
            <Stack>
               <Stack direction={"row"} gap={2}>
                   <Controller
                       name="name"
                       control={control}
                       rules={{ required: "Product name is required" }}
                       render={({ field }) => (
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
                       rules={{ required: "category is required" }}
                       render={({ field }) => (
                           <FormControl fullWidth margin="normal">
                               <InputLabel id="category-label">category</InputLabel>
                               <Select {...field} labelId="role-label" id="category" label="Category" error={!!errors.category}>
                                   {
                                       currentDataCategories?.contents?.map(item=>
                                           <MenuItem value={item.id} key={item.id} >{item.name}</MenuItem>
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
                        rules={{ required: "Price is required" }}
                        render={({ field }) => (
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
                        rules={{ required: "stock is required" }}
                        render={({ field }) => (
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
                rules={{ required: "description is required" }}
                render={({ field }) => (
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
                render={({ field: { onChange, value } }) => (
                    <Box sx={{ mt: 2, mb: 2 }}>
                        <ImageDropzone onChange={onChange} value={value} />
                    </Box>
                )}
            />
            
        </Box>
    )
}

export default CreateProductForm

