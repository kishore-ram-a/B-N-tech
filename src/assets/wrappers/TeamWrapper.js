import styled from 'styled-components'

export const TeamCardWrapper = styled.div`
  background: var(--bg-surface);
  border: 2px solid var(--border-color);
  border-radius: 8px;
  padding: 1.1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  text-align: left;
  transition: var(--transition-smooth);
  position: relative;
  box-shadow: var(--shadow-hard-sm);

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: var(--shadow-hard-hover);
  }

  .team-member-name {
    font-family: var(--font-heading);
    font-size: 1rem;
    color: var(--text-primary);
    margin-bottom: 0.2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .team-member-role {
    font-family: var(--font-sans);
    font-size: 0.75rem;
    color: var(--text-secondary);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const TeamSectionWrapper = styled.section`
  padding: 6rem 2rem;
  background-color: var(--bg-base);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }

  .section-header {
    text-align: center;
    margin-bottom: 4rem;

    @media (max-width: 768px) {
      margin-bottom: 2.5rem;
    }
  }

  .section-title {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    color: var(--text-primary);
    margin-bottom: 1rem;
    letter-spacing: -0.02em;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .section-subtitle {
    font-family: var(--font-sans);
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
    font-size: 1.1rem;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 0.95rem;
    }
  }

  .team-grid-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1.25rem;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
`
