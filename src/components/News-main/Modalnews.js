import React from 'react'
import {NewsModalBox, NewsText, TopHeadline, LeftImage, RightDesc, BottomBody} from './NewmainStyle'
import {news} from './data'

function Modalnews({open, setopen, image, title}) {
    return (
        <>
            {open ? 
            <NewsModalBox setopen={setopen} data-aos="zoom-out">
  
            <h1>{title}</h1>
            <h1>{title}</h1>
            <h1>{title}</h1>
            <h1>{title}</h1>
            <h1>{title}</h1>
            <h1>{title}</h1>
     
        </NewsModalBox> : null }
        </>
    )
}

export default Modalnews
