import InfoBoxes from '@/components/InfoBoxes';
import Hero from '@/components/Hero';
// import HomeProperties from '@/components/HomeProperties';

const HomePage = async () => {
    return (
        <div>
            <Hero />
            <InfoBoxes />
            {/* <HomeProperties /> */}
        </div>
    )
}

export default HomePage
