import React from 'react'
import './teamMember.scss'
import OurTeam from '../../../components/ourTeamCard'
import { TeamMemberDetails } from '../../../dataset/herobannerSlider'

export default function TeamMember() {
    return (
        <>
            <div className="container">
                <div className="commonPadding">
                    <div className="ourTeamTitle">
                        <h6>Our Team</h6>
                        <h2>Meet Our Expert <span>Team</span> </h2>
                    </div>
                    <div className='teamMember'>
                        {TeamMemberDetails.map((el, index) => {
                            return (
                                <OurTeam key={index} member={el} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
