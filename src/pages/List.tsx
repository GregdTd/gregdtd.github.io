import styled from 'styled-components'
import { Link as BaseLink } from '../components/Link'
import { SectionWrapper } from '../styles/Layout'
import { Pages } from '../utils/types'

export const List: React.FC = () => (
  <SectionWrapper id={Pages.LIST}>
    <Wrapper>
      <Link url="https://www.millemercismariage.com/gregetjulie/mariage-de-julie-legrand-et-gregoire-de-trogoff.html">
        🔗 Lien vers mille mercis mariage
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
