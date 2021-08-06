import { Container } from './styles'

import Header from '../../components/Header';
import Hero from './Hero';

export default function Home() {
    return(
        <Container>
            <Header />
            <Hero />
        </Container>
    )
}