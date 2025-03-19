import {
    Avatar,
    Box,
    Button,
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Stack,
    TextField,
    Typography
} from "@mui/material"
import {ResUser} from "../../../../redux/services/types/IUserApi.ts";
import {Controller, useForm} from "react-hook-form";
import EditIcon from "@mui/icons-material/Edit";
import {ReactNode, useState} from "react";
import {ImageDropzone} from "../../../../components/drop-zone/ImageDropzone.tsx";
import Text from "../../../../components/text/Text.tsx";
import {useUpdateUserMutation} from "../../../../redux/services/adminApi.ts";
import {AntSwitch} from "../../../../components/switch/AntSwitch.tsx";

type InfoRowProps = {
    label: string
    value: ReactNode
}

const InfoRow = ({ label, value }: InfoRowProps) => (
    <Stack gap={1}>
        <Typography variant="caption" color="text.secondary" display="block">
            {label}
        </Typography>
        {value}
    </Stack>
)

export default function ProfileSetting({ userDetail }: { userDetail: ResUser }) {
    const [updateUser,updateUserResult]=useUpdateUserMutation({})
    const { register, handleSubmit,control,formState:{errors} } = useForm({
        defaultValues: {
            is_active:userDetail?.is_active,
            first_name: userDetail?.first_name,
            last_name: userDetail?.last_name,
            dob: userDetail?.dob,
            email: userDetail?.email,
            phone: userDetail?.phone,
            role: userDetail?.role,
            country: userDetail?.country,
            city: userDetail?.city,
            postal_code: userDetail?.postal_code,
        },
    });

    const [profileImage, setProfileImage] = useState<File | null>(null); // State to hold the uploaded image

    const onSubmit =async (data: any) => {
        // Handle form submission
        const formData = new FormData();
        if (profileImage) {
            formData.append("profile_image", profileImage); // Append the profile image file
        }
        // Append other form data
        formData.append("first_name", data.first_name);
        formData.append("last_name", data.last_name);
        formData.append("dob", data.dob);
        formData.append("email", data.email);
        formData.append("phone", data.phone);
        formData.append("role", data.role);
        formData.append("country", data.country);
        formData.append("city", data.city);
        formData.append("postal_code", data.postal_code);
        formData.append("is_active", data.is_active);

        // Log FormData content
        for (const [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
        }
        await updateUser({body: formData,userId:userDetail.id}).unwrap();
        // You can send formData to your API here
    };

    return (
        <Box sx={{ width: "100%", p: 3, height: "100%" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/** Header of Setting */}
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} height={"auto"}  >
                    {/** Left Side of Header */}
                    <Paper
                        elevation={0}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            position: "relative",
                            gap:2
                        }}
                    >
                        <Avatar
                            src={profileImage ? URL.createObjectURL(profileImage) : String(userDetail?.profile_image)}
                            sx={{ width: 80, height: 80 }}
                        />
                        <Box>
                            <Typography variant="h5">{`${userDetail?.first_name} ${userDetail?.last_name}`}</Typography>
                            <Typography color="text.secondary">{userDetail?.role}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {userDetail?.city}, {userDetail?.country}
                            </Typography>
                        </Box>
                    </Paper>
                    {/** Right Side of Header */}
                    <Stack minWidth={"200px"} >
                        <Controller
                            name="is_active"
                            control={control}
                            render={({ field }) => (
                                <FormControlLabel control={<AntSwitch {...field} checked={field.value}/>} label="Active" />
                            )}
                        />
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
                    </Stack>
                </Stack>

                {/**           Drop Zone             */}
                <ImageDropzone
                    onChange={setProfileImage} // Update the profileImage state with the selected file
                    value={profileImage} // Pass the current image value
                />

                <Paper elevation={0} >
                    {/** ===================================================== **/}
                    {/**                Layout of Grid                         **/}
                    {/** ===================================================== **/}
                    <Grid container spacing={4}>
                        {/** ===================================================== **/}
                        {/**                First Name                             **/}
                        {/** ===================================================== **/}
                        <Grid item xs={12} md={6} lg={4}>
                            <InfoRow label="First Name" value={<TextField {...register("first_name")} />} />
                        </Grid>
                        {/** ===================================================== **/}
                        {/**                Last Name                              **/}
                        {/** ===================================================== **/}
                        <Grid item xs={12} md={6} lg={4}>
                            <InfoRow label="Last Name" value={<TextField {...register("last_name")} />} />
                        </Grid>
                        {/** ===================================================== **/}
                        {/**                Date of brith                          **/}
                        {/** ===================================================== **/}
                        <Grid item xs={12} md={6} lg={4}>
                            <InfoRow label="Date of Birth" value={<TextField {...register("dob")} />} />
                        </Grid>
                        {/** ===================================================== **/}
                        {/**                Email                                  **/}
                        {/** ===================================================== **/}
                        <Grid item xs={12} md={6} lg={4}>
                            <InfoRow label="Email Address" value={<TextField {...register("email")} />} />
                        </Grid>
                        {/** ===================================================== **/}
                        {/**                Phone Number                           **/}
                        {/** ===================================================== **/}
                        <Grid item xs={12} md={6} lg={4}>
                            <InfoRow label="Phone Number" value={<TextField {...register("phone")} />} />
                        </Grid>
                        {/** ===================================================== **/}
                        {/**                User Role                              **/}
                        {/** ===================================================== **/}
                        <Grid item xs={12} md={6} lg={4}>
                            <InfoRow label="User Role" value={<TextField {...register("role")} />} />
                        </Grid>
                        {/** ===================================================== **/}
                        {/**                  Country                              **/}
                        {/** ===================================================== **/}
                        <Grid item xs={12} md={6} lg={4}>
                            <InfoRow label="Country" value={<TextField {...register("country")} />} />
                        </Grid>
                        {/** ===================================================== **/}
                        {/**                  City                                 **/}
                        {/** ===================================================== **/}
                        <Grid item xs={12} md={6} lg={4}>
                            <InfoRow label="City" value={<TextField {...register("city")} />} />
                        </Grid>
                        {/** ===================================================== **/}
                        {/**                Postal Code                            **/}
                        {/** ===================================================== **/}
                        <Grid item xs={12} md={6} lg={4}>
                            <InfoRow label="Postal Code" value={<TextField {...register("postal_code")} />} />
                        </Grid>
                    </Grid>
                </Paper>

                <Button type="submit" startIcon={<EditIcon sx={{color:"black.main"}}/>} fullWidth sx={{mt:"40px"}} variant={"contained"}>
                    <Text>
                        {
                            updateUserResult?.isLoading?"loading ...":"Update User"
                        }

                    </Text>
                   </Button>
            </form>
        </Box>
    );
}