import React from 'react'
import useFetch from './../useFetch'

const AdminFeedback = () => {

    const {data:feedback, isPending, error} = useFetch('https://localhost:8000/admin/feedback', {})
    
    return (
        <div style={{color:"black"}}>
            {feedback && feedback.map((item, index)=>(
                <div key={item.id}>
                    {`${item.id} | ${item.name} | ${item. email} | ${item.phone} | ${item.phone} | ${item.theme} | ${item.text} | ${item.source} | ${item.mailing} | ${item.sendtime}`}
                </div>
            ))}
        </div>
    )
}

export default AdminFeedback