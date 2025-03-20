declare module "@mui/material/styles" {
    interface Palette {
        Black: Palette["primary"];
        Grey: Palette["primary"];
        White:  Palette["primary"];
    }
    interface PaletteOptions {
        Black: PaletteOptions["primary"];
        Grey: PaletteOptions["primary"];
        White: PaletteOptions["primary"];
       
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