import { useParams } from "react-router-dom";
import useFetch from "../useFetch"
import React, {Component} from 'react';

const BlogPost = () => {
    const {post_slug} = useParams()
    const {data:post, isPending, error} = useFetch('https://localhost:8000/blog/post', {"slug":post_slug});
    return (
        <div style={{color: "black"}}>
            {isPending && <div>Awaiting</div>}
            {post && <div>
                <div>{post.slug}</div>
                <div>{post.title}</div>
                {post.body && post.body.map((block, index)=>(
                    <div key={block.id}>
                        <div>{block.text}</div>
                    </div>))}
            </div>}
        </div>
    )
}

export default BlogPost