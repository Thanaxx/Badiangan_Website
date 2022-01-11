import React, {useState} from 'react'
import {NewsWrap, NewsSearch, NewsBody, ViewMoreBtn} from './Newspagestyle'
import {news} from '../News-main/data'
import {BiSearch} from 'react-icons/bi'
import Newsnames from './Newsnames'


function News() {

    const [isVisible, setIsVisible] =useState(4)
    const [searchNews, setSearchNews] = useState("")

    const showMoreNews = () => {
        setIsVisible((prevValue) => prevValue + 2)
    }

    return (
        <>
            <NewsWrap data-aos="zoom-out">
                <NewsSearch>
                    <h2>BALITA SANG BANWA</h2>

                    <div className="searchBox">
                        <input type="text" 
                        placeholder="Search news..."
                        onChange={(event) => {
                            setSearchNews(event.target.value)
                        }}
                        />

                        <div className="search">
                            <BiSearch/>
                        </div>
                    </div>
                </NewsSearch>
                
                
                <NewsBody>
                    {news.filter((item)=> {
                        if (searchNews === ""){
                            return item
                        } else if (item.title.toLowerCase().includes(searchNews.toLowerCase())) {
                            return item
                        }

                    }).slice(0, isVisible).map((item, index) => {
                        return(
                            <>
                                <Newsnames
                                    key={item.id}
                                    image={item.image}
                                    headline={item.title}
                                    date={item.date}
                                    author={item.author}
                                    intro={item.intro}
                                    body={item.body}
                                />
                            </>
                        );
                    })}
                </NewsBody>

                <ViewMoreBtn>
                    <button onClick={showMoreNews} className="viewNews">Load more news</button>
                </ViewMoreBtn>
            </NewsWrap>
        </>
    )
}

export default News