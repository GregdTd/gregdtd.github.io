import React from 'react'
import styled from 'styled-components'
import { Colors } from '../styles/Colors'

interface LinkProps {
  url: string
  children?: React.ReactNode
  className?: string
}

export const Link: React.FC<LinkProps> = ({ url, children, className }) => {
  return (
    <StyledLink
      className={className}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </StyledLink>
  )
}

const StyledLink = styled.a`
  font-size: 14px;
  color: ${Colors.black};
  text-decoration: underline;

  &:hover {
    color: ${Colors.light_green};
  }
`
