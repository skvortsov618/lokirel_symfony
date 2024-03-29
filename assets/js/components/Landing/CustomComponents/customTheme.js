import {createTheme} from "@mui/material";

export const myTheme = createTheme({

        breakpoints: {
            values: {
                xs: 320,
                sm: 480,
                md: 768,
                lg: 992,
                xl: 1200
            }
        },
        palette: {
            primary: {
                main: '#558f78',
                light: '#89c5ad',
                dark: 'rgb(37 51 43)',
                contrastText: '#f8f8f8'
            },
            secondary: {
                main: '#EBA565',
                light: '#eaeaea',
                dark: '#7c7c7c',
                contrastText: '#000'
            }
        },
        typography: {
            fontFamily: 'Montserrat',
            fontWeightBold:600
        }
    }
)