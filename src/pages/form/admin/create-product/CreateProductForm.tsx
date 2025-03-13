import React from "react"
import {Controller, useForm} from "react-hook-form"
import {Box, Button, Stack, TextField,} from "@mui/material"
import {ImageDropzone} from "../../../../components/drop-zone/ImageDropzone.tsx";
import {DefaultProductFormData, ProductFormData} from "../../../../redux/services/types/ProductInterface.tsx";


const CreateProductForm: React.FC = () => {
    // const [addUser]=useAddUserMutation({})
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ProductFormData>({
        defaultValues: DefaultProductFormData
    })
    const onSubmit =async (data: ProductFormData) => {
        console.log("SUBMIT",data)
        try {
            // const formData = new FormData();
            // await addUser(formData).unwrap();
        }catch (e:any){
            console.error(e.data)
        }
    }
    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Stack>
               <Stack direction={"row"} gap={2}>
                   <Controller
                       name="name"
                       control={control}
                       rules={{ required: "Username is required" }}
                       render={({ field }) => (
                           <TextField
                               {...field}
                               margin="normal"
                               fullWidth
                               id="username"
                               label="Username"
                               error={!!errors.name}
                               helperText={errors.name?.message}
                           />
                       )}
                   />

                   <Controller
                       name="category"
                       control={control}
                       rules={{ required: "Category is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } }}
                       render={({ field }) => (
                           <TextField
                               {...field}
                               margin="normal"
                               fullWidth
                               id="category"
                               label="category"
                               error={!!errors.category}
                               helperText={errors.category?.message}
                           />
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
                    <Controller
                        name="description"
                        control={control}
                        rules={{ required: "description is required" }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                margin="normal"
                                fullWidth
                                id="description"
                                label="description"
                                error={!!errors.description}
                                helperText={errors.description?.message}
                            />
                        )}
                    />
                </Stack>
            </Stack>


            <Controller
                name="image"
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Box sx={{ mt: 2, mb: 2 }}>
                        <ImageDropzone onChange={onChange} value={value} />
                    </Box>
                )}
            />

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Create Product
            </Button>
        </Box>
    )
}

export default CreateProductForm

