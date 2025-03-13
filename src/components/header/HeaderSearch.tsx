import {IconButton} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const HeaderSearch = () => {
    return (
        <IconButton color="inherit">
            <SearchIcon sx={{color:"black.main"}}/>
        </IconButton>
    );
};

export default HeaderSearch;
