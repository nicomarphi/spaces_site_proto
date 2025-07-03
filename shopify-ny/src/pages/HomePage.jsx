import { useEffect } from 'react'
import HeroStatement from '../components/HeroStatement'
import EventCarousel from '../components/EventCarousel'
import SizzleReel from '../components/SizzleReel'
import UpcomingEventsGrid from '../components/UpcomingEventsGrid'
import OurSpaceCTA from '../components/OurSpaceCTA'

function HomePage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <HeroStatement />
            <EventCarousel />
            <SizzleReel />
            <UpcomingEventsGrid />
            <OurSpaceCTA />
        </>
    )
}

export default HomePage 