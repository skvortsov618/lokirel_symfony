import {Paper, TextField, Box} from "@mui/material";
import {myTheme} from "./customTheme";
import styled from "@emotion/styled";

export const SentSuccess = styled(Box)(({theme})=>({
    fontSize: '1.5rem',
    textAlign:'center',
    color: myTheme.palette.primary.main,
    fontWeight:myTheme.typography.fontWeightMedium,
    fontFamily:'Montserrat',
    [myTheme.breakpoints.down('md')]: {
        fontSize: '1rem',
    },
}))
export const SentError = styled(Box)(({theme})=>({
    textAlign:'center',
    color: myTheme.palette.error.main,
    fontWeight:myTheme.typography.fontWeightMedium,
    fontFamily:'Montserrat',
    paddingBottom:'1rem',
    [myTheme.breakpoints.down('md')]: {
        fontSize: '0.9rem',
        lineHeight:'1rem'
    },
}))
export const MyPaper = styled(Paper)(({theme})=>({
    padding: '4rem 2.5rem',
    borderRadius:'0.7rem',
    [myTheme.breakpoints.up('xl')]: {

    },
    [myTheme.breakpoints.down('lg')]: {

    },
    [myTheme.breakpoints.down('md')]: {
        padding: '1rem 0.7rem',
    },
    [myTheme.breakpoints.down('sm')]: {

    },
}))

export const MyTextField = styled(TextField)(({theme})=> ({
    paddingBottom: '1rem',
    [myTheme.breakpoints.down('md')]: {
        paddingBottom: '0.3rem',
    },
    '.css-19c9b59-MuiInputBase-root-MuiOutlinedInput-root > fieldset > legend.css-173wfxe > span': {
        fontSize:'0.5rem !important',
        display:'none',
    }
}))