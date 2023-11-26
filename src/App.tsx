import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';
import NavigationBar from './components/NavBar';


const BaseSection: React.FC<{title: string, id:string, className?: string}> = ({title, id, className}) => (<div id={id} className={className}>{title}</div>)

export const App = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <ScrollLink to="section1" smooth={true} duration={500}>
              Section 1
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="section2" smooth={true} duration={500}>
              Section 2
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="section3" smooth={true} duration={500}>
              Section 3
            </ScrollLink>
          </li>
        </ul>
      </nav>
    <NavigationBar/>
      <Section id="section1" title="Section 1" />
      <Section id="section2" title="Section 2" />
      <Section id="section3" title="Section 3" />

      <button onClick={scrollToTop}>Scroll to Top</button>
    </div>
  );
};

export default App;

const Section = styled(BaseSection)`
height: 800px
`
