import {Avatar, Box, Button, Grid, Paper, Typography} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import useRKTFromStore from "../../../../utils/hooks/useRTKFromStore.tsx";

type InfoRowProps = {
    label: string
    value: string
}

const InfoRow = ({ label, value }: InfoRowProps) => (
    <Box sx={{ mb: 2 }}>
        <Typography variant="caption" color="text.secondary" display="block">
            {label}
        </Typography>
        <Typography>{value}</Typography>
    </Box>
)

export default function ProfileSetting() {
    const {userDetail}=useRKTFromStore();
    if(!userDetail){
        return <>loading ... </>
    }

    return (
        <Box sx={{ width:"100%", p: 3 ,height:"100%"}}>
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
                    src={userDetail?.profile_image}
                    sx={{ width: 80, height: 80 }}
                />
                <Box>
                    <Typography variant="h5">{userDetail?.username}</Typography>
                    <Typography color="text.secondary">{userDetail?.role}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {userDetail?.city}, {userDetail?.country}
                    </Typography>
                </Box>
            </Paper>

            <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
                    <Typography variant="h6">Personal Information</Typography>
                    <Button startIcon={<EditIcon />}>Edit</Button>
                </Box>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <InfoRow label="First Name" value={userDetail?.first_name} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <InfoRow label="Last Name" value={userDetail?.last_name} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <InfoRow label="Date of Birth" value={userDetail?.dob}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <InfoRow label="Email Address"  value={userDetail?.email} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <InfoRow label="Phone Number" value={userDetail?.phone} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <InfoRow label="User Role" value={userDetail?.role} />
                    </Grid>
                </Grid>
            </Paper>

            <Paper elevation={0} sx={{ p: 3 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
                    <Typography variant="h6">Address</Typography>
                    <Button startIcon={<EditIcon />}>Edit</Button>
                </Box>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <InfoRow label="Country" value={userDetail?.country} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <InfoRow label="City" value={userDetail?.city} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <InfoRow label="Postal Code" value={userDetail?.postal_code} />
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}

