// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const NavHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: rgba(250, 248, 242, 0.9); /* Paper white, tinted to match --bg-base */
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-bottom: 2px solid var(--border-color);
  z-index: 999;
`

const NavInner = styled.div`
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`

const BrandLogo = styled.a`
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-primary);
  text-decoration: none;
  letter-spacing: -0.01em;
  flex-shrink: 0;
`

const NavLinksGroup = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1100px) {
    display: none;
  }
`

const MenuToggle = styled.button`
  display: none;
  background: transparent;
  border: 2px solid var(--border-color);
  border-radius: 4px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  @media (max-width: 1100px) {
    display: flex;
  }

  span {
    display: block;
    width: 20px;
    height: 2px;
    background: var(--text-primary);
    position: relative;

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 20px;
      height: 2px;
      background: var(--text-primary);
    }
    &::before {
      top: -6px;
    }
    &::after {
      top: 6px;
    }
  }
`

const MobileOverlay = styled.div`
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  height: calc(100vh - 70px);
  background: var(--bg-base);
  z-index: 998;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

const MobileLink = styled.a`
  font-family: var(--font-sans);
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--text-primary);
  text-decoration: none;
`

const NavLink = styled.a`
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: 400;
  color: ${(props) =>
    props.$active ? 'var(--text-primary)' : 'var(--text-secondary)'};
  text-decoration: none;
  transition: var(--transition-quick);
  position: relative;
  padding: 0.25rem 0;

  &:hover {
    color: var(--text-primary);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${(props) => (props.$active ? '100%' : '0')};
    height: 1px;
    background-color: var(--text-primary);
    transition: var(--transition-quick);
  }

  &:hover::after {
    width: 100%;
  }
`

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const sections = ['philosophy', 'platform', 'team', 'careers', 'contact']

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            return
          }
        }
      }
      setActiveSection('')
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <NavHeader>
      <NavInner>
        <BrandLogo href='#'>B&N Technologies</BrandLogo>
        <NavLinksGroup>
          <NavLink href='#philosophy' $active={activeSection === 'philosophy'}>
            Philosophy
          </NavLink>
          <NavLink href='#platform' $active={activeSection === 'platform'}>
            Platform
          </NavLink>
          <NavLink href='#team' $active={activeSection === 'team'}>
            Team
          </NavLink>
          <NavLink href='#careers' $active={activeSection === 'careers'}>
            Careers
          </NavLink>
          <NavLink href='#contact' $active={activeSection === 'contact'}>
            Contact
          </NavLink>
        </NavLinksGroup>

        <MenuToggle
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label='Toggle menu'
        >
          <span />
        </MenuToggle>
      </NavInner>

      <MobileOverlay $isOpen={isMobileMenuOpen}>
        {['philosophy', 'platform', 'team', 'careers', 'contact'].map(
          (section) => (
            <MobileLink
              key={section}
              href={`#${section}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </MobileLink>
          )
        )}
      </MobileOverlay>
    </NavHeader>
  )
}

export default Navbar
