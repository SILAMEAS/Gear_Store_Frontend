import React from 'react';
import {AppBar, Box, IconButton, InputBase, Toolbar, Typography} from '@mui/material';
import {
    AccountCircle as AccountCircleIcon,
    Notifications as NotificationsIcon,
    Search as SearchIcon
} from '@mui/icons-material';

const AdminHeader: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Dashboard
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <InputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        sx={{ ml: 1, bgcolor: 'background.paper', borderRadius: 1, p: 1 }}
                    />
                    <IconButton color="inherit">
                        <SearchIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <NotificationsIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <AccountCircleIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default AdminHeader;