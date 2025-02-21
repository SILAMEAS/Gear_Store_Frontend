import {Box, Button} from "@mui/material"
import {styled} from "@mui/material/styles"
import {NoAccounts} from "@mui/icons-material";

// Styled Button component
const GuestButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(2, 4),
    borderRadius: theme.shape.borderRadius * 3,
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: theme.shadows[1],
    "&:hover": {
        backgroundColor: theme.palette.action.hover,
        boxShadow: theme.shadows[2],
    },
}))

interface ContinueAsGuestProps {
    onClick?: () => void
}

export default function ButtonContinueAsGuest({ onClick }: ContinueAsGuestProps) {
    return (
        <Box display="flex" justifyContent="center" p={2}>
            <GuestButton onClick={onClick} variant="text">
                <NoAccounts sx={{mr:"5px"}}/>
                Continue as guest
            </GuestButton>
        </Box>
    )
}

