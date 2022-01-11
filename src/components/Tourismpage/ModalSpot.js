import React from 'react'
import { MdClose } from 'react-icons/md'
import {ModalImage, SpotClose, SpotBody} from './Tourismstyle'

function ModalSpot({showSpot, setShowSpot, image, numA, title, details, numB, location, locname, numC, owner, ownerText}) {
    return (
        <>
            {showSpot ?
                <ModalImage data-aos="zoom-out">
                    <SpotClose>
                        <MdClose className="closeIcon" onClick={() => setShowSpot(false)}/>
                    </SpotClose>

                    <SpotBody>
                        <div className="SpotDetails">
                            <h4>{numA}</h4>
                            <h2>{title}</h2>
                            <h3>{details}</h3>

                            <h4>{numB}</h4>
                            <h2>{location}</h2>
                            <h3>{locname}</h3>

                            <h4>{numC}</h4>
                            <h2>{owner}</h2>
                            <h3>{ownerText}</h3>
                        </div>

                        <div className="SpotImage">
                            <img src={image} alt="" />
                        </div>
                    </SpotBody>
                </ModalImage> : null
                
            }
        </>
    )
}

export default ModalSpot
