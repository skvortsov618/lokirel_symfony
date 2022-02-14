import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};

const ImageDropbox = ({callback}) => {
    const [open, setOpen] = useState(true)
    const [previewFiles, setPreviewFiles] = useState([]);

    const {getRootProps, getInputProps} = useDropzone({
        accept: 'image/jpeg, image/png',
        onDrop: acceptedFiles => {
            setOpen(false)
            console.log(acceptedFiles)
            setPreviewFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })))
            acceptedFiles.map((file) => {
                const formData = new FormData();
                formData.append('newImage', file)
                fetch('https://localhost:8000/admin/images/create', {
                    method : 'POST',
                    body: formData
                })
                .then((res)=>{
                    if(!res.ok ?? res.status != 200) {
                        throw Error('could not fetch') 
                    }
                    return res.json()
                })
                .then((data)=>{
                    console.log(data)
                    callback(data)
                })
            })
        }
    });

    const thumbs = previewFiles.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
            <img
                src={file.preview}
                style={img}
            />
            </div>
        </div>
    ));
    
    useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
        previewFiles.forEach(file => URL.revokeObjectURL(file.preview));
    }, [previewFiles]);

    return (
        <div>
            {open && <section className="container" style={{backgroundColor:"blueviolet"}}>
                <div {...getRootProps({className: 'dropzone'})}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
            </section>}
            <div style={thumbsContainer}>
                {thumbs}
            </div>
        </div>
    );
}

export default ImageDropbox;


// const {
//     acceptedFiles,
//     fileRejections,
//     getRootProps,
//     getInputProps
// } = useDropzone({
//     accept: 'image/jpeg, image/png'
// });

// const acceptedFileItems = acceptedFiles.map(file => {
//     const formData = new FormData();
//     formData.append('newImage', file)
//     fetch('https://localhost:8000/admin/images/create', {
//         method : 'POST',
//         body: formData
//     })
//     .then((res)=>{
//         if(!res.ok ?? res.status != 200) {
//             throw Error('could not fetch') 
//         }
//         return res.json()
//     })
//     .then((data)=>{
//         console.log(data)
//     })
//     return (
//         <li key={file.path}>
//             {file.path} - {file.size} bytes
//         </li>
// )});

// const fileRejectionItems = fileRejections.map(({ file, errors }) => (
// <li key={file.path}>
//     {file.path} - {file.size} bytes
//     <ul>
//     {errors.map(e => (
//         <li key={e.code}>{e.message}</li>
//     ))}
//     </ul>
// </li>
// ));