declare module "@mui/material/styles" {
    interface Palette {
        black: Palette["primary"];
    }

    interface PaletteOptions {
        black: PaletteOptions["primary"];
       
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