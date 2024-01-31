import React, {useState} from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { hamburgerMenu } from './hamburgerMenu';
import { IconContext } from 'react-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import NavbarMenu from '../components/navbarMenu';
import './Contact.css'

function Contact() {

    const [sidebar, setSidebar] = useState(false) 
    /*setSidebar=update*/ /*false means the current value is not showing*/
    const showSidebar = () =>  setSidebar(!sidebar)
    /* utilize set side bar and this is going to update the value to whatever the opposite of it is currently*/
    /*(!sidebar) it's reversing the value true/false*/

  return (
      <>
      <IconContext.Provider value= {{color: '#fff'}}>
      <div className='navbar'>
            <Link to="#" className='hamburger-bars'>
                <FaBars onClick={showSidebar} />
            </Link>

            <div className="carmony-logo">
            <img src="CARMONY_ICON2.png" alt="" />
          </div>

            <NavbarMenu />
          </div>
          
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className="navbar-toggle">
                    <Link to="#" className='hamburger-bars'>
                        <AiOutlineClose />
                    </Link>
                </li>
                {hamburgerMenu.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
          </nav>
          </IconContext.Provider>

        <div className='contact'>
          <h1>Contact</h1>
        </div>

      </>
  )
}

  export default Contact
import React, {useState} from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { hamburgerMenu } from './hamburgerMenu';
import { IconContext } from 'react-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Contact.css'

function Contact() {

    const [sidebar, setSidebar] = useState(false) 
    /*setSidebar=update*/ /*false means the current value is not showing*/
    const showSidebar = () =>  setSidebar(!sidebar)
    /* utilize set side bar and this is going to update the value to whatever the opposite of it is currently*/
    /*(!sidebar) it's reversing the value true/false*/

  return (
      <>
      <IconContext.Provider value= {{color: '#fff'}}>
          <div className='navbar'>
            <Link to="#" className='hamburger-bars'>
                <FaBars onClick={showSidebar} />
            </Link>

            <div className="logo">
                <img src="https://www.clker.com/cliparts/u/O/L/Q/c/m/car-icon-hi.png" alt="Logo" />
            </div>

            <div className="top-rightbox">
              <div id='Post'>
                  <ul>
                    <li>
                    <Link to="/Posting">+ Create a listing
                    </Link>
                    </li>
                  </ul>
                </div>
                <div id="Login">
                  <ul>
                    <li>
                    <Link to="/Login"><FontAwesomeIcon icon={faUser} className="user-icon" /> Login
                    </Link>
                    </li>
                  </ul>
                </div>
                <div id="SignUp">
                  <ul>
                    <li>
                    <Link to="/Signup"><FontAwesomeIcon icon={faUser} className="user-icon" /> Sign Up
                    </Link>
                    </li>
                  </ul>
                </div>
              </div>
          </div>
          
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className="navbar-toggle">
                    <Link to="#" className='hamburger-bars'>
                        <AiOutlineClose />
                    </Link>
                </li>
                {hamburgerMenu.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
          </nav>
          </IconContext.Provider>

        <div className='contact'>
          <h1>Contact</h1>
        </div>

      </>
  )
}

  export default Contact