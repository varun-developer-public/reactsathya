import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext'

function ProfilePage() {
    const {user,setUser} = useContext(UserContext)
    const changeRole = ()=>{
        setUser({
            ...user,
            role:'Designer'
        })
    }
  return (
    <div>
        <h2>Profile Page</h2>
        <p>Name : {user.name}</p>
        <p>Role : <input type="text" id="role" value={user.role}/></p>
        <button onClick={changeRole}>update</button>
    </div>
  )
}

export default ProfilePage