import styled from 'styled-components'

export const Welcome: React.FC = () => {
    return (
        <Wrapper>
            <Title>
                Bienvenue sur le site du Mariage de<Surname>Julie et Grégoire</Surname>
            </Title>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    width: 100%;
    text-align: center;
`

const Title = styled.h1`
    font-size: 28px;
`

const Surname = styled.div`
    font-family: 'retro-signature';
    font-size: 90px;
`
