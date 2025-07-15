import React from 'react'
import './navbar.css'
const Navbar = ()=>{

    const namee = "sathya"
    return (
        <>
            <h1 className="navbar" >{namee}</h1>
            <Logo/>
            <img src="" alt=""/>
        </>
    )
}

export function Logo(){
    return <img src="#" alt="#" />
}

export default Navbar