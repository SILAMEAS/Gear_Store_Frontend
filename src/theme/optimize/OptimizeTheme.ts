declare module "@mui/material/styles" {
    interface Palette {
        Grey: Palette["primary"];
    }
    interface PaletteOptions {
        Grey: PaletteOptions["primary"];
    }
    interface BreakpointOverrides {
        xs: true;
        sm: true;
        smd: true;
        md: true;
        lg: true;
        xl: true;
        xxl: true;
        hd: true;
        fhd: true;
        qhd: true;
        uhd: true;
        uhd2: true;
        uhd4k: true;
        uhd8k: true;
    }


}

/**
 declare module "@mui/material/styles" {
 interface Palette {
 buttonLogin: Palette["primary"];
 }

 interface PaletteOptions {
 buttonLogin: PaletteOptions["primary"];

 }

 }
 declare module "@mui/material/Button" {
 interface ButtonPropsColorOverrides {
 buttonLogin: true;
 }
 }

 * **/