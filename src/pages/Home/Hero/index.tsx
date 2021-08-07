import { Container, Title, Description, Image } from './styles';

import Button from '../../../components/Button';

import illustrationImg from '../../../assets/images/illustrations/screen-mockups.svg';

export default function Hero() {
    return(
        <Container>
            <Title>
                Build The Community Your Fans Will Love
            </Title>

            <Description>
                Huddle re-imagines the way build communities. You have a <br />
                voice, but so does your audience. Create connections with your <br />
                users as you engage in genuine discussion.
            </Description>

            <Button>Get Started For Free</Button>

            <Image src={ illustrationImg } alt="Screen Mockups" />
        </Container>
    )
}