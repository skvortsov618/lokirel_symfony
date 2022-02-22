import { useParams } from "react-router-dom";
import React, {useState,useEffect, useCallback, useMemo} from "react";
import { Button } from "@mui/material";
import RichBlockEditor from "./RichBlockEditor";


const AdminPost = () => {
    const {post_id} = useParams()
    const [post, setPost] = useState([])
    const [currentBlock, setCurrentBlock] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    const [galleryOpen, setGalleryOpen] = useState([])
    const [gallery, setGallery] = useState([])
    const [editingBlock, setEditingBlock] = useState(null)
    const [dragging, setDragging] = useState(true)

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

    const handleBlockClick = (event, id) => {
        setEditingBlock(id)
        setDragging(false)
    }
    const editorCallback = (block) => {
        setEditingBlock(null)
        setDragging(true)
        setPost({...post, body: post.body.map(b=> {
            if (b.id === block.id) {
                return block
            }
            return b
        })})
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

    return (
        <div style={{color: "black"}}>
            {isPending && <div>Awaiting</div>}
            {post && post != [] && <div style={{margin: "20px auto 100px", width: "600px"}}>
                <Button onClick={submitPost}>SAVE</Button>
                <div style={{margin: "10px"}}>Post ID: {post.id}</div>
                <div><div>Post Slug</div><input type="text" value={post.slug} onChange={(e)=>setPost({...post, slug: e.target.value})} style={{border: "2px solid grey", borderRadius: "10px", padding: "5px", margin: "0 auto 10px", width: "100%", backgroundColor: "#eee"}} /></div>
                <div><div>Post Title</div><input type="text" value={post.title} onChange={(e)=>setPost({...post, title: e.target.value})}style={{border: "2px solid grey", borderRadius: "10px", padding: "5px", margin: "0 auto 10px", width: "100%", backgroundColor: "#eee"}} /></div>
                <div><div>Post Body:</div>
                    <div style={{borderRadius: "10px"}}>
                        {post.body && post.body.sort(sortBlocks).map((block, index)=>{
                            if (block.id != editingBlock && dragging) {return (
                                <div style={{padding: "10px", width: "100%", margin: "10px", borderTop: "1px solid grey", borderBottom: "1px solid grey", backgroundColor: "#eee"}} 
                                    key={`block_${block.id}`}
                                    draggable={true}
                                    onDragStart={(e)=>dragStartHandler(e, block)}
                                    onDragLeave={(e)=>dragEndHandler(e)}
                                    onDragEnd={(e)=>dragEndHandler(e)}
                                    onDragOver={(e)=>dragOverHandler(e)}
                                    onDrop={(e)=>dropHandler(e, block)}
                                    onClick={(e)=>handleBlockClick(e, block.id)}
                                >
                                    <div>{block.text}</div>
                                </div>
                            )} else if (block.id != editingBlock && !dragging) {return(
                                <div style={{padding: "10px", width: "100%", margin: "10px", borderTop: "1px solid grey", borderBottom: "1px solid grey", backgroundColor: "#fff"}}
                                    onClick={(e)=>handleBlockClick(e, block.id)}
                                    key={`block_${block.id}`}
                                ><div>{block.text}</div></div>
                            )} else {return(
                                <div style={{margin: "10px", borderTop: "1px solid grey", borderBottom: "1px solid grey", backgroundColor: "red"}}
                                    key={`block_${block.id}`}
                                >
                                    <RichBlockEditor block={block} callback={editorCallback} />
                                </div>
                            )}
                        })}
                    </div>
                </div>
            </div>}
            {error && <div>ТАКОГО ПОСТА НЕТ</div>}
        </div>
    )
}

export default AdminPost

{/* <Button onClick={(e, block)=>handleGallery(e,block, index)}>GALLERY</Button>
                            {galleryOpen[index] && <div>
                                    {gallery && gallery.map((image,index)=>(
                                        <img src={image.link} key={image.id} />
                                    ))}
                                </div>} */}