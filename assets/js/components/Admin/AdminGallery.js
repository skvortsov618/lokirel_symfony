import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import useFetch from '../useFetch';
import { useDropzone } from 'react-dropzone';
import ImageDropbox from './ImageDropbox';


const AdminGallery = () => {

    let {data:images, isPending, error} = useFetch("https://localhost:8000/images", {})

    const handleCallback = (data) => {
        console.log('callback here', data)
    }

    return (
        <div>
            {images && <ImageList sx={{ width: 500, height: 450 }}>
                {images.map((item, index)=>(<ImageListItem>
                    <img
                        src={item.link}
                        // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.alt_text}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.alt_text}
                    />
                </ImageListItem>))}
            </ImageList>}
            <ImageDropbox callback={handleCallback}/>
        </div>
    )
}

export default AdminGallery