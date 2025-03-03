import {Box, Button} from "@mui/material"
import {NoAccounts} from "@mui/icons-material";
import Typography from "@mui/material/Typography";


interface ContinueAsGuestProps {
    onClick?: () => void
}

export default function ButtonContinueAsGuest({ onClick }: ContinueAsGuestProps) {
    return (
        <Box display="flex" justifyContent="center" p={2}>
            <Button onClick={onClick} variant="outlined">
                <NoAccounts sx={{mr:"5px",color:"primary.main"}}/>
                <Typography variant={"body1"} color={'primary'}>Continue as guest</Typography>
            </Button>
        </Box>
    )
}

