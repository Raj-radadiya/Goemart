import React from 'react'
import './team.scss'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

export default function OurTeam({ member }) {
    return (
        <div className="teamCard">
            <div className="memberImage">
                <img src={member.image} alt={member.name} />
            </div>
            <div className="memberInfo">
                <h3>{member.name}</h3>
                <p>{member.position}</p>
            </div>
            <div className="socialLinks">
                <a href={member.facebook} className="social-icon">
                    <FaFacebookF />
                </a>
                <a href={member.twitter} className="social-icon">
                    <FaTwitter />
                </a>
                <a href={member.linkedin} className="social-icon">
                    <FaLinkedinIn />
                </a>
                <a href={member.youtube} className="social-icon">
                    <FaYoutube />
                </a>
            </div>
        </div>
    )
}
