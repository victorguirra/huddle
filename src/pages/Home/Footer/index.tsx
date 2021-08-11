import { Wrapper, BackgroundImage, Container } from './styles';

import bgImg from '../../../assets/images/background/desktop/footer-top-desktop.svg';

export default function Footer() {
    return(
        <Wrapper>
            <BackgroundImage src={ bgImg } alt="Wave" />
            
            <Container>
                <h1>Footer</h1>
            </Container>
        </Wrapper>
    )
}