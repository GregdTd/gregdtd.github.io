import styled from 'styled-components'
import { Colors } from './Colors'

export const SectionWrapper: React.FC<{ title?: string; id: string; children?: React.ReactNode; className?: string }> = ({ title, id, children, className }) => {
    return (
        <Wrapper>
            <Section id={id} className={className}>
                {title && <Title>{title}</Title>}
                {children}
            </Section>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0px 16px;
    background-color: ${Colors.white};
`

const Section = styled.section`
    background-color: ${Colors.green};
    width: 100%;
    text-align: center;
    padding-top: 80px;
`

const Title = styled.h1`
    font-size: 36px;
`
