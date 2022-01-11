import React, {useState, useEffect} from 'react'
import {ScrollWrap} from './ScrollStyle'
import {useWindowScroll} from 'react-use'
import {BsArrowUp} from 'react-icons/bs'

function Scroll() {
    const {y: pageYOffset} = useWindowScroll();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (pageYOffset > 400){
            setVisible(true)
        } 
        else{
            setVisible(false)
        }
    }, [pageYOffset]);
    
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })


    if(!visible){
        return false
    }

    return (
        <>
            <ScrollWrap onClick={scrollToTop}>
                <div className="arrow">
                    <BsArrowUp/>
                </div>
            </ScrollWrap>
        </>
    )
}

export default Scroll
