// src/components/Modal.jsx
import React, { useState } from 'react'
import styled from 'styled-components'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(24, 24, 27, 0.4); /* Subtle charcoal dimming */
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1.5rem;
`

const ModalContainer = styled.div`
  background: var(--bg-surface, #ffffff);
  border: 1px solid var(--border-color, #e4e4e7);
  border-radius: 12px;
  width: 100%;
  max-width: 480px;
  padding: 2.5rem;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
  animation: modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes modalSlideUp {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: var(--text-secondary, #52525b);
  cursor: pointer;
  padding: 0.5rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition-quick, 0.2s);

  &:hover {
    color: var(--text-primary, #18181b);
  }
`

const FormTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: 1.75rem;
  font-weight: 500;
  color: var(--text-primary, #18181b);
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
`

const FormSubtitle = styled.p`
  font-family: var(--font-sans);
  font-size: 0.95rem;
  color: var(--text-secondary, #52525b);
  margin-bottom: 2rem;
  line-height: 1.5;
`

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  font-family: var(--font-sans);
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-primary, #18181b);
`

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background: var(--bg-base, #f9f9fb);
  border: 1px solid var(--border-color, #e4e4e7);
  border-radius: 6px;
  font-family: var(--font-sans);
  font-size: 0.95rem;
  color: var(--text-primary, #18181b);
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--text-primary, #18181b);
  }
`

const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  background: var(--bg-base, #f9f9fb);
  border: 1px solid var(--border-color, #e4e4e7);
  border-radius: 6px;
  font-family: var(--font-sans);
  font-size: 0.95rem;
  color: var(--text-primary, #18181b);
  cursor: pointer;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--text-primary, #18181b);
  }
`

const FileInputWrapper = styled.label`
  width: 100%;
  padding: 0.75rem 1rem;
  background: var(--bg-base, #f9f9fb);
  border: 1px dashed var(--border-color, #e4e4e7);
  border-radius: 6px;
  font-family: var(--font-sans);
  font-size: 0.9rem;
  color: var(--text-secondary, #52525b);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: var(--text-primary, #18181b);
  }

  span.file-name {
    color: var(--text-primary, #18181b);
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span.browse-label {
    flex-shrink: 0;
    font-size: 0.8rem;
    padding: 0.3rem 0.7rem;
    background: var(--text-primary, #18181b);
    color: #ffffff;
    border-radius: 4px;
  }
`

const HiddenFileInput = styled.input`
  display: none;
`

const FileHint = styled.p`
  font-size: 0.75rem;
  color: var(--text-muted, #a1a1aa);
  margin: 0.4rem 0 0;
`

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.85rem;
  background: var(--accent-gradient, #18181b);
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    discipline: 'web-dev',
  })
  const [resumeFile, setResumeFile] = useState(null)

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) setResumeFile(file)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.includes('@')) {
      alert('Please fill out all fields correctly.')
      return
    }

    if (!resumeFile) {
      alert('Please attach your resume before submitting.')
      return
    }

    setIsSubmitting(true)

    setTimeout(() => {
      console.log('Application Registered:', formData, 'Resume:', resumeFile)
      setIsSubmitting(false)
      setFormData({ name: '', email: '', discipline: 'web-dev' })
      setResumeFile(null)
      onClose()
    }, 800)
  }

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>

        <FormTitle>Join the Collective</FormTitle>
        <FormSubtitle>
          Submit your details to collaborate with our engineering team.
        </FormSubtitle>

        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor='name'>Full Name</Label>
            <Input
              type='text'
              id='name'
              value={formData.name}
              onChange={handleChange}
              required
              placeholder='Alex Morgan'
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor='email'>Email Address</Label>
            <Input
              type='email'
              id='email'
              value={formData.email}
              onChange={handleChange}
              required
              placeholder='alex@example.com'
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor='discipline'>Core Discipline</Label>
            <Select
              id='discipline'
              value={formData.discipline}
              onChange={handleChange}
            >
              <option value='web-dev'>Web Development (React / Next.js)</option>
              <option value='ui-ux'>UI/UX Design Systems</option>
              <option value='systems'>Systems Architecture</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label htmlFor='resume'>Resume / CV</Label>
            <FileInputWrapper htmlFor='resume'>
              <span className='file-name'>
                {resumeFile ? resumeFile.name : 'No file selected'}
              </span>
              <span className='browse-label'>Browse</span>
            </FileInputWrapper>
            <HiddenFileInput
              type='file'
              id='resume'
              accept='.pdf,.doc,.docx'
              onChange={handleFileChange}
            />
            <FileHint>PDF or Word, up to 5MB.</FileHint>
          </FormGroup>

          <SubmitButton type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Processing...' : 'Submit Application'}
          </SubmitButton>
        </form>
      </ModalContainer>
    </Overlay>
  )
}

export default Modal
