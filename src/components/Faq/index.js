import React, {useState} from 'react'
import { question } from './data'
import { RiArrowDownSLine, RiArrowRightSLine } from 'react-icons/ri'
import { FaqWrap, WrapText, WrapQuestions, QuestionData, WrapQuest, Dropdown } from './Faqstyle'

function Faq() {

    const [click, setClick] = useState(false);

    const toggle = index => {
        if(click === index) {
            return setClick(null)
        }
        setClick(index)
    } 

    return (
        <>
            <FaqWrap data-aos="zoom-out">
                <WrapText>
                    <h3>Let's discuss</h3>
                    <h1>Frequently asked questions</h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sed voluptates voluptate recusandae laborum veritatis culpa numquam ipsa iure ab ipsum repellendus fugit architecto nam nulla, labore ducimus aperiam expedita?</p>
                </WrapText>
                
                <WrapQuestions>
                    <QuestionData>
                       {question.map((item, index) => {
                           return(
                               <>
                                    <WrapQuest onClick={() => toggle(index)} key={index}>
                                        <h3>{item.quest}</h3>
                                        <span>{click === index ?  <RiArrowDownSLine/> : <RiArrowRightSLine/> }</span>
                                    </WrapQuest>

                                    {click === index ? (
                                        <Dropdown>
                                            <p>{item.answer}</p>
                                        </Dropdown>
                                    ) : null}
                               </>
                           )
                       })}
                    </QuestionData>
                </WrapQuestions>
            </FaqWrap>
        </>
    )
}

export default Faq
