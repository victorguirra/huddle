import { Container, BgImg } from './styles';

import bgDesktopImg from '../../../assets/images/background/desktop/section-bottom-desktop-1.svg';

export default function GrowTogether() {
    return(
        <Container>
            <img src={bgDesktopImg} alt="Texto" />
            <BgImg />
            <h1>Hello World</h1>
        </Container>
    )
}