import styled from 'styled-components'
import { Link as BaseLink } from '../components/Link'
import { SectionWrapper } from '../styles/Layout'
import { Pages } from '../utils/types'

export const List: React.FC = () => (
  <SectionWrapper id={Pages.LIST}>
    <Wrapper>
    <Link url="https://www.millemercismariage.com/gregetjulie/liste.html">
        🔗 Lien vers la liste
      </Link>
    </Wrapper>
  </SectionWrapper>
)

const Wrapper = styled.div`
  padding-bottom: 80px;
`

const Link = styled(BaseLink)`
  font-size: 20px;
`
