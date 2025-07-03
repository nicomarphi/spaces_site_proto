import { useEffect } from 'react'
import FAQs from '../components/FAQs'

function FAQsPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="min-h-screen bg-black pt-16">
            <FAQs />
        </div>
    )
}

export default FAQsPage 