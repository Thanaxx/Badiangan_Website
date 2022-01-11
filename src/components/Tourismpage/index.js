import React from 'react'
import { TourismWrap, TourismMain, MainText, MainImages } from './Tourismstyle'
import { spots } from './data'
import Touristmain from './Touristmain'

function Tourismpage() {

    return (
        <>
            <TourismWrap data-aos="zoom-out">
                <TourismMain>
                    <MainText>
                        <h3>Check our</h3>
                        <h1>Top Destinations</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et earum pariatur beatae quod eum sequi minus, aut adipisci unde magni quae itaque mollitia laborum dolores eveniet optio magnam ea placeat?</p>
                    </MainText>

                    <MainImages>
                        {spots.map((item, index) => {
                            return(
                                <>
                                    <Touristmain
                                        id={item.id}
                                        image={item.image}
                                        numA={item.numA}
                                        title={item.title}
                                        details={item.details}
                                        numB={item.numB}
                                        location={item.location}
                                        locname={item.locname}
                                        numC={item.numC}
                                        owner={item.owner}
                                        ownerText={item.ownerText}
                                    />

                                </>
                            )
                        })}
                    </MainImages>
                </TourismMain>
            </TourismWrap>
        </>
    )
}

export default Tourismpage
