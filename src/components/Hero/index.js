import React from 'react'
import { HeroWrapper, HeroDetails, HeroImage, HeroText, TextData } from './HeroStyle'
import {Link} from 'react-router-dom'

function Hero() {
    return (
        <>
            <HeroWrapper data-aos="zoom-out">
                <HeroDetails>
                    <p className="label">USWAG</p>
                    <p className="title">BANWANG BADIANGAN</p>
                    <p className="tag">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto eum veniam assumenda. Enim repellat modi officiis temporibus nulla at officia voluptas dolores id!</p>
                    <Link to='/tourism'><button>Explore the place</button></Link>
                </HeroDetails>

                <HeroImage>
                    <img src="/Pictures/Hero.png" alt="cover" />
                </HeroImage>
            </HeroWrapper>

            <HeroText data-aos="fade">
                <TextData>
                    <p>The <span> MUNICIPALITY OF BADIANGAN</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ea laborum totam hic accusamus unde voluptatem maxime tempora, praesentium nam? Ea et placeat molestiae sunt quasi, aliquam necessitatibus distinctio, atque excepturi hic eius quaerat at soluta eaque. Accusantium rem alias dolorem, rerum possimus velit repellat distinctio, totam debitis itaque eum! </p>
                </TextData>
            </HeroText>
        </>
    )
}

export default Hero
