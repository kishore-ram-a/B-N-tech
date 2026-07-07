// src/components/Philosophy.jsx
import React from 'react'
import styled from 'styled-components'

const PhilosophySection = styled.section`
  padding: 6rem 2rem;
  background-color: var(--bg-surface);
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

const PrinciplesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
`

const PrincipleCard = styled.div`
  background: var(--bg-surface);
  border: 2px solid var(--border-color);
  border-radius: 8px;
  padding: 2.5rem;
  transition: var(--transition-quick);
  box-shadow: var(--shadow-hard-sm);

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: var(--shadow-hard);
  }
`

const IconWrapper = styled.div`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 1.25rem;
  font-weight: 600;
`

const CardTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 1.35rem;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
`

const CardText = styled.p`
  font-family: var(--font-sans);
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
`

const OriginBlock = styled.div`
  max-width: 800px;
  margin: 0 auto 3.5rem;
  text-align: center;
  padding: 1.5rem 2rem;
  border: 2px solid var(--border-color);
  background: var(--bg-base);
  box-shadow: var(--shadow-hard-sm);
`

const OriginText = styled.p`
  font-family: var(--font-sans);
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.7;
  margin: 0;

  strong {
    color: var(--text-primary);
  }
`

const Philosophy = () => {
  return (
    <PhilosophySection id='philosophy'>
      <HeaderContainer>
        <Title>Our Engineering Philosophy</Title>
        <Subtitle>
          Driven by curiosity, built for impact - from a study group to a
          growing technology company.
        </Subtitle>
      </HeaderContainer>

      <OriginBlock>
        <OriginText>
          The "B" in B&N stands for <strong>Balaji</strong>, inspired by the
          founder's father, whose belief was that success is measured by the
          lives we impact.
        </OriginText>
      </OriginBlock>

      <PrinciplesGrid>
        <PrincipleCard>
          <IconWrapper>01 /</IconWrapper>
          <CardTitle>Learn Relentlessly</CardTitle>
          <CardText>
            Continuous education is the foundation of innovation.
          </CardText>
        </PrincipleCard>

        <PrincipleCard>
          <IconWrapper>02 /</IconWrapper>
          <CardTitle>Build Fearlessly</CardTitle>
          <CardText>
            Engineering complex systems without fear of failure.
          </CardText>
        </PrincipleCard>

        <PrincipleCard>
          <IconWrapper>03 /</IconWrapper>
          <CardTitle>Create Meaningful Impact</CardTitle>
          <CardText>
            Technology is a vehicle for social and economic good.
          </CardText>
        </PrincipleCard>
      </PrinciplesGrid>
    </PhilosophySection>
  )
}

export default Philosophy
