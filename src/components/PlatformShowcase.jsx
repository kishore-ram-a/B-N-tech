// src/components/PlatformShowcase.jsx
import React from 'react'
import styled from 'styled-components'

const ShowcaseSection = styled.section`
  padding: 6rem 2rem;
  background-color: var(--bg-base);
  border-bottom: 1px solid var(--border-color);
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

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
`

const ProjectRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid var(--border-color);
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`

const MetaBlock = styled.div`
  min-width: 200px;
`

const ProjectTag = styled.span`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  font-weight: 600;
`

const ProjectName = styled.h3`
  font-family: var(--font-heading);
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-top: 0.25rem;
`

const DescriptionBlock = styled.div`
  flex-grow: 1;
`

const DescriptionText = styled.p`
  font-family: var(--font-sans);
  color: var(--text-secondary);
  font-size: 1.05rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`

const TechBadgeGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`

const TechBadge = styled.span`
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.8rem;
  color: var(--text-primary);
`

const PlatformShowcase = () => {
  return (
    <ShowcaseSection id='platform'>
      <HeaderContainer>
        <Title>Core Infrastructure Platforms</Title>
        <Subtitle>
          Decoupled technical modules and toolchains optimized for high
          performance.
        </Subtitle>
      </HeaderContainer>

      <ProjectList>
        <ProjectRow>
          <MetaBlock>
            <ProjectTag>Ecosystem Architecture</ProjectTag>
            <ProjectName>Nexus UI</ProjectName>
          </MetaBlock>
          <DescriptionBlock>
            <DescriptionText>
              An enterprise-grade component compilation library built using
              custom atomic design structures, enforcing total compliance with
              lightweight rendering principles.
            </DescriptionText>
            <TechBadgeGroup>
              <TechBadge>React</TechBadge>
              <TechBadge>Next.js</TechBadge>
              <TechBadge>Styled Components</TechBadge>
            </TechBadgeGroup>
          </DescriptionBlock>
        </ProjectRow>

        <ProjectRow>
          <MetaBlock>
            <ProjectTag>Data Pipelines</ProjectTag>
            <ProjectName>Aether Stream</ProjectName>
          </MetaBlock>
          <DescriptionBlock>
            <DescriptionText>
              A high-throughput telemetry aggregator built to coordinate
              asynchronous state snapshots across isolated distributed database
              clusters without blocking execution trees.
            </DescriptionText>
            <TechBadgeGroup>
              <TechBadge>Node.js</TechBadge>
              <TechBadge>WebSockets</TechBadge>
              <TechBadge>Redis</TechBadge>
            </TechBadgeGroup>
          </DescriptionBlock>
        </ProjectRow>
      </ProjectList>
    </ShowcaseSection>
  )
}

export default PlatformShowcase
