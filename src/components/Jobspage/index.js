import React from 'react'
import { BsCheckAll } from 'react-icons/bs'
import { JobsWrap, JobMain, JobsName, JobBox } from './Jobpagestyle'
import { jobnames } from './data'
import {Link} from 'react-router-dom'
import {FiSend} from 'react-icons/fi'

function Jobpage() {
    return (
        <>
            <JobsWrap data-aos="zoom-out">
                <div className="jobheader">
                    <h3>Prepare &</h3>
                    <h2>GET HIRED!</h2>
                </div>

                <JobMain>
                    <JobsName>
                        {jobnames.map((item) => {
                          return(
                            <>
                                <JobBox>
                                    <h1>{item.job}</h1>
                                    <p>{item.Location}</p>
                                    <p>{item.type}</p>
                                    <h3>{item.salary}</h3>
                                    <h2><BsCheckAll />{item.label}</h2>

                                    <ul>
                                        <li><h4>{item.reqA}</h4></li>
                                        <li><h4>{item.reqB}</h4></li>
                                        <li><h4>{item.reqC}</h4></li>
                                        <li><h4>{item.reqD}</h4></li>
                                    </ul>
                                    
                                    <div className='applyBtn'>
                                        <Link to="/application-form"><button>Apply Now <FiSend/> </button></Link>
                                    </div>
                                </JobBox>
                            </>
                          )
                        })}
                    </JobsName>
                </JobMain>
            </JobsWrap>
        </>
    )
}

export default Jobpage
