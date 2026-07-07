import styled from 'styled-components'

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  pointer-events: ${(props) => (props.$isOpen ? 'auto' : 'none')};
  transition: opacity 0.3s ease;

  .modal-backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(3, 3, 3, 0.85);
    backdrop-filter: blur(8px);
  }

  .modal-content-box {
    background: var(--bg-surface);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    width: 100%;
    max-width: 550px;
    padding: 2.5rem;
    position: relative;
    z-index: 2001;
    transform: ${(props) => (props.$isOpen ? 'scale(1)' : 'scale(0.95)')};
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  }

  .modal-close-btn {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    background: none;
    border: none;
    color: var(--text-secondary);
    font-size: 1.5rem;
    cursor: pointer;
    transition: var(--transition-quick);

    &:hover {
      color: var(--text-primary);
    }
  }

  .modal-title {
    font-family: var(--font-heading);
    font-size: 1.75rem;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }

  .modal-subtitle {
    font-family: var(--font-sans);
    color: var(--text-secondary);
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }

  /* Form Layout Styling Tokens */
  .form-group {
    margin-bottom: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: left;
  }

  label {
    font-family: var(--font-sans);
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--text-secondary);
  }

  input,
  select,
  textarea {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 0.75rem 1rem;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 0.95rem;
    transition: var(--transition-quick);

    &:focus {
      outline: none;
      border-color: var(--accent-cyan);
      background: rgba(255, 255, 255, 0.05);
    }
  }

  .submit-btn {
    width: 100%;
    background: var(--accent-gradient);
    border: none;
    border-radius: 8px;
    padding: 0.85rem;
    color: #000;
    font-weight: 600;
    font-family: var(--font-sans);
    cursor: pointer;
    margin-top: 1rem;
    transition: var(--transition-quick);

    &:hover {
      opacity: 0.9;
    }
  }
`
