// src/components/StaticGridBg.jsx
import React from 'react'
import styled from 'styled-components'

const GridBackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  background-color: var(--bg-base);

  /* Minimalist Static Tech Grid Line Patterns optimized for light themes */
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px);
  background-size: 50px 50px;
  background-position: center center;

  /* Subtle vignette masking edge bloom */
  mask-image: radial-gradient(circle at center, black 40%, transparent 90%);
  -webkit-mask-image: radial-gradient(
    circle at center,
    black 40%,
    transparent 90%
  );
`

const StaticGridBg = () => {
  return <GridBackgroundWrapper />
}

export default StaticGridBg
