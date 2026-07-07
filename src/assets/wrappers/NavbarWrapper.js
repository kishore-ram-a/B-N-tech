import styled from 'styled-components'

export const NavbarWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: ${(props) =>
    props.$isScrolled ? 'rgba(3, 3, 3, 0.85)' : 'transparent'};
  backdrop-filter: ${(props) => (props.$isScrolled ? 'blur(12px)' : 'none')};
  border-bottom: 1px solid
    ${(props) => (props.$isScrolled ? 'var(--border-color)' : 'transparent')};
  transition: var(--transition-smooth);

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1.25rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-primary);
    text-decoration: none;
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 1.25rem;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  .nav-link {
    color: var(--text-secondary);
    text-decoration: none;
    font-family: var(--font-sans);
    font-size: 0.95rem;
    transition: var(--transition-quick);

    &:hover {
      color: var(--text-primary);
    }
  }

  /* Hamburger Menu Button */
  .menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    flex-direction: column;
    gap: 6px;

    span {
      display: block;
      width: 24px;
      height: 2px;
      background-color: var(--text-primary);
      transition: var(--transition-quick);
    }

    &.active span:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    &.active span:nth-child(2) {
      opacity: 0;
    }
    &.active span:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }

  /* Mobile Side Drawer Overlay */
  .mobile-nav-overlay {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background: var(--bg-surface);
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    transform: translateX(100%);
    transition: var(--transition-smooth);

    &.active {
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
    .menu-toggle {
      display: flex;
      z-index: 1001;
    }
  }
`
