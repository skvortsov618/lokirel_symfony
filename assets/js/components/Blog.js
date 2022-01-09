import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Blog = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        setPosts([
            {
                id:"1",
                category:"base",
                tags:"flower",
                title:"Sam",
                text:"Some text",
                picture:"url"
            },
            {
                id:"2",
                category:"base",
                tags:"flower",
                title:"Sam2",
                text:"Some text2",
                picture:"url2"
            },
            {
                id:"3",
                category:"base",
                tags:"flower",
                title:"Sam3",
                text:"Some text3",
                picture:"url3"
            }
        ])
    }, [])

    return (
        <div>
            {posts.map((post, index)=>(
                <div style={{color: "black"}} key={post.id}>
                    <div>{post.title}</div>
                    <div>{post.text}</div>
                    <div>{post.picture}</div>
                </div>
            ))}
        </div>
    )

}

export default Blog;