import React from 'react'
import {JobWrapper, JobImage, JobText, JobContainer} from './JobStyle'
import {Link} from 'react-router-dom'

function Jobs() {
    return (
        <>
            <JobWrapper data-aos="fade">
                <JobContainer>
                    <JobImage>
                        <img src="/Pictures/job.png" alt="job" />
                    </JobImage>

                    <JobText>
                        <h3>Jobs</h3>
                        <h1>CAREER OPENINGS</h1>
                        <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, id cumque veritatis dignissimos optio aperiam ipsum iure cum sed quam autem, error provident, voluptatem odit!</h2>
                        <Link to='/jobs'><button>See job offers</button></Link>
                    </JobText>
                </JobContainer>
            </JobWrapper>
        </>
    )
}

export default Jobs
