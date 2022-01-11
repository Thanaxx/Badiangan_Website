import React, {useState} from 'react'
import {NewsWrap, NewsTop, NewsNames, NewsItem} from './NewmainStyle'
import {news} from './data'
import {Link} from 'react-router-dom'

function Newsmain() {

    const [isVisible, setIsVisible] = useState(6)

    return (
        <>
            <NewsWrap data-aos="fade">
                <NewsTop>
                    <h3>News</h3>
                    <h1>BADIANGANS' DAILY NEWS</h1>
                    <h2>Lorem, sit amet adipisicing elit. Iure similique architecto hic. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure similique architecto hic. Soluta, ut eius obcaecati facilis a nobis asperiores!</h2>
                    <Link to='/news'><button>View more news</button></Link>
                </NewsTop>

                <NewsNames>
                    {news.slice(0, isVisible).map((item, index) => {
                        return(
                            <>
                                <NewsItem to="/news">
                                    <div className="AllNews">
                                        <img src={item.image} alt="images" />

                                        <div className="NewsText">
                                            <h3>{item.title}</h3>
                                            <p>{item.date}</p>
                                            <p>{item.author}</p>
                                        </div>
                                    </div>
                                </NewsItem>
                            </>
                        )
                    })}
                </NewsNames>
            </NewsWrap>
        </>
    )
}

export default Newsmain