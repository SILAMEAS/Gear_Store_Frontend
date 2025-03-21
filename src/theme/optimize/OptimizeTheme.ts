declare module "@mui/material/styles" {
    interface Palette {
        Grey: Palette["primary"];
    }
    interface PaletteOptions {
        Grey: PaletteOptions["primary"];
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