import { useState, useEffect } from 'react'

const useFetch = (url,req_json) => {
    const [data, setData] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

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
            if(!res.ok ?? res.status != 200) {
               throw Error('could not fetch') 
            }
            
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            setData(data)
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
        return () => abortCont.abort()
    }, [url])

    return {data, isPending, error}
}

export default useFetch;