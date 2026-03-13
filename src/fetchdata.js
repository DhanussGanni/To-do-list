import { useEffect, useState } from "react"

const Usefetch=(url)=>{
    const [Data,setData] =useState([])
    const [Ispending, Isnotpeding] = useState(false);
    const [Iserror, Isnoterror] = useState(null)
    useEffect(()=>{
        const Aborterr = new AbortController();
        console.log("STARTED")
        setTimeout(()=>{
        fetch(url,{
        headers:{
        "ngrok-skip-browser-warning":"true"}})
        .then(res =>{
            console.log('Fetchin..')
            return res.json();
        })
        .then(data=>{
            setData(data)
            console.log('Done')
        })
        .catch((err) =>{
            if (err.name === 'AbortError'){
                console.log("feteched aborted")
            }else{
            setData(null);
            Isnotpeding(false);
            Isnoterror(true);
            console.log(err.message);
        }
    })
    },500)    
        return   () => Aborterr.abort();
    },[url])
    return {Data , Ispending ,Iserror}
}

export default  Usefetch;