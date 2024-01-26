import styled from 'styled-components'
import { Pages, PagesTitles } from '../utils/types'
import { Colors } from './Colors'

export const SectionWrapper: React.FC<{
  id: Pages
  children?: React.ReactNode
  className?: string
}> = ({ id, children, className }) => {
  return (
    <Wrapper>
      <Section id={id} className={className}>
        {PagesTitles[id] && <Title>{PagesTitles[id]}</Title>}
        {children}
      </Section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    height: 100vh;
    padding: 0px 16px;
    background-color: ${Colors.white};
`

const Section = styled.section`
    background-color: ${Colors.green};
    width: 100%;
    height: 100%;
    text-align: center;
    padding-top: 80px;
`

const Title = styled.h1`
    font-size: 36px;
    font-weight: normal;
`
