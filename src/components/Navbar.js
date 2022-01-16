import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import {MdFingerprint} from 'react-icons/md'
import {Button} from './Button'
import './Navbar.css'

const Navbar = () => {

   const [click, setClick] = useState(false)
   const [button, setButton] = useState(true)

   const handleClick = () => setClick(!click)
   const closeMobileMenu = () => {
      setClick(!click)
      window.scrollBy(0, -100)
   }

   const showButton = () => {
      if (window.innerWidth<= 960) {
         setButton(false)
      } else {
         setButton(true)
      }
   }

   useEffect(() => {
         showButton()
      }, []) 


         window.addEventListener('resize', showButton)


      


      return (<>
         <div className="navbar">
            <div className="navbar-container container">

               <Link to='/' className='navbar-logo'>
                  <MdFingerprint/>
                  LAVISH
               </Link>
               <div className="menu-icon"
                  onClick={handleClick}> {
                  click ? <FaTimes/>: <FaBars/>
               } </div>
               <ul className={
                  click ? 'nav-menu active' : 'nav-menu'
               }>
                  <li className="nav-item">
                     <Link to='/' className='nav-link'
                        onClick={closeMobileMenu}>
                        Home
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link to='/services' className='nav-link'
                        onClick={closeMobileMenu}>
                        Services
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link to='/products' className='nav-link'
                        onClick={closeMobileMenu}>
                        Products
                     </Link>
                  </li>
                  <li className="nav-btn"> {
                     button ? (<Link to='/sign-up' className='btn-link'>
                        <Button buttonStyle='btn--outline'>
                           SIGN UP
                        </Button>
                     </Link>) : (<Link to='/sign-up' className='btn-link'>
                        <Button onClick={closeMobileMenu}
                           buttonStyle='btn--outline'
                           buttonSize='btn--mobile'>
                           SIGN UP
                        </Button>
                     </Link>)
                  } </li>
               </ul>
            </div>
         </div>
      </>)
   }

   export default Navbar
