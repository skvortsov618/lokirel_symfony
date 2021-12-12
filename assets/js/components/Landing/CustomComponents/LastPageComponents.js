import styled from "@emotion/styled";
import {myTheme} from "./customTheme";
import {Box} from "@mui/material";

export const IconWrapper = styled('a')({
    marginLeft: '5px', position: 'relative', top: '0.4rem',color:myTheme.palette.primary.contrastText
})
export const GridWrapper = styled('div')({
    display:'flex',flexDirection:'column', justifyContent:'center',height:'85vh'
})
export const BGPrivacy = styled(Box)({
    padding:'5vh 0 0 0',
    width: '100%',
    minHeight:'100vh',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
})