import {Avatar, Box, Button, Grid, Paper, Typography} from "@mui/material"
import {ResUser} from "../../../../redux/services/types/IUserApi.ts";
import {useForm} from 'react-hook-form';
import EditIcon from "@mui/icons-material/Edit";
import {ReactNode, useState} from "react";
import {ImageDropzone} from "../../../../components/drop-zone/ImageDropzone.tsx";

type InfoRowProps = {
    label: string
    value: ReactNode
}

const InfoRow = ({ label, value }: InfoRowProps) => (
    <Box sx={{ mb: 2 }}>
        <Typography variant="caption" color="text.secondary" display="block">
            {label}
        </Typography>
        {value}
    </Box>
)

export default function ProfileSetting({ userDetail }: { userDetail: ResUser }) {
    const { register, handleSubmit } = useForm({
        defaultValues: {
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

    const onSubmit = (data: any) => {
        // Handle form submission
        const formData = new FormData();
        if (profileImage) {
            formData.append('profile_image', profileImage); // Append the profile image file
        }
        // Append other form data
        formData.append('first_name', data.first_name);
        formData.append('last_name', data.last_name);
        formData.append('dob', data.dob);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('role', data.role);
        formData.append('country', data.country);
        formData.append('city', data.city);
        formData.append('postal_code', data.postal_code);

        // Log FormData content
        for (const [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
        }
        // You can send formData to your API here
    };

    return (
        <Box sx={{ width: "100%", p: 3, height: "100%" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Paper
                    elevation={0}
                    sx={{
                        p: 3,
                        mb: 3,
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        position: "relative",
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

                <ImageDropzone
                    onChange={setProfileImage} // Update the profileImage state with the selected file
                    value={profileImage} // Pass the current image value
                />

                <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <InfoRow label="First Name" value={<input {...register('first_name')} />} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <InfoRow label="Last Name" value={<input {...register('last_name')} />} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <InfoRow label="Date of Birth" value={<input {...register('dob')} />} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <InfoRow label="Email Address" value={<input {...register('email')} />} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <InfoRow label="Phone Number" value={<input {...register('phone')} />} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <InfoRow label="User Role" value={<input {...register('role')} />} />
                        </Grid>
                    </Grid>
                </Paper>

                <Paper elevation={0} sx={{ p: 3 }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <InfoRow label="Country" value={<input {...register('country')} />} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <InfoRow label="City" value={<input {...register('city')} />} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <InfoRow label="Postal Code" value={<input {...register('postal_code')} />} />
                        </Grid>
                    </Grid>
                </Paper>
                <Button type="submit" startIcon={<EditIcon />} fullWidth sx={{mt:"40px"}}>Update User</Button>
            </form>
        </Box>
    );
}