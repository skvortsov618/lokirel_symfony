import styled from "@emotion/styled";
import {Box, Paper, Typography} from "@mui/material";
import image from "../../../../images/photos/cardPic.jpg";
import {myTheme} from "./customTheme";
import title_line from "../../../../images/elements/title-line.svg";

export const FlexBox = styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
}))
export const ImageContainer = styled(Box)(({theme})=> ({
    position:'relative',
    flex: '0 0 50%',
    maxWidth:'30vw',
    marginRight:'-2vw',
    height:'70vh',
    background:`url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius:'0.7rem',
    [myTheme.breakpoints.up('xl')]: {
        maxWidth:'35vw',
    },
    [myTheme.breakpoints.down('xl')]: {
        maxWidth:'40vw',
    },
    [myTheme.breakpoints.down('md')]: {
        display:'none'
    },
}))
export const InfoContainer = styled(Paper)(({theme})=> ({
    flex:'0 0 50%',
    maxWidth:'35vw',
    maxHeight:'70vh',
    marginLeft:'-2vw',
    position:'relative',
    top:'3vh',
    background:myTheme.palette.primary.main,
    borderRadius:'0.7rem',
    padding:'3.5rem 2rem',
    [theme.breakpoints.up('xl')]: {
        maxWidth:'35vw',
    },
    [theme.breakpoints.down('xl')]: {
        maxWidth:'40vw',
        maxHeight:'90vh',
    },
    [theme.breakpoints.down('lg')]: {
        maxWidth:'45vw',
        padding:'3rem 1.5rem',
    },
    [theme.breakpoints.down('md')]: {
        borderRadius:'0rem',
        top:'0',
        flex:'1 1 100%',
        width:'100vw',
        maxWidth:'100vw',
        maxHeight:'100vh',
        height:'100vh',
        marginLeft:'0',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        padding:'4.5rem 3rem',
    },
    [myTheme.breakpoints.down('sm')]: {
        padding:'3.5rem 1.5rem',
    },
}))

export const MySuperTitle = styled(Typography)(({theme}) => ({
    fontSize:'1.25rem',
    fontWeight:myTheme.typography.fontWeightMedium,
    color:'#FFD9B5',
    padding:'0 1.25rem 1rem',
    [myTheme.breakpoints.up('xl')]: {
        maxWidth:'35vw',
    },
    [myTheme.breakpoints.down('lg')]: {
        fontSize:'1.1rem',
    },
    [myTheme.breakpoints.down('md')]: {

    },
    [myTheme.breakpoints.down('sm')]: {
        padding:'0 0 1rem 0',
        fontSize:'1rem'
    },

}))
export const MyCardTitle = styled(Typography)(({theme})=> ({
    fontSize:'2.5rem',
    fontWeight:myTheme.typography.fontWeightBold,
    position:'relative',
    marginBottom:'2.2rem',
    color:myTheme.palette.primary.contrastText,
    padding:'0 1.25rem',
    [myTheme.breakpoints.down('lg')]: {
        fontSize:'2rem',
    },
    ':after': {
        content:'""',
        position:'absolute',
        bottom: '-1.1rem',
        left: '0.15rem',
        background:`url(${title_line})`,
        width: '10rem',
        height:'2.4rem',
        zIndex:5
    }
}))