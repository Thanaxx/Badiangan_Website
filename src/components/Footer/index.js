import React from 'react'
import {FooterWrap, FooterLinks, LinkTitle, LinkItems, FooterIcons, Linknames, Socmed, FooterRights} from './FooterStyle'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <>
            <FooterWrap>
                <FooterLinks>
                    <LinkTitle>
                        <h2>REPUBLIC OF THE PHILLIPPINES</h2>
                        <h3>All content in the pubic domain unless otherwise stated.</h3>
                    </LinkTitle>

                    <Linknames>
                        <LinkItems>
                            <h3>MENU</h3>
                            <Link to='/news'>News</Link>
                            <Link to='/jobs'>Jobs</Link>
                            <Link to='/tourism'>Tourism</Link>
                        </LinkItems>

                        <LinkItems>
                            <h3>GOVERNMENT</h3>
                            <Link to='/mayor'>Mayor</Link>
                            <Link to='/vicemayor'>Vice Mayor</Link>
                            <Link to='/council'>Council</Link>
                            <Link to='/profile'>Profile</Link>
                        </LinkItems>

                        <LinkItems>
                            <h3>GET HELP</h3>
                            <Link to='contact'>Contact</Link>
                            <Link to='faq'>Faq</Link>
                        </LinkItems>
                    </Linknames>
                </FooterLinks>
                    
                    <hr />

                <FooterIcons>
                    <Socmed>
                        <Link to='/'><img src="/Pictures/icons/Fb.svg" alt="facebook" /></Link>
                        <Link to='/'><img src="/Pictures/icons/insta.svg" alt="instagram" /></Link>
                        <Link to='/'><img src="/Pictures/icons/twitter.svg" alt="twitter" /></Link>
                    </Socmed>

                    <FooterRights>
                        <h2>Copyright © 2021 Badiangan All Rights Reserved</h2>
                    </FooterRights>
                </FooterIcons>
            </FooterWrap>
        </>
    )
}

export default Footer
