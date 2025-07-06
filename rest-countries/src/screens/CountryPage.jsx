import { useNavigate, useParams } from 'react-router-dom';
import countries from '../../public/data.json';

const CountryDetail = () => {

  // Sample country data - Belgium

    const navigate = useNavigate()
    const { id } = useParams();

    const handleBack = () => {
    navigate(-1); 
    }
   
  
    // ✅ Find the country by name
    const country = countries.find(
      (c) => c.name.toLowerCase().replace(/\s+/g, '-') === id
    );
    
    if (!country) return <p className="p-8">Country not found</p>;
    
  return (
   
      // <main className="px-4 py-8 lg:px-20 lg:py-16">
      //   {/* Back Button */}
      //   <button
      //     onClick={handleBack}
      //     className={`flex items-center gap-2 px-6 py-2 mb-12 lg:mb-16 rounded shadow-md transition-colors `}
      //   >
      //     Back
      //   </button>

      //   {/* Country Details */}
      //   <div className="lg:flex lg:items-center lg:gap-16 xl:gap-24">
      //     {/* Flag */}
      //     <div className="mb-8 lg:mb-0 lg:flex-1 lg:max-w-lg">
      //       <div className="aspect-[3/2] w-full overflow-hidden rounded shadow-lg">
      //       <img
      //         src={country.flags?.png || country.flag || "/placeholder.svg"}
      //         alt={`${country.name} flag`}
      //         className="w-full h-full object-cover"
      //       />
      //       </div>
      //     </div>

      //     {/* Country Information */}
      //     <div className="lg:flex-1 lg:max-w-2xl">
      //       <h2 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8">{country.name}</h2>

      //       {/* Info Grid */}
      //       <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-2">
      //         {/* Left Column */}
      //         <div className="space-y-2 mb-8 lg:mb-0">
      //           <p className="text-sm lg:text-base">
      //             <span className="font-semibold">Native Name: </span>
      //             <span className="font-light">{country.nativeName}</span>
      //           </p>
      //           <p className="text-sm lg:text-base">
      //             <span className="font-semibold">Population: </span>
      //             <span className="font-light">{country.population}</span>
      //           </p>
      //           <p className="text-sm lg:text-base">
      //             <span className="font-semibold">Region: </span>
      //             <span className="font-light">{country.region}</span>
      //           </p>
      //           <p className="text-sm lg:text-base">
      //             <span className="font-semibold">Sub Region: </span>
      //             <span className="font-light">{country.subregion}</span>
      //           </p>
      //           <p className="text-sm lg:text-base">
      //             <span className="font-semibold">Capital: </span>
      //             <span className="font-light">{country.capital}</span>
      //           </p>
      //         </div>

      //         {/* Right Column */}
      //         <div className="space-y-2 mb-8 lg:mb-0">
      //           <p className="text-sm lg:text-base">
      //             <span className="font-semibold">Top Level Domain: </span>
      //             <span className="font-light">{country.topLevelDomain}</span>
      //           </p>
      //           <p className="text-sm lg:text-base">
      //             <span className="font-semibold">Currencies: </span>
      //             <span className="font-light">{country.currencies}</span>
      //           </p>
      //           <p className="text-sm lg:text-base">
      //             <span className="font-semibold">Languages: </span>
      //             <span className="font-light">{country.languages}</span>
      //           </p>
      //         </div>
      //       </div>

      //       {/* Border Countries */}
      //       <div className="mt-8 lg:mt-12">
      //         <div className="lg:flex lg:items-center lg:gap-4">
      //           <p className="text-sm lg:text-base font-semibold mb-4 lg:mb-0 lg:whitespace-nowrap">
      //             Border Countries:
      //           </p>
      //           <div className="flex flex-wrap gap-2">
      //             {country.borderCountries.map((country, index) => (
      //               <button
      //                 key={index}
      //                 className={`px-4 py-1 text-sm rounded shadow-md transition-colors 
                        
      //               `}
      //               >
      //                 {country}
      //               </button>
      //             ))}
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </main>
      <main className="px-4 py-8 lg:px-20 lg:py-16">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className={`flex items-center gap-2 px-6 py-2 mb-12 lg:mb-16 rounded shadow-md transition-colors`}
      >
        Back
      </button>

      {/* Country Details */}
      <div className="lg:flex lg:items-center lg:gap-16 xl:gap-24">
        {/* Flag */}
        <div className="mb-8 lg:mb-0 lg:flex-1 lg:max-w-lg">
          <div className="aspect-[3/2] w-full overflow-hidden rounded shadow-lg">
            <img
              src={country.flags?.png || country.flag || "/placeholder.svg"}
              alt={`${country.name} flag`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Country Information */}
        <div className="lg:flex-1 lg:max-w-2xl">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8">
            {country.name}
          </h2>

          {/* Info Grid */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-2">
            {/* Left Column */}
            <div className="space-y-2 mb-8 lg:mb-0">
              <p className="text-sm lg:text-base">
                <span className="font-semibold">Native Name: </span>
                <span className="font-light">{country.nativeName}</span>
              </p>
              <p className="text-sm lg:text-base">
                <span className="font-semibold">Population: </span>
                <span className="font-light">{country.population}</span>
              </p>
              <p className="text-sm lg:text-base">
                <span className="font-semibold">Region: </span>
                <span className="font-light">{country.region}</span>
              </p>
              <p className="text-sm lg:text-base">
                <span className="font-semibold">Sub Region: </span>
                <span className="font-light">{country.subregion}</span>
              </p>
              <p className="text-sm lg:text-base">
                <span className="font-semibold">Capital: </span>
                <span className="font-light">{country.capital}</span>
              </p>
            </div>

            {/* Right Column */}
            <div className="space-y-2 mb-8 lg:mb-0">
              <p className="text-sm lg:text-base">
                <span className="font-semibold">Top Level Domain: </span>
                <span className="font-light">
                  {country.topLevelDomain?.join(', ')}
                </span>
              </p>
              <p className="text-sm lg:text-base">
                <span className="font-semibold">Currencies: </span>
                <span className="font-light">
                  {country.currencies?.map(c => c.name).join(', ')}
                </span>
              </p>
              <p className="text-sm lg:text-base">
                <span className="font-semibold">Languages: </span>
                <span className="font-light">
                  {country.languages?.map(l => l.name).join(', ')}
                </span>
              </p>
            </div>
          </div>

          {/* Border Countries */}
          <div className="mt-8 lg:mt-12">
            <div className="lg:flex lg:items-center lg:gap-4">
              <p className="text-sm lg:text-base font-semibold mb-4 lg:mb-0 lg:whitespace-nowrap">
                Border Countries:
              </p>
              <div className="flex flex-wrap gap-2">
                {(country.borders || []).map((borderCode, index) => (
                  <button
                    key={index}
                    className="px-4 py-1 text-sm rounded shadow-md transition-colors"
                  >
                    {borderCode}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    
  )
}

export default CountryDetail
