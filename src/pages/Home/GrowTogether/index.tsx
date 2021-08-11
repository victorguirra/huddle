import { Wrapper, Container, Image } from './styles';

import illustration from '../../../assets/images/illustrations/grow-together.svg';

export default function GrowTogether() {
    return(
        <Wrapper>
            <Container>
                <h1>Grow Together</h1>

                <p>
                    Generate meaningful discussions with your audience and build a <br/>
                    strong, loyal community. Think of the insighful conversations you <br/>
                    miss out on with a feedback form.
                </p>
            </Container>

            <Image src={ illustration } alt="Grow Together" />
        </Wrapper>
    )
}