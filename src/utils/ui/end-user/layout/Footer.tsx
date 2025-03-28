import {Box, Typography} from "@mui/material";
import Colors from "@theme/mode/Colors.ts";

const AppFooter = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        right: -20,
        width: "100%",
        backgroundColor: "black",
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.1)"
      }}
    >
      <Typography variant="body2" color={Colors._ffffff}>
        &copy; {new Date().getFullYear()} LA STORE. All rights reserved.
      </Typography>
    </Box>
  );
};

export default AppFooter;
