import React, {useState} from 'react'
import ModalSpot from './ModalSpot'

function Touristmain({image, numA, title, details, numB, location, locname, numC, owner, ownerText}) {
    
    const [showSpot, setShowSpot] = useState(false)

    const openSpot = () => {
        setShowSpot(!showSpot)
    }
    
    return (
        <>
            <div className="team" onClick={openSpot}>
                <div className="theImage">
                    <img src={image} alt="" />

                    <div className="overlay-text">
                        <div className="text">
                        <h1>{title}</h1>
                        <p>{details}</p>
                        </div>
                    </div>
                </div>
            </div>

            <ModalSpot showSpot={showSpot} setShowSpot={setShowSpot} image={image} numA={numA} title={title}
            details={details} numB={numB} location={location} locname={locname} numC={numC} owner={owner} ownerText={ownerText} />
        </>
    )
}

export default Touristmain