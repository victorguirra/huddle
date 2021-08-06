import { Container } from './styles';

import Button from '../Button';

import logoImg from '../../assets/images/logo.svg';

export default function Header() {
    return(
        <Container>
            <img src={ logoImg } alt="Huddle" />

            <Button outline>Try it Free</Button>
        </Container>
    )
}