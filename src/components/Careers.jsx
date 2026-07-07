// src/components/Careers.jsx
import React from 'react'
import styled from 'styled-components'

const CareersSection = styled.section`
  padding: 6rem 2rem;
  background-color: var(--bg-surface);
  border-top: 1px solid var(--border-color);
`

const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`

const Title = styled.h2`
  font-family: var(--font-heading);
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
`

const Subtitle = styled.p`
  font-family: var(--font-sans);
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.6;
`

const RolesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const RoleCard = styled.div`
  background: var(--bg-surface);
  border: 2px solid var(--border-color);
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 220px;
  transition: var(--transition-quick);
  box-shadow: var(--shadow-hard-sm);

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: var(--shadow-hard);
  }
`

const RoleMeta = styled.div`
  margin-bottom: 1.5rem;
`

const Department = styled.span`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  font-weight: 600;
`

const RoleTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 1.35rem;
  color: var(--text-primary);
  margin: 0.25rem 0 0.75rem;
`

const RoleLocation = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
`

const ActionButton = styled.button`
  align-self: flex-start;
  background: transparent;
  border: none;
  color: var(--text-primary);
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid var(--text-primary);
  padding-bottom: 2px;
  transition: var(--transition-quick);

  &:hover {
    color: var(--text-secondary);
    border-color: var(--text-secondary);
  }
`

const Careers = ({ onApplyClick }) => {
  return (
    <CareersSection id='careers'>
      <HeaderContainer>
        <Title>Open Engineering Roles</Title>
        <Subtitle>
          Join our decoupled workflow and build performant, highly modular
          systems.
        </Subtitle>
      </HeaderContainer>

      <RolesGrid>
        <RoleCard>
          <RoleMeta>
            <Department>Engineering</Department>
            <RoleTitle>Frontend Engineer (React / Next.js)</RoleTitle>
            <RoleLocation>Remote / Bengaluru, India</RoleLocation>
          </RoleMeta>
          <ActionButton onClick={onApplyClick}>Apply Now &rarr;</ActionButton>
        </RoleCard>

        <RoleCard>
          <RoleMeta>
            <Department>Design Systems</Department>
            <RoleTitle>UI/UX Product Designer</RoleTitle>
            <RoleLocation>Remote / Chennai, India</RoleLocation>
          </RoleMeta>
          <ActionButton onClick={onApplyClick}>Apply Now &rarr;</ActionButton>
        </RoleCard>
      </RolesGrid>
    </CareersSection>
  )
}

export default Careers
