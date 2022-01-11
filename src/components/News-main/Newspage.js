import React, {useState} from 'react'
// import Modalnews from './Modalnews'
import {NewsBox} from './NewmainStyle'

function Newspage({image, path, title, date, author, intro, body}) {

    const [open, setOpen] = useState(false)

    const opening = () => {
        setOpen(!open)
    }
    return (
        <>
            <NewsBox to={path} onClick={opening}>
                <div className="Allnews">
                    <img src={image} alt="news" />
                            
                    <div className="NewsText">
                        <h3>{title}</h3>
                        <p>{date}</p>
                        <p>{author}</p>
                    </div>
                </div>
            </NewsBox>

            {/* <Modalnews open={open} setOpen={setOpen} path={path} image={image} title={title} /> */}
        </>
    )
}

export default Newspage