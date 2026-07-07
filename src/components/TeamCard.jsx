// src/components/TeamCard.jsx
import React from 'react'
import styled from 'styled-components'
import { TeamCardWrapper } from '../assets/wrappers/TeamWrapper'

// Elegant Initials Avatar Placeholder
const InitialsAvatar = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-gradient);
  color: var(--bg-surface);
  font-family: var(--font-heading);
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  border: 2px solid var(--border-color);
  box-shadow: var(--shadow-hard-sm);
`

const TeamCard = ({ name, role, bio }) => {
  // Extract initials (e.g., "Kishore Ram Arunkumar" -> "KR")
  const getInitials = (str) => {
    if (!str) return ''
    const parts = str.trim().split(/\s+/)
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase()
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
  }

  return (
    <TeamCardWrapper>
      {/* Dynamic Avatar Render instead of broken img tags */}
      <InitialsAvatar>{getInitials(name)}</InitialsAvatar>

      <h3 className='team-member-name'>{name}</h3>
      <p className='team-member-role'>{role}</p>
      <p className='team-member-bio'>{bio}</p>

      <a href='#linkedin' className='linkedin-link'>
        Connect on LinkedIn
      </a>
    </TeamCardWrapper>
  )
}

export default TeamCard
