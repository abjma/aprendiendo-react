import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {



    return (
        <section className='App'>


            <TwitterFollowCard
                userName="abjma">
                Abel José Montes
            </TwitterFollowCard>

            <TwitterFollowCard
                userName="midudev">
                Miguel Ángel Durán
            </TwitterFollowCard>

            <TwitterFollowCard
                userName="ajosem_">
                Abel José Montes
            </TwitterFollowCard>

        </section>
    )
}