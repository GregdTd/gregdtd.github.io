import { Tag as BaseTag } from 'antd'
import styled from 'styled-components'
import { CarPng, PlanePng, TrainPng } from '../assets/icons'
import { Colors } from '../styles/Colors'
import { SectionWrapper } from '../styles/Layout'
import { mobile } from '../styles/media-queries'
import { Pages } from '../utils/types'
export const Place: React.FC = () => {
    return (
        <SectionWrapper id={Pages.LOCATION}>
            <MainWrapper>
                <Wrapper>
                    <GoogleTitle>Église Notre Dame de Kedro</GoogleTitle>
                    <StyledGoogleFrame
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1345.9655645846701!2d-2.9452889612618542!3d47.56912840248482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x481011e2b3e53d0b%3A0x188d9b6a1ba0e0f7!2s%C3%89glise%20Notre-Dame%20de%20Locmariaquer!5e0!3m2!1sen!2sfr!4v1702234753928!5m2!1sen!2sfr"
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></StyledGoogleFrame>
                    <GoogleTitle>Lieu de réception</GoogleTitle>
                    <StyledGoogleFrame
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2688.8213638879993!2d-2.9647473!3d47.629603599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48101331dd572fd9%3A0x3f348baf0ac63b33!2zQ2jDonRlYXUgZGUgS2VyYW50csOp!5e0!3m2!1sen!2sfr!4v1702234411432!5m2!1sen!2sfr"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </Wrapper>
                <Wrapper>
                    <ColumnWrapper>
                        <Train src={TrainPng} />
                        <span>
                            Gare la plus proche - <b>Auray</b>
                        </span>
                        <span>
                            <Tag bordered={false} onClick={() => window.open('https://www.sncf-connect.com/app/home/search?userInput=Auray&destinationId=')}>
                                sncf-connect.com
                            </Tag>
                        </span>
                    </ColumnWrapper>
                    <ColumnWrapper>
                        <Car src={CarPng} />
                        <CarTextWrapper>
                            <CarText>
                                Depuis Lille<span>7h20</span>
                            </CarText>
                            <CarText>
                                Depuis Paris<span>5h00</span>
                            </CarText>
                            <CarText>
                                Depuis Orléans<span>4h40</span>
                            </CarText>
                            <CarText>
                                Depuis Nantes<span>1h30</span>
                            </CarText>
                        </CarTextWrapper>
                    </ColumnWrapper>
                    <ColumnWrapper>
                        <Plane src={PlanePng} />
                        <span>
                            Aéroport le plus proche - <b>Nantes</b>
                        </span>
                        <span>
                            <Tag bordered={false} onClick={() => window.open('https://www.skyscanner.fr/')}>
                                skyscanner.fr
                            </Tag>
                        </span>
                    </ColumnWrapper>
                </Wrapper>
            </MainWrapper>
        </SectionWrapper>
    )
}

const MainWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 16px;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`
const GoogleTitle = styled.span`
    font-size: 18px;
    font-weight: bold;
`

const StyledGoogleFrame = styled.iframe`
    width: 400px;
    height: 300px;
    border: 0;
    border-radius: 8px;

    @media ${mobile} {
        width: 200px;
        height: 150px;
    }
`

const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: justify;
`

const CarTextWrapper = styled.span`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const CarText = styled.span`
    width: 250px;
    display: flex;
    justify-content: space-between;
`

const Train = styled.img`
    width: 80px;
    height: 80px;
    margin-bottom: 16px;
`

const Car = styled.img`
    width: 100px;
    height: 100px;
`

const Plane = styled.img`
    width: 70px;
    height: 70px;
    margin-top: 24px;
    margin-bottom: 24px;
`

const Tag = styled(BaseTag)`
    background-color: ${Colors.light_green};
    color: ${Colors.black};
    margin: 16px 0px;
    cursor: pointer;
`
