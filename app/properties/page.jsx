import properties from '@/properties.json'
import PropertyCard from '../../components/PropertyCard'

const PropertiesPage = () => {
    return (
        <section className="bg-blue-50 px-4 pt-6 pb-10">
            <div className="container-xl lg:container m-auto">
                {properties.length === 0 ? <p>No properties found!</p> :
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {properties.map((property) => (
                            <PropertyCard key={property._id} property={property} />
                        ))}
                    </div>
                }
            </div>
        </section>
    )
}

export default PropertiesPage
