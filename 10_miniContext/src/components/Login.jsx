import React,{ useState,useContext } from "react"
import userContext from "../context/userContext"



function Login() {
  const [username,setUsername] = useState('')
  const [password, setpassword] = useState("")
  const {setUser} = useContext(userContext);

  const handelSubmit = (e)=>{
    e.preventDefault() 
    setUser({username,password})

  }
  return (
    <div>
      <h2>Login</h2>
      <input value={username} onChange={(e)=>setUsername(e.target.value)
      } type="text" placeholder="username" />

      <input value={password} onChange={(e)=> setpassword(e.target.value) } type="text" placeholder="password" />
      <button onClick={handelSubmit}>Submit</button>
    </div>
  )
}

export default Login