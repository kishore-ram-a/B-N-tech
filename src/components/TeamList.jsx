import React from 'react'
import { TeamSectionWrapper } from '../assets/wrappers/TeamWrapper'
import TeamCard from './TeamCard'
import { teamData } from '../data/Team'

const TeamList = () => {
  return (
    <TeamSectionWrapper id='team'>
      <div className='section-header'>
        <h2 className='section-title'>Our Elite Collective</h2>
        <p className='section-subtitle'>
          We are a decentralized community of engineers, builders, and designers
          launching deep-tech solutions.
        </p>
      </div>

      {/* Structural layout wrapper applying our CSS Grid configuration */}
      <div className='team-grid-wrapper'>
        {teamData.map((member) => (
          <TeamCard key={member.id} {...member} />
        ))}
      </div>
    </TeamSectionWrapper>
  )
}

export default TeamList
