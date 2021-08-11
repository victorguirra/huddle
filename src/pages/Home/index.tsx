import { Container } from './styles'

import Header from '../../components/Header';
import Hero from './Hero';
import Statistics from './Statistics';
import GrowTogether from './GrowTogether';
import FlowingConversations from './FlowingConversations';
import YourUsers from './YourUsers';
import Ready from './Ready';

export default function Home() {
    return(
        <Container>
            <Header />
            <Hero />
            <Statistics />
            <GrowTogether />
            <FlowingConversations />
            <YourUsers />
            <Ready />
        </Container>
    )
}