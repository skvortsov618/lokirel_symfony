import React, {useState,useEffect} from "react";
import useFetch from "../useFetch";
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import { send, host } from "../../helpers/Helpers";

const Blog = () => {
    const [searchTags, setSearchTags] = useState([])
    const [searchCategories, setSearchCategories] = useState([])
    const [searchPhrase, setSearchPhrase] = useState(null)
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(12)
    const [search, setSearch] = useState({"per_page": perPage})

    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    const [posts, setPosts] = useState(null)
    const [content, setContent] = useState(null)

    const [tags, setTags] = useState(null)
    const [categories, setCategories] = useState(null)

    useFetch(`${host()}/blog`, {}, (data,error)=> {
        setIsPending(false)
        if (error) setError(error)
        else {setPosts(data.posts), setContent(data)}
    })

    useEffect(()=>{setSearch({
        "tags": searchTags,
        "categories": searchCategories,
        "search": searchPhrase,
        "page": page,
        "per_page": perPage
    })}, [searchTags,searchCategories,searchPhrase,page,perPage])

    const switchTag = (e) => {
        let tag = e.target.getAttribute('slug')
        let position = searchTags.indexOf(tag)
        if (position > -1) setSearchTags(searchTags.filter((searchTag, index)=>{searchTag != tag}))
        else {
            setSearchTags([...searchTags, tag])
        }
    }
    const switchCategory = (e) => {
        let category = e.target.getAttribute('slug')
        let position = searchCategories.indexOf(category)
        if (position > -1) setSearchCategories(searchCategories.filter((searchCategory, index)=>{searchCategory != category}))
        else {
            setSearchCategories([...searchCategories, category])
        }
    }
    const setPhrase = (e) => {
        setSearchPhrase(e.target.value)
    }

    const handleSearch = (search) => {
        send(`${host()}/blog/posts`, search, (data, error) => {
            if (error) {
                setIsPending(false)
                setError(error)
            } else {
                setPosts(data)
                setIsPending(false)
                setError(null)
            }
        })
    }

    return (
        <div style={{color: "black"}}>
            {isPending && <div>AWAIT.....</div>}
            <input onBlur={setPhrase}/>
            {content && <div>TAGS:</div>}
            {content && content.tags.map((tag, key)=>(
                <Button
                    slug={tag.slug}
                    key={tag.slug}
                    onClick={switchTag}
                >{tag.tag_name}</Button>
            ))}
            {content && <div>CATEGORIES:</div>}
            {content && content.categories.map((category, key)=>(
                <Button
                    slug={category.slug}
                    key={category.slug}
                    onClick={switchCategory}
                >{category.category_name}</Button>
            ))}
            {content && <Button onClick={()=>{handleSearch(search)}}>SEARCH</Button>}
            {error && <div>{error}</div>}
            {!isPending && !content && !error && <div>NO TAGS</div>}
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
                    <div>-----------------</div>
                </Link>
            ))}
        </div>
    )
}

export default Blog