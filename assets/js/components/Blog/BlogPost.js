import { useParams } from "react-router-dom";
import useFetch from "../useFetch"
import React, {Component, useState} from 'react';
import { host } from "../../helpers/Helpers";

const BlogPost = () => {
    const {post_slug} = useParams()

    const [post, setPost] = useState(null)
    const [error, setError] = useState(null)
    const [pending, setPending] = useState(true)
    useFetch(`${host()}/blog/post`, {"slug":post_slug}, (data, error) => {
        setPending(false)
        if (error) setError(error)
        else setPost(data)
    });

    return (
        <div style={{color: "black"}}>
            {pending && <div>Awaiting</div>}
            {post && post != [] && <div>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>{post.meta_title}</title>
                    <meta name="description" content={post.meta_description} />
                    <meta name="robots" content={post.meta_robots} />
                    <meta name="canonical" content={post.meta_description} />
                    <meta name="og:title" content={post.meta_og_title} />
                    <meta name="og:description" content={post.meta_og_description} />
                    <meta name="og:image" content={post.meta_og_image} />
                    <meta name="og:url" content={post.meta_og_url} />
                    <meta name="twitter:title" content={post.meta_twitter_title} />
                    <meta name="twitter:description" content={post.meta_twitter_description} />
                    <meta name="twitter:image" content={post.meta_twitter_image} />
                    <meta name="twitter:card" content={post.meta_twitter_card} />
                </Helmet>
                <div>{post.slug}</div>
                <div>{post.title}</div>
                {post.body && post.body.map((block, index)=>(
                    <div key={block.id}>
                        <div>{block.text}</div>
                    </div>))}
            </div>}
            {error && <div>ТАКОГО ПОСТА НЕТ</div>}
        </div>
    )
}

export default BlogPost