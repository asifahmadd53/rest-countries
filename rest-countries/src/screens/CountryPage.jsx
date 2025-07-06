import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ThemeContext from '../context/ThemeContext';
import { backArrow, backArrowLight } from '../constants/icons';
import { useContext, useEffect, useState } from 'react';

const CountryDetail = () => {

  // Sample country data - Belgium
  const {theme} = useContext(ThemeContext);

    const navigate = useNavigate()
    const { id } = useParams();
    const [countries, setCountries] = useState([]);
    const handleBack = () => {
    navigate(-1); 
    }
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get('/data.json'); // ✅ This fetches from public/data.json
          setCountries(res.data);
        } catch (err) {
          console.error('Failed to load country data:', err);
        }
      };
      fetchData();
    }, []);
   
  
    // ✅ Find the country by name
    const country = countries.find(
      (c) => c.name.toLowerCase().replace(/\s+/g, '-') === id
    );
    
    if (!country) return <p className="p-8">Country not found</p>;
    
   

  return (
   
    <main className="px-4 py-8 lg:px-20 lg:py-16">
    {/* Back Button */}
    <button
      onClick={handleBack}
      className="flex items-center gap-2 px-6 py-2 mb-12 lg:mb-16 rounded shadow-md transition-colors"
    >
      <img className='w-3 h-3' src={ theme === 'light' ? backArrow : backArrowLight} alt="" />
      Back
    </button>

    {/* Country Details */}
    <div className="lg:flex sm:items-center sm:justify-center lg:gap-16 xl:gap-24 ">
      {/* Flag */}
      <div className="mb-8 lg:mb-0 lg:flex-1 lg:max-w-lg">
        <div className="aspect-[3/2] mx-auto lg:mx-0 sm:justify-center w-full sm:w-[70%] overflow-hidden rounded shadow-lg">
          <img
            src={country.flags?.png || country.flag || '/placeholder.svg'}
            alt={`${country.name} flag`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Country Information */}
      <div className="lg:flex-1 lg:max-w-2xl">
        <h2 className="text-2xl lg:text-3xl font-bold tracking-wide mb-6 lg:mb-8">
          {country.name}
        </h2>

        {/* Info Grid */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-2">
          {/* Left Column */}
          <div className="space-y-2 mb-8 lg:mb-0">
            <p className="text-sm lg:text-base">
              <span className="font-semibold tracking-wide">Native Name: </span>
              <span className=" text-forground">{country.nativeName}</span>
            </p>
            <p className="text-sm lg:text-base">
              <span className="font-semibold tracking-wide">Population: </span>
              <span className=" text-forground">{country.population}</span>
            </p>
            <p className="text-sm lg:text-base">
              <span className="font-semibold tracking-wide">Region: </span>
              <span className=" text-forground">{country.region}</span>
            </p>
            <p className="text-sm lg:text-base">
              <span className="font-semibold tracking-wide">Sub Region: </span>
              <span className=" text-forground">{country.subregion}</span>
            </p>
            <p className="text-sm lg:text-base">
              <span className="font-semibold tracking-wide">Capital: </span>
              <span className=" text-forground">{country.capital}</span>
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-2 mb-8 lg:mb-0">
            <p className="text-sm lg:text-base">
              <span className="font-semibold tracking-wide">Top Level Domain: </span>
              <span className=" text-forground">
                {country.topLevelDomain && country.topLevelDomain[0]}
              </span>
            </p>
            <p className="text-sm lg:text-base">
              <span className="font-semibold tracking-wide">Currencies: </span>
              <span className=" text-forground">
                {country.currencies && country.currencies[0]?.name}
              </span>
            </p>
            <p className="text-sm lg:text-base">
              <span className="font-semibold tracking-wide">Languages: </span>
              <span className=" text-forground">
                {country.languages && country.languages[0]?.name}
              </span>
            </p>
          </div>
        </div>

        {/* Border Countries */}
        <div className="mt-8 lg:mt-12">
          <div className="lg:flex lg:items-center lg:gap-4">
            <p className="text-sm lg:text-base font-semibold mb-4 lg:mb-0 tracking-wide lg:whitespace-nowrap">
              Border Countries:
            </p>
            <div className="flex flex-wrap gap-2">
           
{country.borders?.length > 0 ? (
  country.borders.map((borderCountry, index) => (
    <button
      key={index}
      className="px-4 py-1 text-sm rounded shadow-md transition-colors"
    >
      {borderCountry}
    </button>
  ))
) : (
  <span className="text-sm">No border countries</span>
)}

            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

    
  )
}

export default CountryDetail
