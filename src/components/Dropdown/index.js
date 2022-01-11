import React, {useState} from 'react'
import { links } from './data'
import { Link } from 'react-router-dom'
import './DropdownStyle.css'

function Dropdown() {

    const [click, setClick] = useState(false)

    const clickDrop = () => {
        setClick(!click)
    }

    return (
        <>
            <ul
                onClick={clickDrop}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
            >
                {links.map((item, index) => {
                    return(
                        <>
                            <li key={index}>
                                <Link
                                    className={item.cname}
                                    to={item.path}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        </>
                    )
                })}
            </ul>
        </>
    )
}

export default Dropdown
