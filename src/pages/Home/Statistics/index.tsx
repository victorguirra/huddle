import { Wrapper, Container, Card } from './styles';

import communitiesIcon from '../../../assets/images/icons/communities.svg';
import messagessIcon from '../../../assets/images/icons/messages.svg';

export default function Statistics() {
    return(
        <Wrapper>
            <Container>
                <Card>
                    <img src={ communitiesIcon } alt="Communities" />
                    <h1>1.4k+</h1>
                    <span>Communities Formed</span>
                </Card>

                <Card>
                    <img src={ messagessIcon } alt="Messages" />
                    <h1>2.7m+</h1>
                    <span>Messages Sent</span>
                </Card>
            </Container>
        </Wrapper>
    )
}