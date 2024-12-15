import axios from "axios"
import { useState } from "react"
import {useForm} from 'react-hook-form'
export default function Github() {
    let [user,setUser] = useState({})
    let {register,handleSubmit,formState:{errors}} = useForm()
  return (
    
    <>
        <form onSubmit={handleSubmit(getdata)}>
            <input type="text" {...register('username',{required:true})} />
            {errors.username && <span style={{color:'red'}}>username is required</span> }<br/>
            <input type="submit" />
        </form>

        {(user.name? 
            <div className="card" style={{width:'20%'}}>
            <img src={user.avatar_url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{user.bio}</p>
            </div>
            </div>:
            <h1>not found</h1>
        )}
        

    </>
  )

  function getdata(res){
    axios.get(`https://api.github.com/users/${res.username}`).then((resp)=>{
        setUser(resp.data)  
    })
  }
}
