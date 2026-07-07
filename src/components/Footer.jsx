// src/components/Footer.jsx
import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  padding: 4rem 2rem;
  background: var(--bg-surface);
  border-top: 1px solid var(--border-color);
  text-align: center;
`

const FooterBrand = styled.h3`
  font-family: var(--font-heading);
  font-size: 1.25rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
`

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;

  a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.95rem;
    transition: var(--transition-quick);

    &:hover {
      color: var(--text-primary);
    }
  }
`

const Copyright = styled.p`
  color: var(--text-muted);
  font-size: 0.85rem;
`

const Footer = () => {
  return (
    <FooterContainer id='contact'>
      <FooterBrand>B&N Technologies</FooterBrand>
      <FooterLinks>
        <a href='#philosophy'>Philosophy</a>
        <a href='#platform'>Platform</a>
        <a href='#team'>Team</a>
        <a href='#careers'>Careers</a>
        <a href='#contact'>Contact</a>
      </FooterLinks>
      <Copyright>
        &copy; {new Date().getFullYear()} B&N Technologies. All rights reserved.
      </Copyright>
    </FooterContainer>
  )
}

export default Footer
