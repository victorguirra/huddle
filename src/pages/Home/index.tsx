import { Container } from './styles'

import Header from '../../components/Header';
import Hero from './Hero';
import Statistics from './Statistics';

export default function Home() {
    return(
        <Container>
            <Header />
            <Hero />
            <Statistics />
        </Container>
    )
}