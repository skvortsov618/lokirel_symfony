import styled from "@emotion/styled";
import {Box, Typography} from "@mui/material";
import {myTheme} from "./customTheme";

export const MyBGBox = styled(Box)(({theme}) => ({
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}))

export const MyH1 = styled(Typography)(({theme})=>  ({
        letterSpacing:'0.2rem',
        fontFamily:myTheme.typography.fontFamily,
        fontWeight: myTheme.typography.fontWeightBold,
        color: myTheme.palette.primary.contrastText,
        [myTheme.breakpoints.up('lg')]: {
            fontSize:'6rem',
        },
        [myTheme.breakpoints.down('lg')]: {
            fontSize:'5rem',
        },
        [myTheme.breakpoints.down('md')]: {
            fontSize:'3.5rem',
            letterSpacing:'0.1rem',
        },
        [myTheme.breakpoints.down('sm')]: {
            fontSize:'3rem',
        },
    })
)
export const MyH2 = styled(Typography)(({theme})=>  ({
        fontWeight: myTheme.typography.fontWeightMedium,
        fontFamily:myTheme.typography.fontFamily,
        color: myTheme.palette.primary.contrastText,
        [myTheme.breakpoints.up('lg')]: {
            fontSize:'1.5rem',
        },
        [myTheme.breakpoints.down('lg')]: {
            fontSize:'1.2rem',
        },
        [myTheme.breakpoints.down('md')]: {
            fontSize:'1rem',
        },
        [myTheme.breakpoints.down('sm')]: {
            fontSize:'0.9rem',
        },
    })
)
export const TypographyWrapper = styled('div')(({theme}) => (
    {   marginTop:'-10vh',
        textAlign: 'center',
        padding: '0 1rem',
        [myTheme.breakpoints.up('lg')]: {
            width: '60%',
        },
        [myTheme.breakpoints.down('lg')]: {
            width: '70%',
        },
        [myTheme.breakpoints.down('md')]: {
            width: '90%',
        },
        [myTheme.breakpoints.down('sm')]: {
            width: '100%',
        },
    }));