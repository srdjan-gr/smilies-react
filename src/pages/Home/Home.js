import React from 'react'
import HomeSection from '../../components/HomeSection/HomeSection'
import SplideCarusel from '../../components/SplideCarusel/SplideCarusel'

const styleShowcase = {
    display: 'flex',
    flexDirection: 'row',
}

const Home = () => {
    return (
        <div>
            <SplideCarusel />
            <HomeSection />

        </div>
    )
}

export default Home