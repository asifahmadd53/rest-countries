import React, { useContext, useEffect, useState } from 'react'
import CountryCard from '../components/CountryCard'
import axios from 'axios'
import ThemeContext from '../context/ThemeContext'
import { search, searchDark } from '../constants/icons'


const Home = () => {

    const [countries, setCountries] = useState([]);
    const [searchCountries, setSearchCountries] = useState('')
    const [selectedRegion, setSelectedRegion] = useState('')
    const [showRegions, setShowRegions] = useState(false);


    const toggleDropDown = () => {
        setShowRegions(!showRegions);
    }
    
    const { theme } = useContext(ThemeContext)

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population'
      );
      setCountries(response.data);
    } catch (error) {
      console.error('Error loading country data:', error);
    }
  };

  fetchData();
}, []);

    

    const regions = [...new Set(countries.map(c => c.region).filter(Boolean))];

    const filteredCountries = countries.filter(country => {
        const matchSarch = country.name.common.toLowerCase().includes(searchCountries.toLowerCase()) 
        const matchRegion = selectedRegion ? country.region === selectedRegion : true
        return matchSarch && matchRegion;
    })




    return (
  
        <div className="px-6 md:px-12 lg:px-16 xl:px-20 py-6">

            <div className="flex gap-y-4 items-start justify-between gap-2 flex-wrap mb-6 relative mt-5 ">

                <div className="relative flex items-center w-full xs:w-[70%] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 border border-gray-200 rounded-md">
                    <img className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600" src={theme === "light" ? search : searchDark} alt="" />

                    <input
                        value={searchCountries}
                        onChange={(e) => setSearchCountries(e.target.value)}
                        className="w-full bg-transparent placeholder:text-slate-400 text-forground text-sm  rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none  hover:border-slate-300  shadow-sm focus:shadow text-forground "
                        placeholder="UI Kits, Dashboards..."
                    />
                </div>

                <div className="relative">
                    <button
                        onClick={toggleDropDown}
                        className="rounded-md bg-background py-2 px-4 lg:px-10 xl:px-11 border border-transparent text-center text-sm text-foreground transition-all shadow-[0_2px_6px_rgba(0,0,0,0.1),_0_8px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_10px_rgba(0,0,0,0.12),_0_12px_28px_rgba(0,0,0,0.1)] "
                        type="button"
                    >
                       {selectedRegion ? selectedRegion : 'Filter by region'}

                    </button>

                    {showRegions && (
                        <ul
                            role="menu"
                            className="absolute top-full mt-1 left-0 z-10 min-w-full overflow-auto rounded-lg border-slate-200 bg-background p-1.5 shadow-lg card"
                        >
                            {regions.map((region) => (
                                <li
                                onClick={() => {
                                    setSelectedRegion(region);
                                    setShowRegions(false);
                                  }}
                                    key={region}
                                    role="menuitem"
                                    className="cursor-pointer text-foreground bg-element text-sm flex w-full items-center rounded-md p-3 transition-all duration-200   hover:scale-[1.02]"
                                >
                                    {region}
                                </li>
                            ))}
                            <li
                onClick={() => {
                  setSelectedRegion('');
                  setShowRegions(false);
                }}
                className="px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer"
              >
                Clear Filter
              </li>
                        </ul>
                    )}
                </div>
            </div>

            <div className="flex flex-wrap justify-center items-center lg:justify-between gap-6 lg:gap-8 xl:gap-10">
                {filteredCountries.map((item, index) => {
                    return (
                        <CountryCard
                            key={index}
                            png={item.flags.png}
                            name={item.name.common}
                            population={item.population}
                            region={item.region}
                            capital={item.capital}
                        />
                    )
                })}

            </div>
        </div>
       
    )
}

export default Home
