import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const SwiperCard = (props) => {

    const image_src = props.cardImage;
    const text = props.cardText;
    const image_alt = "sdfsd";
    const header    = "Lokirel";
    const subheader = "Озеленение и профессиональный уход за растениями";

    return (
        <Card sx={{ height: "100%" }}>
            <CardMedia
                component="img"
                height="100%"
                image={image_src}
                alt="green iguana"
                />
                <CardContent sx={{position: "absolute", bottom: 0, top: "60%", width: "100%", backgroundColor: "rgba(0,0,0,0.5)"}}>
                    <Typography variant="body2" color="text.secondary">
                        {text}
                    </Typography>
                </CardContent>
            <CardActionArea>
            </CardActionArea>
        </Card>
    );
}
 
export default SwiperCard;