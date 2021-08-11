import { Wrapper, Content, Container, Image, BackgroundImage } from './styles';

import illustration from '../../../assets/images/illustrations/grow-together.svg';
import bgImg from '../../../assets/images/background/desktop/section-bottom-desktop-1.svg';

export default function GrowTogether() {
    return(
        <Wrapper>
            <Content>
                <Container>
                    <h1>Grow Together</h1>

                    <p>
                        Generate meaningful discussions with your audience and build a <br/>
                        strong, loyal community. Think of the insighful conversations you <br/>
                        miss out on with a feedback form.
                    </p>
                </Container>

                <Image src={ illustration } alt="Grow Together" />
            </Content>

            <BackgroundImage src={ bgImg } alt="Wave" />
        </Wrapper>
    )
}