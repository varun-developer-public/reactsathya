import React, { useState } from 'react'
import './navbar.css'


const Navbar = ({namee,age})=>{

    
    return (
        <>
            <h1 className="navbar" >{namee} , {age}</h1>
            <Logo/>
            <button onClick={()=>setA(50)}>click</button>
            <img src="" alt=""/>
        </>
    )
}

export function Logo(){
    return <img src="#" alt="#" />
}

export default Navbar