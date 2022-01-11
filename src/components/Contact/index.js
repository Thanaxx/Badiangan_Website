import React from 'react'
import {ContactContainer, ContactWrap, ContText, ContButton} from './ContactStyle'
import {Link} from 'react-router-dom'

function Contact() {
    return (
        <>
            <ContactContainer data-aos="fade">
                <ContactWrap>
                    <ContText>
                        <h3>Contact Us</h3>
                        <h1>WE WANT TO  HEAR ALL YOUR CONCERNS</h1>
                        <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos, debitis earum reiciendis eos ipsum! Quas, inventore aspernatur! Aspernatur dicta eveniet cum. Suscipit, deleniti qui.</h2>
                    </ContText>

                    <ContButton>
                        <Link to='/contact'><button>Message us</button></Link>
                    </ContButton>
                </ContactWrap>
            </ContactContainer>  
        </>
    )
}

export default Contact
