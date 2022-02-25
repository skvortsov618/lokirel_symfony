import React, { useState, useEffect } from 'react'
import { send } from '../../helpers/Helpers'
import useFetch from '../useFetch'

const AdminLanding = () => {

    const [content, setContent] = useState([])

    useFetch('https://localhost:8000/content', {pack: 'landing'}, (data, error) => {
        if (data) setContent(data)
    })

    return (
        <div style={{color: "black"}}>
            {content && content.map((pair, index)=> {
                console.log(pair.content)
                if ('string' == pair.type) { return (
                    <div key={pair.placement_key}>
                        <div>{pair.description}</div>
                        <input defaultValue={pair.content} id={`input_${pair.placement_key}`}></input>
                        <button id={`button_${pair.placement_key}`} onClick={()=>{
                            handleSend(pair.placement_key, document.getElementById(`input_${pair.placement_key}`).value)
                        }}>SEND</button>
                    </div>
                )} else if ('text' == pair.type) { return (
                    <div key={pair.placement_key}>
                        <div>{pair.description}</div>
                        <input defaultValue={pair.content} id={`input_${pair.placement_key}`}></input>
                        <button id={`button_${pair.placement_key}`} onClick={()=>{
                            handleSend(pair.placement_key, document.getElementById(`input_${pair.placement_key}`).value)
                        }}>SEND</button>
                    </div>
                )} else if ('picture' == pair.type) { return (
                    <div key={pair.placement_key}>
                        <div>{pair.description}</div>
                        <input defaultValue={pair.content} id={`input_${pair.placement_key}`}></input>
                        <button id={`button_${pair.placement_key}`} onClick={()=>{
                            handleSend(pair.placement_key, document.getElementById(`input_${pair.placement_key}`).value)
                        }}>SEND</button>
                    </div>
                )} else if ('gallery' == pair.type) { return (
                    <div key={pair.placement_key}>
                        <div>{pair.description}</div>
                        <input defaultValue={pair.content} id={`input_${pair.placement_key}`}></input>
                        <button id={`button_${pair.placement_key}`} onClick={()=>{
                            handleSend(pair.placement_key, document.getElementById(`input_${pair.placement_key}`).value)
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