export function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export function getRole() {
    return getCookie('lokirel_auth')
}

export function send(url, req, callback) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json;'
        },
        body: JSON.stringify(req)
        })
    .then(async (res)=> {
        if(!res.ok ?? res.status != 200) {
            throw Error('could not fetch') 
        }
        return res.json()
    })
    .then((data)=>{
        callback(data, '')
    })
    .catch(err => {
        callback('', err)
    })
}

export function pairElement(placement_key, array) {
    for (let i=0; i<array.length; i++) {
        if (array[i].placement_key == placement_key) {
            return array[i]
        }
    }
}