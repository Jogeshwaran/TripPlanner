import { useContext, useState } from "react"
import LoginContext from "../Context/LoginContext"

function Login() {
   const {openLoginModal,setOpenModal} = useContext(LoginContext)
    console.log('openLoginModal', openLoginModal)
    return(
      <div>
        <h1 onClick={()=>setOpenModal()}>Login</h1>
      </div>
    )
}

export default Login