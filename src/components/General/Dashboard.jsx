import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext'

function Dashboard() {

    const {user} = useContext(UserContext)
  return (
    <div>
        Welcome, {user.name} <br />
        Role is {user.role}
    </div>
  )
}

export default Dashboard