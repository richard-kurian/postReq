import React,{useState} from 'react'
import axios from 'axios'

function PostForm() {

    const url="https://jsonplaceholder.typicode.com/posts"

    const [data, setData]=useState({
        name:"",
        date:"",
        iduser:""
    })
 function submit(e){
     e.preventDefault()
     axios.post(url,{
         name:data.name,
         date:data.date,
         iduser:data.iduser
     })
     .then(res=>{
         console.log(res.data)
     })

 }
    function handle(e){
    const newdata={...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)
    console.log(newdata) 
    }
    return (
        <div>
        <form onSubmit={(e)=>submit(e)}>
            <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder="name" type="text"></input>
            <input  onChange={(e)=>handle(e)} id="date" value={data.date} placeholder="date" type="date"></input>
            <input  onChange={(e)=>handle(e)} id="iduser" value={data.iduser} placeholder="iduser" type="number"></input>
         <div><button type="submit"> submit</button> </div>
        </form>
        </div>
    )
}

export default PostForm
