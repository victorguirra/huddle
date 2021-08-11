import { Wrapper, BackgroundImage, Container } from './styles';

import Button from '../../../components/Button';

import bgImg from '../../../assets/images/background/desktop/section-bottom-desktop-2.svg';

export default function Ready() {
    return(
        <Wrapper>
            <BackgroundImage src={ bgImg } alt="Wave" />

            <Container>
                <h1>Ready To Build Your Community</h1>

                <Button>Get Started For Free</Button>
            </Container>
        </Wrapper>
    )
}