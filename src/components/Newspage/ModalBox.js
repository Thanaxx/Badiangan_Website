import React from 'react'
import {NewsModalBox, NewsClose, NewsText, TopHeadline, LeftImage, RightDesc, BottomBody} from './ModalStyle'
import {GrClose} from 'react-icons/gr'

function ModalBox({open, setOpen, image, headline, intro, date, body, author}) {
    return (
        <>
            { open ?
                <NewsModalBox data-aos='fade'>
                    <NewsClose>
                        <GrClose className="closenews" onClick={() => setOpen(false)} />
                    </NewsClose>

                    <NewsText>
                       <TopHeadline>
                            <LeftImage>
                                <img src={image} alt="hghgh" />
                            </LeftImage>

                            <RightDesc>
                                <h1>{headline}</h1>
                                <p>{author}</p>
                                <p>{date}</p>
                                <h3>{intro}</h3>
                            </RightDesc>
                       </TopHeadline>

                       <BottomBody>
                            <h3>{body}</h3>
                       </BottomBody>
                    </NewsText>
                </NewsModalBox> : null}
        </>
    )
}

export default ModalBox
