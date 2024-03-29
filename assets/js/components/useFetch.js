import { useState, useEffect } from 'react'

const useFetch = (url, req_json, callback, deps=url) => {
    console.log(url, deps)
    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url,{
            signal: abortCont.signal,
            method: 'POST',
            headers: {
                'Content-Type':'application/json;'
            },
            body: JSON.stringify(req_json)
        })
        .then(async (res)=> {
            if(!res.ok && res.status != 200) {
               throw Error('could not fetch') 
            }
            return res.json()
        })
        .then((data)=>{
            let error = ''
            callback(data, error)
        })
        .catch(err => {
            if (err.name != 'AbortError') {
                let data=''
                callback(data, err.message)
            }
        })
        return () => abortCont.abort()
    }, [deps])
}

export default useFetch;