// src/assets/wrappers/TeamWrapper.js
import styled from 'styled-components'

// 1. Define Card Wrapper First
export const TeamCardWrapper = styled.div`
  background: var(--bg-surface);
  border: 2px solid var(--border-color);
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: var(--transition-smooth);
  position: relative;
  box-shadow: var(--shadow-hard-sm);

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: var(--shadow-hard-hover);
  }

  .team-member-photo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1.5rem;
    border: 2px solid var(--border-color);
  }

  .team-member-name {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }

  .team-member-role {
    font-family: var(--font-sans);
    font-size: 0.9rem;
    color: var(
      --text-secondary
    ); /* Updated for crisp charcoal/alabaster theme */
    font-weight: 600;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .team-member-bio {
    font-family: var(--font-sans);
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.5;
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }

  .linkedin-link {
    display: inline-block;
    margin-top: auto;
    color: var(--text-primary);
    font-weight: 500;
    font-size: 0.9rem;
    text-decoration: none;
    border-bottom: 1px solid var(--text-muted);
    padding-bottom: 2px;
    transition: var(--transition-quick);
  }

  .linkedin-link:hover {
    color: var(--text-secondary);
    border-bottom-color: var(--text-secondary);
    transform: translateY(-1px);
  }
`

// 2. Define Section Wrapper Second
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
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 480px) {
      grid-template-columns: 1fr; /* Single column stack on small mobile screens */
      gap: 1.5rem;
    }
  }
`
