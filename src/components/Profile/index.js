import React from 'react'
import {ProfileWrap, ProfileImg, ProfileInfo} from './Profilestyle'

const info = [
    {
        hall: '/Pictures/lgu/hall.jpg',
        history: 'History of Badiangan',
        hdetails: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore provident ipsam corrupti accusamus voluptate explicabo, dicta, minima atque ut, voluptatem ab. Nisi expedita placeat, excepturi amet similique corporis molestiae libero reprehenderit dignissimos incidunt quos molestias.',
        mission: 'Mission',
        mdetails: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore provident ipsam corrupti accusamus voluptate explicabo, dicta, minima atque ut, voluptatem ab. Nisi expedita placeat, excepturi amet similique corporis molestiae libero reprehenderit dignissimos incidunt quos molestias.',
        vision: 'Vision',
        vdetails: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore provident ipsam corrupti accusamus voluptate explicabo, dicta, minima atque ut, voluptatem ab. Nisi expedita placeat, excepturi amet similique corporis molestiae libero reprehenderit dignissimos incidunt quos molestias.',
        values: 'Values',
        valdetails: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore provident ipsam corrupti accusamus voluptate explicabo, dicta, minima atque ut, voluptatem ab. Nisi expedita placeat, excepturi amet similique corporis molestiae libero reprehenderit dignissimos incidunt quos molestias.'
    }
]

function Profilepage() {
    return (
        <>
            <ProfileWrap data-aos="zoom-out">
                {info.map((item) => {
                    return(
                        <>
                            <ProfileImg>
                                <img src={item.hall} alt="hall" />
                            </ProfileImg>

                            <ProfileInfo>
                                <div className="details">
                                    <h2>{item.history}</h2>
                                    <h3>{item.hdetails}</h3>
                                </div>

                                <div className="details">
                                    <h2>{item.mission}</h2>
                                    <h3>{item.mdetails}</h3>
                                </div>

                                <div className="details">
                                    <h2>{item.vision}</h2>
                                    <h3>{item.valdetails}</h3>
                                </div>

                                <div className="details">
                                    <h2>{item.values}</h2>
                                    <h3>{item.valdetails}</h3>
                                </div>
                            </ProfileInfo>
                        </>
                    )
                })}
            </ProfileWrap>
        </>
    )
}

export default Profilepage
