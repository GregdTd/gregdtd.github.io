import styled from 'styled-components'

export const SectionWrapper: React.FC<{ title: string; id: string; children?: React.ReactNode }> = ({ title, id, children }) => {
    return (
        <Section id={id}>
            <Title>{title}</Title>
            {children}
        </Section>
    )
}
const Section = styled.section`
    height: 100vh;
    width: 100%;
    text-align: center;
    padding-top: 80px;
`

const Title = styled.h1`
    font-size: 36px;
`
