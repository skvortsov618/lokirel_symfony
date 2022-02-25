import React, { useState, useEffect } from 'react'
import { send } from '../../helpers/Helpers'
import useFetch from '../useFetch'

const AdminLanding = () => {

    const [content, setContent] = useState(null)
    let entries = null
    if (content) entries = Object.entries(content)

    useFetch('https://localhost:8000/content', {pack: 'landing'}, (data, error) => {
        if (data) setContent(data)
    })

    return (
        <div style={{color: "black"}}>
            {entries && entries.map((entry, index)=> {
                if ('string' == entry[1].type) { return (
                    <div key={entry[0]}>
                        <div>{entry[1].description}</div>
                        <input defaultValue={entry[1].content} id={`input_${entry[0]}`}></input>
                        <button id={`button_${entry[0]}`} onClick={()=>{
                            handleSend(entry[0], document.getElementById(`input_${entry[0]}`).value)
                        }}>SEND</button>
                    </div>
                )} else if ('text' == pair.type) { return (
                    <div key={entry[0]}>
                        <div>{entry[1].description}</div>
                        <input defaultValue={entry[1].content} id={`input_${entry[0]}`}></input>
                        <button id={`button_${entry[0]}`} onClick={()=>{
                            handleSend(entry[0], document.getElementById(`input_${entry[0]}`).value)
                        }}>SEND</button>
                    </div>
                )} else if ('picture' == pair.type) { return (
                    <div key={entry[0]}>
                        <div>{entry[1].description}</div>
                        <input defaultValue={entry[1].content} id={`input_${entry[0]}`}></input>
                        <button id={`button_${entry[0]}`} onClick={()=>{
                            handleSend(entry[0], document.getElementById(`input_${entry[0]}`).value)
                        }}>SEND</button>
                    </div>
                )} else if ('gallery' == pair.type) { return (
                    <div key={entry[0]}>
                        <div>{entry[1].description}</div>
                        <input defaultValue={entry[1].content} id={`input_${entry[0]}`}></input>
                        <button id={`button_${entry[0]}`} onClick={()=>{
                            handleSend(entry[0], document.getElementById(`input_${entry[0]}`).value)
                        }}>SEND</button>
                    </div>
                )}
            })}
        </div>
    )
}

export default AdminLanding

const handleSend = (id, valio) => {
    let button = document.getElementById(`button_${id}`)
    button.disabled = true
    send('https://localhost:8000/admin/content/update', {placement_key: id, content: valio}, (data,error)=>{
        console.log(data, error)
        button.disabled = false
    })
}