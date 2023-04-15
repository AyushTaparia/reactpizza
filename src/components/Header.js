import React, { useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import {HiMenuAlt1} from 'react-icons/hi'
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { searchProducts, showSideBar } from '../actions'
const Header = () => {
    const [name,setName]=useState('')
    const dispatch =useDispatch()

    return (
        <div className='header'>
           <div className="logo">
              <div className="burger" onClick={()=>dispatch(showSideBar(true))}>
               <HiMenuAlt1/>
              </div>

              <Link to="/"><img src="https://cdn-icons-png.flaticon.com/512/4039/4039232.png" alt="logo" /></Link>
            </div>
        </div>
    )
}

export default Header
