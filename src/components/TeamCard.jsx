import React from 'react'
import styled from 'styled-components'
import { TeamCardWrapper } from '../assets/wrappers/TeamWrapper'

const InitialsAvatar = styled.div`
  width: 56px;
  height: 56px;
  min-width: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-gradient);
  color: #ffffff;
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  border: 2px solid var(--border-color);
  box-shadow: var(--shadow-hard-sm);
`

const InfoCol = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`

const LinksRow = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

const IconLink = styled.a`
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--border-color);
  border-radius: 50%;
  color: var(--text-primary);
  text-decoration: none;
  font-size: 0.7rem;
  font-weight: 600;
  background: var(--bg-surface);
  transition: var(--transition-quick);

  &:hover {
    background: var(--accent-highlight);
    transform: translate(-2px, -2px);
    box-shadow: var(--shadow-hard-sm);
  }
`

const TeamCard = ({ name, role, github, linkedin }) => {
  const getInitials = (str) => {
    if (!str) return ''
    const parts = str.trim().split(/\s+/)
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase()
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
  }

  return (
    <TeamCardWrapper>
      <InitialsAvatar>{getInitials(name)}</InitialsAvatar>

      <InfoCol>
        <h3 className='team-member-name'>{name}</h3>
        <p className='team-member-role'>{role}</p>

        <LinksRow>
          {github && (
            <IconLink href={github} target='_blank' rel='noopener noreferrer' aria-label={`${name} on GitHub`}>
              GH
            </IconLink>
          )}
          {linkedin && (
            <IconLink href={linkedin} target='_blank' rel='noopener noreferrer' aria-label={`${name} on LinkedIn`}>
              in
            </IconLink>
          )}
        </LinksRow>
      </InfoCol>
    </TeamCardWrapper>
  )
}

export default TeamCard
