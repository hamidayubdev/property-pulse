import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '@/assets/styles/globals.css'

export const metadata = {
    title: 'PropertyPulse | Find The Perfect Rental',
    description: 'Find your perfect rental property.',
    keywords: 'rental, property, find rentals, find properties'
}

const MainLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}

export default MainLayout
