import React, {useState} from 'react'
import { NavContainer, NavBar, NavLogo, NavBurgerMenu, NavMenu, NavLink } from './NavStyle'
import {FiMenu} from 'react-icons/fi'
import {IoMdClose} from 'react-icons/io'
import {AiOutlineCaretDown} from 'react-icons/ai'
import Dropdown from '../Dropdown'
import { links } from '../Dropdown/data'

function Navigation() {

    const [menuClick, setMenuClick] = useState(false)

    const OpenMenu = () => setMenuClick(!menuClick)
    const CloseMenu = () => setMenuClick(false)

    const [dropdown, setDropdown] = useState(false)

    const onMouseEnter = () => {
        if (window.innerWidth < 900){
            setDropdown(false);
        } else {
            setDropdown(true)
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 900){
            setDropdown(false);
        } else {
            setDropdown(false)
        }
    }


    return (
        <>
            <NavContainer>
                <NavBar>
                    <NavLogo to="/" onClick={CloseMenu}>
                        <img src="/Pictures/logo.png" alt="logo" />
                    </NavLogo>

                    <NavBurgerMenu onClick={OpenMenu}>
                        {menuClick ? <IoMdClose/> : <FiMenu/>}
                    </NavBurgerMenu>
                    
                    {/* Links */}
                    <NavMenu>
                        <ul className={menuClick ? 'NavOpen' : 'NavClose'}>
                            <li>
                                <NavLink to="/" onClick={CloseMenu}>
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/news" onClick={CloseMenu}>
                                    News
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/jobs" onClick={CloseMenu}>
                                    Jobs
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/tourism" onClick={CloseMenu}>
                                    Tourism
                                </NavLink>
                            </li>

                            <li 
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                            >
                                <NavLink onClick={CloseMenu}>
                                    Government <AiOutlineCaretDown/>
                                </NavLink>
                                {dropdown && <Dropdown /> }
                            </li>

                            <div className="dropBlock">
                                {links.map((item, index) => {
                                    return(
                                        <>
                                            <NavLink key={item.id}
                                                className={item.cname}
                                                to={item.path}
                                                onClick={CloseMenu}
                                            >
                                                {item.title}
                                            </NavLink>
                                        </>
                                    )
                                })}
                            </div>

                            <li>
                                <NavLink to="/contact" onClick={CloseMenu}>
                                    Contact
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="/faq" onClick={CloseMenu}>
                                    FAQ
                                </NavLink>
                            </li>
                        </ul>
                    </NavMenu>
                </NavBar>
            </NavContainer>
        </>
    )
}

export default Navigation;
