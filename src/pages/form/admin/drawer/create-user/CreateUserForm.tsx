import React from "react"
import {Controller, useForm} from "react-hook-form"
import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    IconButton,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    Switch,
    TextField,
} from "@mui/material"
import {Visibility, VisibilityOff} from "@mui/icons-material"
import {useAddUserMutation} from "../../../../../redux/services/adminApi.ts";
import {EnumRole, UserFormData} from "../../../../../redux/services/types/IUserApi.ts";
import {ImageDropzone} from "../../../../../components/drop-zone/ImageDropzone.tsx";
import {enqueueSnackbar} from "notistack";
import {$handleResponseMessage} from "../../../../../utils/common/$handleResponseMessage.ts";


const CreateUserForm: React.FC = () => {
    const [addUser]=useAddUserMutation({})
    const {
        control,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm<UserFormData>({
        defaultValues: {
            username: "",
            email: "",
            first_name: "",
            last_name: "",
            is_active: true,
            profile_image:null,
            role: EnumRole.USER,
            phone: "",
            dob: "",
            country: "",
            city: "",
            postal_code: "",
            password: "",
            confirmPassword: "",
        },
    })
    const [showPassword, setShowPassword] = React.useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)

    const onSubmit = async (data: UserFormData) => {
        try {
            const formData = new FormData();

            // Object containing all fields except profile_image
            const fields = {
                email: data.email,
                password: data.password,
                username: data.username,
                phone: data.phone,
                role: data.role,
                country: data.country,
                city: data.city,
                postal_code: data.postal_code,
                dob: data.dob,
                first_name: data.first_name,
                last_name: data.last_name,
                is_active: String(data.is_active), // Convert boolean to string
            };

            // Append profile image if it exists
            if (data.profile_image) {
                formData.append("profile_image", data.profile_image);
            }

            // Append all other fields using a single loop
            Object.entries(fields).forEach(([key, value]) => {
                formData.append(key, value);
            });

            await addUser(formData).unwrap();
            enqueueSnackbar("User created successfully!", { variant: "success" });
        } catch (e) {
            enqueueSnackbar(
                $handleResponseMessage({ e }),
                { variant: "error" }
            );
        }
    };
    const password = watch("password")
    const handleClickShowPassword = () => setShowPassword((show) => !show)
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show)

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate >
            <Stack>
               <Stack direction={"row"} gap={2}>
                   <Controller
                       name="username"
                       control={control}
                       rules={{ required: "Username is required" }}
                       render={({ field }) => (
                           <TextField
                               {...field}
                               margin="normal"
                               fullWidth
                               id="username"
                               label="Username"
                               error={!!errors.username}
                               helperText={errors.username?.message}
                           />
                       )}
                   />

                   <Controller
                       name="email"
                       control={control}
                       rules={{ required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } }}
                       render={({ field }) => (
                           <TextField
                               {...field}
                               margin="normal"
                               fullWidth
                               id="email"
                               label="Email"
                               type="email"
                               error={!!errors.email}
                               helperText={errors.email?.message}
                           />
                       )}
                   />
               </Stack>

                <Stack direction={"row"} gap={2}>
                    <Controller
                        name="first_name"
                        control={control}
                        rules={{ required: "First name is required" }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                margin="normal"
                                fullWidth
                                id="first_name"
                                label="First Name"
                                error={!!errors.first_name}
                                helperText={errors.first_name?.message}
                            />
                        )}
                    />

                    <Controller
                        name="last_name"
                        control={control}
                        rules={{ required: "Last name is required" }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                margin="normal"
                                fullWidth
                                id="last_name"
                                label="Last Name"
                                error={!!errors.last_name}
                                helperText={errors.last_name?.message}
                            />
                        )}
                    />
                </Stack>
            </Stack>


            <Controller
                name="profile_image"
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Box sx={{ mt: 2, mb: 2 }}>
                        <ImageDropzone onChange={onChange} value={value} />
                    </Box>
                )}
            />
            <Controller
                name="is_active"
                control={control}
                render={({ field }) => (
                    <FormControlLabel control={<Switch {...field} checked={field.value} />} label="Is Active" />
                )}
            />
           <Stack>
               <Stack direction={"row"} gap={2}>
                   <Controller
                       name="role"
                       control={control}
                       rules={{ required: "Role is required" }}
                       render={({ field }) => (
                           <FormControl fullWidth margin="normal">
                               <InputLabel id="role-label">Role</InputLabel>
                               <Select {...field} labelId="role-label" id="role" label="Role" error={!!errors.role}>
                                   <MenuItem value="user">User</MenuItem>
                                   <MenuItem value="admin">Admin</MenuItem>
                                   <MenuItem value="moderator">Moderator</MenuItem>
                               </Select>
                           </FormControl>
                       )}
                   />

                   <Controller
                       name="phone"
                       control={control}
                       render={({ field }) => <TextField {...field} margin="normal" fullWidth id="phone" label="Phone" />}
                   />

                   <Controller
                       name="dob"
                       control={control}
                       rules={{ required: "Date of Birth is required" }}
                       render={({ field }) => (
                           <TextField
                               {...field}
                               margin="normal"
                               fullWidth
                               id="dob"
                               label="Date of Birth"
                               type="date"
                               InputLabelProps={{
                                   shrink: true,
                               }}
                               error={!!errors.dob}
                               helperText={errors.dob?.message}
                           />
                       )}
                   />
               </Stack>
               <Stack direction={"row"} gap={2}>
                   <Controller
                       name="country"
                       control={control}
                       render={({ field }) => <TextField {...field} margin="normal" fullWidth id="country" label="Country" />}
                   />

                   <Controller
                       name="city"
                       control={control}
                       render={({ field }) => <TextField {...field} margin="normal" fullWidth id="city" label="City" />}
                   />

                   <Controller
                       name="postal_code"
                       control={control}
                       render={({ field }) => <TextField {...field} margin="normal" fullWidth id="postal_code" label="Postal Code" />}
                   />

               </Stack>
               <Stack direction={"row"} gap={2}>
                   <Controller
                       name="password"
                       control={control}
                       rules={{
                           required: "Password is required",
                           minLength: {
                               value: 8,
                               message: "Password must be at least 8 characters long",
                           },
                           pattern: {
                               value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
                               message:
                                   "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character (@$!%*?&#)",
                           },
                       }}
                       render={({ field }) => (
                           <TextField
                               {...field}
                               margin="normal"
                               fullWidth
                               id="password"
                               label="Password"
                               type={showPassword ? "text" : "password"}
                               error={!!errors.password}
                               helperText={errors.password?.message}
                               InputProps={{
                                   endAdornment: (
                                       <InputAdornment position="end">
                                           <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end">
                                               {showPassword ? <VisibilityOff /> : <Visibility />}
                                           </IconButton>
                                       </InputAdornment>
                                   ),
                               }}
                           />
                       )}
                   />

                   <Controller
                       name="confirmPassword"
                       control={control}
                       rules={{
                           required: "Please confirm your password",
                           validate: (value) => value === password || "The passwords do not match",
                       }}
                       render={({ field }) => (
                           <TextField
                               {...field}
                               margin="normal"
                               fullWidth
                               id="confirmPassword"
                               label="Confirm Password"
                               type={showConfirmPassword ? "text" : "password"}
                               error={!!errors.confirmPassword}
                               helperText={errors.confirmPassword?.message}
                               InputProps={{
                                   endAdornment: (
                                       <InputAdornment position="end">
                                           <IconButton
                                               aria-label="toggle password visibility"
                                               onClick={handleClickShowConfirmPassword}
                                               edge="end"
                                           >
                                               {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                           </IconButton>
                                       </InputAdornment>
                                   ),
                               }}
                           />
                       )}
                   />
               </Stack>
           </Stack>


            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Create User
            </Button>
        </Box>
    )
}

export default CreateUserForm

