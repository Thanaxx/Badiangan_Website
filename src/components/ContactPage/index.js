import React from 'react'
import Iframe from 'react-iframe'
import { ContWrap, ContTitle, ContDetails, ContBox, ContMap } from './Contactpagestyle'

const icons = [
    {
        icons: '/Pictures/icons/call.png',
        title: 'Call us at',
        detail: '837 657 8888'
    },

    {
        icons: '/Pictures/icons/loc.png',
        title: 'Poblacion, Badiangan',
        detail: 'Iloilo City'
    },

    {
        icons: '/Pictures/icons/mail.png',
        title: 'Email us at',
        detail: 'lgu.badiangan@gmail.com'
    }
]

function Contactspage() {
    return (
        <>
            <ContWrap data-aos="zoom-out">
                <ContTitle>
                    <h4>Reach us</h4>
                    <h1>LET'S CONNECT !</h1>
                    <p>We would love to hear all your concerns.</p>
                </ContTitle>

                <ContDetails>
                    {icons.map((item) => {
                        return(
                            <>
                                <ContBox>
                                    <img src={item.icons} alt="icon" />
                                    <h1>{item.title}</h1>
                                    <p>{item.detail}</p>
                                </ContBox>
                            </>
                        )
                    })}
                </ContDetails>

                    <ContMap>
                        <p>
                            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.69967922416!2d122.53481751417335!3d10.9860258582954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af054ab23f51d7%3A0x342b06b4206efd64!2sBadiangan%20Town%20Hall!5e0!3m2!1sen!2sph!4v1630590941747!5m2!1sen!2sph"
                            width="100%"
                            height="700px"
                            id="myId"
                            display="initial"
                            position="relative"
                            frameBorder="0"/>
                        </p>
                    </ContMap>
            </ContWrap>
        </>
    )
}

export default Contactspage
