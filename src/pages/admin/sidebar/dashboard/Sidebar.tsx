import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import { Person, BarChart, Mail, Phone, Chat, ConfirmationNumber } from "@mui/icons-material"

const SidebarContainer = styled(Box)({
    width: 240,
    backgroundColor: "#242632",
    height: "100vh",
    padding: "1rem",
})

const StyledListItem = styled(ListItem)({
    borderRadius: 8,
    marginBottom: 4,
    "&:hover": {
        backgroundColor: "rgba(255,255,255,0.1)",
    },
})

export default function Sidebar() {
    return (
        <SidebarContainer>
            <Typography variant="h6" sx={{ mb: 3, px: 2 }}>
                CRM Dashboard
            </Typography>
            <List>
                <StyledListItem>
                    <ListItemIcon>
                        <Person sx={{ color: "#bb86fc" }} />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </StyledListItem>
                <StyledListItem >
                    <ListItemIcon>
                        <BarChart sx={{ color: "#bb86fc" }} />
                    </ListItemIcon>
                    <ListItemText primary="Report" />
                </StyledListItem>
                <Typography variant="subtitle2" color="rgba(255,255,255,0.7)" sx={{ mt: 2, mb: 1, px: 2 }}>
                    CHANNELS
                </Typography>
                <StyledListItem >
                    <ListItemIcon>
                        <Mail sx={{ color: "#bb86fc" }} />
                    </ListItemIcon>
                    <ListItemText primary="Email" />
                </StyledListItem>
                <StyledListItem >
                    <ListItemIcon>
                        <Phone sx={{ color: "#bb86fc" }} />
                    </ListItemIcon>
                    <ListItemText primary="Phone Call" />
                </StyledListItem>
                <StyledListItem >
                    <ListItemIcon>
                        <Chat sx={{ color: "#bb86fc" }} />
                    </ListItemIcon>
                    <ListItemText primary="Online Chat" />
                </StyledListItem>
                <Typography variant="subtitle2" color="rgba(255,255,255,0.7)" sx={{ mt: 2, mb: 1, px: 2 }}>
                    TICKETS STATUS
                </Typography>
                <StyledListItem >
                    <ListItemIcon>
                        <ConfirmationNumber sx={{ color: "#bb86fc" }} />
                    </ListItemIcon>
                    <ListItemText primary="Created" />
                </StyledListItem>
            </List>
        </SidebarContainer>
    )
}

