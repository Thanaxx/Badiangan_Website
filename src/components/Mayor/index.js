import React from 'react'
import {MayorWrap, MayorIntro, MayorImage, MayorProfile, MayorSocIcons, MayorDetails} from './Mayorstyle'
import {Link} from 'react-router-dom'

const info = [
    {
        profile: '/Pictures/lgu/mayor.png',
        name: 'SERAFFIN M. VILLA JR.',
        position: 'Municipal Mayor',
        fb: '/Pictures/lgu/fb.png',
        ig: '/Pictures/lgu/instag.png',
        twitter: '/Pictures/lgu/tweet.png',
        numA: '01',
        labelA: 'Personal Life',
        bodyA: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore natus tempora, sapiente temporibus, quam ipsum quaerat fugit, repellat voluptatum non minus placeat accusamus qui laborum nisi molestiae eaque voluptas possimus?',
        numB: '02',
        labelB: 'Education',
        bodyB: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore natus tempora, sapiente temporibus, quam ipsum quaerat fugit, repellat voluptatum non minus placeat accusamus qui laborum nisi molestiae eaque voluptas possimus?',
        numC: '03',
        labelC: 'Politics',
        bodyC: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore natus tempora, sapiente temporibus, quam ipsum quaerat fugit, repellat voluptatum non minus placeat accusamus qui laborum nisi molestiae eaque voluptas possimus?',
    }
]

function Mayorpage() {
    return (
        <>
            <MayorWrap data-aos="zoom-out">
                {info.map((item) => {
                    return(
                        <>
                            <MayorIntro>
                                <MayorImage>
                                    <img src={item.profile} alt="mayor" />
                                </MayorImage>

                                <MayorProfile>
                                    <h2>{item.name}</h2>
                                    <h3>{item.position}</h3>

                                    <MayorSocIcons>
                                        <Link to='/'><img src={item.fb} alt="facebook"/></Link>
                                        <Link to='/'><img src={item.ig} alt="instagram"/></Link>
                                        <Link to='/'><img src={item.twitter} alt="twitter"/></Link>
                                    </MayorSocIcons>
                                </MayorProfile>
                            </MayorIntro>
                    

                            <MayorDetails>
                                <div className="mayorSection">
                                    <h6>{item.numA}</h6>
                                    <h2>{item.labelA}</h2>
                                    <h4>{item.bodyA}</h4>
                                </div>

                                <div className="mayorSection">
                                    <h6>{item.numB}</h6>
                                    <h2>{item.labelB}</h2>
                                    <h4>{item.bodyB}</h4>
                                </div>

                                <div className="mayorSection">
                                    <h6>{item.numC}</h6>
                                    <h2>{item.labelC}</h2>
                                    <h4>{item.bodyC}</h4>
                                </div>
                            </MayorDetails>
                        </>
                    )

                })}
            </MayorWrap>
        </>
    )
}

export default Mayorpage
