import React, {useState} from 'react'
import ModalBox from './ModalBox'
import {NewsBox} from './Newspagestyle'

function Newsnames({image, path, headline, date, author, intro, body}) {
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
                        <h3>{headline}</h3>
                        <p>{intro}</p>
                    </div>

                    <button>Read more</button>
                </div>
            </NewsBox>

            <ModalBox open={open} setOpen={setOpen} path={path} image={image} headline={headline} date={date} intro={intro} body={body} author={author} />
        </>
    )
}

export default Newsnames
