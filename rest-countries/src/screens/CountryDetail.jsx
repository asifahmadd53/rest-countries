import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ThemeContext from '../context/ThemeContext';
import { backArrow, backArrowLight } from '../constants/icons';
import { useContext, useEffect, useState } from 'react';

const CountryDetail = () => {

  // Sample country data - Belgium
  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate()
  const { id } = useParams();
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true); 
  const handleBack = () => {
    navigate(-1);
  }

 useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://restcountries.com/v3.1/all?fields=name,flags,region,subregion,capital,population,currencies,languages,borders,tld');
        setCountries(res.data);
      } catch (err) {
        console.error('Failed to load country data:', err);
      }finally{
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  // ✅ Find the country by name
  const country = countries.find(
    (c) => c.name.common.toLowerCase().replace(/\s+/g, '-') === id
  );

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-t-transparent border-gray-400"></div>
        <span className="ml-4 text-gray-700">Loading country details...</span>
      </div>
    );
  }

  if (!country) return <p className="p-8">Country not found</p>;



  return (


    <main className="px-6 md:px-12 lg:px-16 xl:px-20 py-6">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="flex items-center gap-2 px-6 py-2 mb-12 lg:my-12 rounded shadow-md transition-colors"
      >
        <img className='w-3 h-3' src={theme === 'light' ? backArrow : backArrowLight} alt="" />
        Back
      </button>

      {/* Country Details */}
      <div className="lg:flex items-center lg:-space-x-10 xl:-space-x-14 bg-element">
        {/* Flag */}
        <div className="mb-8 lg:mb-0 lg:flex-1 lg:max-w-lg">
          <div className="aspect-[3/2] lg:aspect-[9.5/7] mx-auto lg:mx-0 sm:justify-center w-full sm:w-[70%] overflow-hidden rounded-md">
            <img
              src={country.flags?.png || country.flag}
              alt={`${country.name.common} flag`}
              className="w-full h-full object-cover "
            />
          </div>
        </div>

        {/* Country Information */}
        <div className="lg:flex-1 lg:max-w-2xl px-3 py-4 lg:px-6 lg:py-8">
          <h2 className="text-2xl font-bold tracking-wide mb-6 lg:mb-8">
            {country.name.common}
          </h2>

          {/* Info Grid */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-2">
            {/* Left Column */}
            <div className="space-y-2 mb-8 lg:mb-0">
              <p className="text-sm">
                <span className="font-semibold tracking-wide">Native Name: </span>
                <span className="text-forground font-extralight">
                  {country.name.nativeName ? Object.values(country.name.nativeName)[0].common : 'N/A'}
                </span>
              </p>
              <p className="text-sm ">
                <span className="font-semibold tracking-wide">Population: </span>
                <span className=" text-forground font-extralight">{country.population.toLocaleString()}</span>
              </p>
              <p className="text-sm ">
                <span className="font-semibold tracking-wide">Region: </span>
                <span className=" text-forground font-extralight">{country.region}</span>
              </p>
              <p className="text-sm ">
                <span className="font-semibold tracking-wide">Sub Region: </span>
                <span className=" text-forground font-extralight">{country.subregion}</span>
              </p>
              <p className="text-sm ">
                <span className="font-semibold tracking-wide">Capital: </span>
                <span className=" text-forground font-extralight">{country.capital}</span>
              </p>
            </div>

            {/* Right Column */}
            <div className="space-y-2 mb-8 lg:mb-0">
              <p className="text-sm ">
                <span className="font-semibold tracking-wide">Top Level Domain: </span>
                <span className="text-forground font-extralight">
                  {country.tld && country.tld[0]}
                </span>
              </p>
              <p className="text-sm ">
                <span className="font-semibold tracking-wide">Currencies: </span>
                <span className=" text-forground font-extralight">
                  {country.currencies && Object.values(country.currencies)[0]?.name}
                </span>
              </p>
              <p className="text-sm ">
                <span className="font-semibold tracking-wide">Languages: </span>
                <span className=" text-forground font-extralight">
                  {country.languages && Object.values(country.languages).join(', ')}
                </span>
              </p>
            </div>
          </div>

          {/* Border Countries */}
          <div className="mt-8 lg:mt-10">
            <div className="lg:flex lg:items-center lg:gap-4">
              <p className="text-sm font-semibold mb-4 lg:mb-0 tracking-wide lg:whitespace-nowrap">
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
