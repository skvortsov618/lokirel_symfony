import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const SwiperCard = () => {

    const image_src = "https://images7.alphacoders.com/451/451013.jpg";
    const image_alt = "sdfsd";
    const header    = "Lokirel";
    const subheader = "Озеленение и профессиональный уход за растениями";

    return (
        <Card sx={{ maxWidth: 345, height: "100%" }}>
            <CardMedia
                component="img"
                height="100%"
                image={image_src}
                alt="green iguana"
                />
                <CardContent sx={{position: "absolute", bottom: 0, top: "60%", width: "340px", backgroundColor: "rgba(0,0,0,0.5)"}}>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            <CardActionArea>
            </CardActionArea>
        </Card>
    );
}
 
export default SwiperCard;