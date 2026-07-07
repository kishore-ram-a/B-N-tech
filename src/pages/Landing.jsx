import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Philosophy from '../components/Philosophy'
import PlatformShowcase from '../components/PlatformShowcase'
import TeamList from '../components/TeamList'
import Careers from '../components/Careers'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import StaticGridBg from '../components/StaticGridBg'

const Landing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)

  return (
    <>
      <Navbar />

      <section
        style={{
          position: 'relative',
          minHeight: '65vh',
          padding: '7rem 1.5rem 4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--bg-base)',
          overflow: 'hidden',
        }}
      >
        <StaticGridBg />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            maxWidth: '720px',
            margin: '0 auto',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              padding: '0.4rem 1rem',
              border: '2px solid var(--border-color)',
              background: 'var(--bg-surface)',
              boxShadow: 'var(--shadow-hard-sm)',
              color: 'var(--text-primary)',
              fontSize: '0.8rem',
              fontWeight: '600',
              letterSpacing: '0.02em',
              marginBottom: '1.75rem',
            }}
          >
            ● Pioneering Enterprise Software & AI
          </span>

          <h1
            style={{
              fontSize: 'clamp(2.25rem, 5.5vw, 3.5rem)',
              fontFamily: 'var(--font-heading)',
              color: 'var(--text-primary)',
              marginBottom: '1.25rem',
              fontWeight: '600',
              lineHeight: '1.15',
            }}
          >
            Engineering{' '}
            <span
              style={{
                position: 'relative',
                whiteSpace: 'nowrap',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  left: '-4px',
                  right: '-4px',
                  bottom: '6px',
                  height: '0.5em',
                  background: 'var(--accent-highlight)',
                  zIndex: 0,
                }}
              />
              <span style={{ position: 'relative', zIndex: 1 }}>
                Tomorrow's Digital Businesses
              </span>
            </span>
          </h1>
          <p
            style={{
              color: 'var(--text-secondary)',
              margin: '0 auto 2.5rem',
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              lineHeight: '1.6',
              maxWidth: '560px',
            }}
          >
            We are a collective of engineers, researchers, designers, and
            innovators building intelligent software products, AI-powered
            solutions, enterprise platforms, and digital experiences that
            transform businesses.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '3rem',
            }}
          >
            <button
              onClick={openModal}
              style={{
                padding: '0.85rem 2.5rem',
                background: 'var(--accent-gradient)',
                border: '2px solid var(--border-color)',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: '600',
                color: '#ffffff',
                boxShadow: 'var(--shadow-hard-sm)',
              }}
            >
              Join Our Team
            </button>
            
              href='#platform'
              style={{
                padding: '0.85rem 2.5rem',
                background: 'var(--bg-surface)',
                border: '2px solid var(--border-color)',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: '600',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                boxShadow: 'var(--shadow-hard-sm)',
              }}
            >
              Explore Our Work
            </a>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '2.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              paddingTop: '2rem',
              borderTop: '1px solid var(--border-color)',
            }}
          >
            {[
              { value: '25+', label: 'Engineers' },
              { value: '3', label: 'Projects Deployed' },
              { value: '100%', label: 'Remote-Ready' },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--text-primary)',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id='philosophy'>
        <Philosophy />
      </div>
      <div id='platform'>
        <PlatformShowcase />
      </div>
      <div id='team' className='landing-page-layout'>
        <TeamList />
      </div>
      <div id='careers'>
        <Careers onApplyClick={openModal} />
      </div>
      <div id='contact'>
        <Footer />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default Landing
