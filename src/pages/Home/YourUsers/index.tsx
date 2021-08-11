import { 
    Wrapper, 
    BackgroundImg, 
    Container, 
    Content, 
    Image, 
} from './styles';

import bgTopImg from '../../../assets/images/background/desktop/section-top-desktop-2.svg';
import illustration from '../../../assets/images/illustrations/your-users.svg';

export default function YourUsers() {
    return(
        <Wrapper>
            <BackgroundImg src={ bgTopImg } alt="Wave" />

            <Container>
                <Content>
                    <h1>Your Users</h1>

                    <p>
                        It takes no time at all to integrate Huddle with your app's <br/>
                        authentication solution. This means, 
                        once signed in to your app, your <br/>
                        users can start chatting immediately.
                    </p>
                </Content>

                <Image src={ illustration } alt="Your Users" />
            </Container>
        </Wrapper>
    )
}