import { scroller } from 'react-scroll'
import styled, { keyframes } from 'styled-components'
import { Colors } from '../styles/Colors'
import { mobile } from '../styles/media-queries'

export const Arrow = ({ className }: { className?: string }) => (
  <span
    className={className}
    onClick={() =>
      scroller.scrollTo('program', { smooth: true, duration: 500 })
    }
  >
    <ArrowSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14">
      <path
        fill="none"
        fillRule="evenodd"
        stroke={Colors.white}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M22 2L12 12 2 2"
      />
    </ArrowSVG>
  </span>
)

const bounce = keyframes`
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`

const ArrowSVG = styled.svg`
    animation: ${bounce} 2s infinite;
    cursor: pointer;
    width: 25px;

    @media ${mobile} {
        display: none;
    }
`
