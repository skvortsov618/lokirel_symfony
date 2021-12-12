import {Box} from "@mui/material";
import styled from "@emotion/styled";

export const Flex = styled(Box)(({theme}) => ({
    height:'85vh',
    // flex:'1 0 90%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
}))

export const FlexWrapper = styled(Box)(({theme})=> ({
    display:'flex',
    height:'100vh',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center'
}))