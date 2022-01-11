import React from 'react'
import {LguWrapper, LguText, LguCouncil, MayorInfo, TopMayor, CouncilInfo, BottomCouncil} from './Councilstyle'

const mayors = [
    {
        image: '/Pictures/lgu/mayor.png',
        name: 'SERAFFIN VILLA',
        position: 'Mayor'
    },

    {
        image: '/Pictures/lgu/mayor.png',
        name: 'WEWIN GAJE',
        position: 'Vice Mayor'
    }
]

const councilors = [
    {
        image: '/Pictures/lgu/mayor.png',
        name: 'Lorem Ipsum',
        position: 'SB Member'
    },

    {
        image: '/Pictures/lgu/mayor.png',
        name: 'Lorem Ipsum',
        position: 'SB Member'
    },

    {
        image: '/Pictures/lgu/mayor.png',
        name: 'Lorem Ipsum',
        position: 'SB Member'
    },

    {
        image: '/Pictures/lgu/mayor.png',
        name: 'Lorem Ipsum',
        position: 'SB Member'
    },

    {
        image: '/Pictures/lgu/mayor.png',
        name: 'Lorem Ipsum',
        position: 'SB Member'
    },

    {
        image: '/Pictures/lgu/mayor.png',
        name: 'Lorem Ipsum',
        position: 'SB Member'
    },

    {
        image: '/Pictures/lgu/mayor.png',
        name: 'Lorem Ipsum',
        position: 'SB Member'
    },

    {
        image: '/Pictures/lgu/mayor.png',
        name: 'Lorem Ipsum',
        position: 'SB Member'
    }
]

function Councilpage() {
    return (
        <>
           <LguWrapper data-aos="fade">
                <LguText>
                    <h3>Government</h3>
                    <h1>LGU OFFICIALS</h1>
                    <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet iusto sequi quia numquam, sint distinctio optio repudiandae, unde quaerat debitis quidem obcaecati eos tempore eius vero facere.</h2>
                </LguText>

                <LguCouncil>
               
                    <MayorInfo>
                        {mayors.map((mayor, index) => (
                            <>
                                <TopMayor>
                                    <img src={mayor.image} alt="mayor" />
                                    <h2>{mayor.name}</h2>
                                    <h3>{mayor.position}</h3>
                                </TopMayor>
                            </>
                        ))}
                    </MayorInfo>

                    <CouncilInfo>
                        {councilors.map((council) => (
                            <>
                                <BottomCouncil>
                                    <img src={council.image} alt="council" />
                                    <h2>{council.name}</h2>
                                    <h3>{council.position}</h3>
                                </BottomCouncil>
                            </>
                        ))}
                    </CouncilInfo>
                    
               
                </LguCouncil>
            </LguWrapper>
        </>
    )
}

export default Councilpage
