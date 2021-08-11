import { Wrapper, Container, Content, Image, BackgroundImage } from './styles';

import illustraion from '../../../assets/images/illustrations/flowing-conversation.svg';
import bgImg from '../../../assets/images/background/desktop/section-top-desktop-2.svg';

export default function FlowingConversations() {
    return(
        <Wrapper>
            <Container>
                <Image src={ illustraion } alt="Flowing Conversations" />

                <Content>
                    <h1>Flowing Conversations</h1>

                    <p>
                        You wouldn't paginate a conversation in real life, so why do it online? <br/>
                        Our threads have just-in-time loading for a more natural flow.
                    </p>
                </Content>
            </Container>

            <BackgroundImage src={ bgImg } alt="Wave" />
        </Wrapper>
    )
}