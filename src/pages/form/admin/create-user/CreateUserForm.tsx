import React, {useCallback} from "react"
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
    Paper,
    Select,
    Stack,
    Switch,
    TextField,
    Typography,
} from "@mui/material"
import {Visibility, VisibilityOff} from "@mui/icons-material"
import {useDropzone} from "react-dropzone"
import {useAddUserMutation} from "../../../../redux/services/adminApi.ts";
import {EnumRole, UserFormData} from "../../../../redux/services/types/IUserApi.ts";


const ImageDropzone: React.FC<{
    onChange: (file: File | null) => void
    value: File | null
}> = ({ onChange, value }) => {
    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            if (acceptedFiles.length > 0) {
                onChange(acceptedFiles[0])
            }
        },
        [onChange],
    )

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { "image/*": [] },
        multiple: false,
    })

    return (
        <Paper
            {...getRootProps()}
            sx={{
                p: 2,
                border: "2px dashed",
                borderColor: isDragActive ? "primary.main" : "grey.300",
                bgcolor: isDragActive ? "action.hover" : "background.paper",
                cursor: "pointer",
                textAlign: "center",
            }}
        >
            <input {...getInputProps()} />
            {value ? (
                <Box>
                    <img
                        src={URL.createObjectURL(value) || "/placeholder.svg"}
                        alt="Profile preview"
                        style={{ maxWidth: "100%", maxHeight: "200px", objectFit: "contain" }}
                    />
                    <Typography variant="caption" display="block">
                        {value.name}
                    </Typography>
                </Box>
            ) : (
                <Typography>
                    {isDragActive ? "Drop the image here..." : "Drag & drop a profile image here, or click to select one"}
                </Typography>
            )}
        </Paper>
    )
}

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

    const onSubmit =async (data: UserFormData) => {
        try {
            console.log(data)
            await addUser({...data,password:data.password}).unwrap();

        }catch (e:any){
            console.error(e.data)
        }
    }
    const password = watch("password")
    const handleClickShowPassword = () => setShowPassword((show) => !show)
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show)

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Stack>
               <Stack direction={'row'} gap={2}>
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

                <Stack direction={'row'} gap={2}>
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
               <Stack direction={'row'} gap={2}>
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
               <Stack direction={'row'} gap={2}>
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
               <Stack direction={'row'} gap={2}>
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

