import React from "react";
import useFetch from "../useFetch";
import {Link} from 'react-router-dom'

const Blog = () => {
    const {data:posts, isPending, error} = useFetch('https://localhost:8000/blog', '')

    return (
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {posts && posts.map((post, index)=>(
                <Link to={`/blog/${post.slug}`}>
                    <div style={{color: "black"}} key={post.id} >
                        <div>{post.slug}</div>
                        <div>{post.title}</div>
                        {post.body.map((block, index)=>(
                            <div key={block.id}>
                                <div>{block.text}</div>
                            </div>
                        ))}
                    </div>
                </Link>
            ))}
            {!posts && !isPending && (
                <div>
                    Posts not found
                </div>
            )}
        </div>
    )

}

export default Blog;