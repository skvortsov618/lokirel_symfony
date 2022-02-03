import { useParams } from "react-router-dom";
import useFetch from "../useFetch"
import React, {useState,useEffect} from "react";
import { Button } from "@mui/material";

const AdminPost = () => {
    const {post_id} = useParams()
    const [post, setPost] = useState([])
    const [currentBlock, setCurrentBlock] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    const [galleryOpen, setGalleryOpen] = useState([])
    const [gallery, setGallery] = useState([])

    // const handleSlugInput = (e) => {
    //     setPost({...post, slug: e.target.value})
    // }
    
    useEffect(() => {
        fetch("https://localhost:8000/blog/post",{
            method: 'POST',
            headers: {
                'Content-Type':'application/json;'
            },
            body: JSON.stringify({"post_id": post_id})
        })
        .then(async (res)=> {
            if(!res.ok ?? res.status != 200) {
               throw Error('could not fetch') 
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            setPost(data)
            setGalleryOpen(data.body.map(b=>false))
            setIsPending(false)
            setError(null)
        })
        .catch(err => {
            if (err.name === 'AbortError') {
                console.log('fetch aborted')
            } else {
                setError(err.message)
                setIsPending(false)
            }
        })
    }, [])

    const submitPost = () => {
        console.log('sending', post)
        fetch("https://localhost:8000/admin/blog/update",{
            method: 'POST',
            headers: {
                'Content-Type':'application/json;'
            },
            body: JSON.stringify(post)
        })
        .then(async (res)=> {
            if(!res.ok ?? res.status != 200) {
               throw Error('could not fetch') 
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            setIsPending(false)
            setError(null)
        })
        .catch(err => {
            if (err.name === 'AbortError') {
                console.log('fetch aborted')
            } else {
                setError(err.message)
                setIsPending(false)
            }
        })
    }

    const dragStartHandler = (e, block) => {
        console.log('dragStart', block)
        setCurrentBlock(block)
    }
    const dragEndHandler = (e) => {
        e.target.style.background = 'white'
    }
    const dragOverHandler = (e) => {
        e.preventDefault()
        e.target.style.background = 'lightgray'
    }
    const dropHandler = (e, block) => {
        e.preventDefault()
        setPost({...post, body: post.body.map(b=> {
            if (b.id === block.id) {
                return {...b, priority: currentBlock.priority}
            }
            if (b.id === currentBlock.id) {
                return {...b, priority: block.priority}
            }
            return b
        })})
        e.target.style.background = 'white'
    }
    const sortBlocks = (a,b) => {
        if (a.priority > b.priority) return 1
        return -1
    }

    const handleGallery = (e, block, index) => {
        setGalleryOpen(galleryOpen.map((b, bindex)=> {
            if (bindex === index && !b) return true
            return false
        }))
        fetch('https://localhost:8000/images', {
            method: "POST"
        })
        .then(async (res)=> {
            if(!res.ok ?? res.status != 200) {
               throw Error('could not fetch') 
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            setGallery(data)
            setIsPending(false)
            setError(null)
        })
        .catch(err => {
            if (err.name === 'AbortError') {
                console.log('fetch aborted')
            } else {
                setError(err.message)
                setIsPending(false)
            }
        })
    }

    return (
        <div style={{color: "black"}}>
            {isPending && <div>Awaiting</div>}
            {post && post != [] && <div>
                <Button onClick={submitPost}>SAVE</Button>
                <div>{post.id}</div>
                <div><input type="text" value={post.slug} onChange={(e)=>setPost({...post, slug: e.target.value})}/></div>
                <div><input type="text" value={post.title} onChange={(e)=>setPost({...post, title: e.target.value})}/></div>
                {post.body && post.body.sort(sortBlocks).map((block, index)=>(
                    <div key={block.id}
                        draggable={true}
                        onDragStart={(e)=>dragStartHandler(e, block)}
                        onDragLeave={(e)=>dragEndHandler(e)}
                        onDragEnd={(e)=>dragEndHandler(e)}
                        onDragOver={(e)=>dragOverHandler(e)}
                        onDrop={(e)=>dropHandler(e, block)}
                    >
                        <div>{block.text}</div>
                        <Button onClick={(e, block)=>handleGallery(e,block, index)}>GALLERY</Button>
                        {galleryOpen[index] && <div>
                                {gallery && gallery.map((image,index)=>(
                                    <img src={image.link} key={image.id} />
                                ))}
                            </div>}
                    </div>))}
            </div>}
            {error && <div>ТАКОГО ПОСТА НЕТ</div>}
        </div>
    )
}

export default AdminPost