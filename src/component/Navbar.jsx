import React, { useState, useContext } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { StoreContext} from '../context/StoreContext'



const Navbar = ({setShowLogin}) => {
  const [menu,setMenu] = useState("home")
  const {getTotalCartAmount} = useContext(StoreContext)
  return <>
  
    <div className='flex justify-between items-center w-full py-3 px-20'>
        <Link to='/'><div className='logo text-4xl font-bold text-purple-800 '> FoOd-DeLiVeRy</div></Link>

        <div>
            <ul className='flex gap-5 font-bold py-3 text-gray-500 cursor-pointer'>
                <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"border-b-2":""}>Home</Link>
                <a href='#menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"border-b-2":""}>Menu</a>
                <Link to='/dishes' onClick={()=>setMenu("Dishes")} className={menu==="Dishes"?"border-b-2":""}>Dishes</Link>
                <a href='#contact-us' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"border-b-2":""}>Contact-us</a>
            </ul>
        </div>

        <div className='flex gap-8 pr-10'>
            <div><img className='w-10' src={assets.search}></img></div>
            <div className=' relative'><Link to='/cart'><img className='w-10' src={assets.cart}></img></Link>
            <div className={getTotalCartAmount()===0? "" : " absolute w-3 h-3 bg-red-500 rounded-md top-0 right-0"}></div></div>
            <div><button className='border-2 rounded-2xl w-38 p-2 px-5 hover:bg-slate-300 font-bold ' onClick={()=>setShowLogin(true)}>Sign in</button></div>
        </div>
       
    </div>
    
  </>
}

export default Navbar
