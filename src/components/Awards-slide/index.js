import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'
import {SlideContainer, SlideNum, SlideMain} from './AwardStyle'
import { text } from './data'
import {AiFillStar} from 'react-icons/ai'

function Awards() {
    return (
        <>
          <SlideContainer>
              <SlideMain>
                <Slide>
                    {text.map((texts, index) => (
                        <SlideNum key={index}>
                            <div className="slidename">
                                <img src={texts.image} alt="slideimage" />
                                
                                <div className="textSlide">
                                    <h2>{texts.award}</h2>
                                    <hr/>
                                    
                                    <div className="stars">
                                        <AiFillStar className="starname" />
                                        <AiFillStar className="starname" />
                                        <AiFillStar className="starname" />
                                        <AiFillStar className="starname" />
                                        <AiFillStar className="starname" />
                                    </div>

                                    <p>{texts.caption}</p>
                                </div>
                            </div>
                        </SlideNum>
                    ))}
                </Slide>
              </SlideMain>
          </SlideContainer>
        </>
    )
}

export default Awards
