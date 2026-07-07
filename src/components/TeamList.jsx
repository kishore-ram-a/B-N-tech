import React, { useState } from 'react'
import styled from 'styled-components'
import { TeamSectionWrapper } from '../assets/wrappers/TeamWrapper'
import TeamCard from './TeamCard'
import { teamData, categories, domainToCategory } from '../data/Team'

const ToggleRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-bottom: 3rem;
`

const ToggleButton = styled.button`
  padding: 0.7rem 1.75rem;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.95rem;
  border: 2px solid var(--border-color);
  border-radius: 4px;
  cursor: pointer;
  color: ${({ $active }) => ($active ? '#ffffff' : 'var(--text-primary)')};
  background: ${({ $active }) =>
    $active ? 'var(--accent-gradient)' : 'var(--bg-surface)'};
  box-shadow: var(--shadow-hard-sm);
  transition: var(--transition-quick);

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: var(--shadow-hard-hover);
  }
`

const DomainHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.75rem;
`

const DomainTag = styled.span`
  display: inline-flex;
  align-items: center;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.15rem;
  color: var(--text-primary);
  white-space: nowrap;
`

const DomainLine = styled.div`
  flex: 1;
  height: 2px;
  background: var(--border-color);
`

const TeamList = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0])

  const members = teamData.filter(
    (m) => domainToCategory[m.domain] === activeCategory
  )

  return (
    <TeamSectionWrapper id='team'>
      <div className='section-header'>
        <h2 className='section-title'>Our Elite Collective</h2>
        <p className='section-subtitle'>
          25+ engineers, builders, marketers, and designers - organized by
          what they do best. Choose a domain to view its team.
        </p>
      </div>

      <ToggleRow>
        {categories.map((category) => (
          <ToggleButton
            key={category}
            type='button'
            $active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </ToggleButton>
        ))}
      </ToggleRow>

      <DomainHeader>
        <DomainTag>{activeCategory}</DomainTag>
        <DomainLine />
      </DomainHeader>

      <div className='team-grid-wrapper'>
        {members.map((member) => (
          <TeamCard key={member.id} {...member} />
        ))}
      </div>
    </TeamSectionWrapper>
  )
}

export default TeamList
