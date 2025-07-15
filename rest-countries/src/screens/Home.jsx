import React, { useContext, useEffect, useState } from 'react'
import CountryCard from '../components/CountryCard'
import axios from 'axios'
import ThemeContext from '../context/ThemeContext'
import { search, searchDark, down, downLight } from '../constants/icons'


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

    const trimSearch = searchCountries.trim().toLowerCase()

    const filteredCountries = countries.filter(country => {
        const matchSarch = country.name.common.toLowerCase().includes(trimSearch)
        const matchRegion = selectedRegion ? country.region === selectedRegion : true
        return matchSarch && matchRegion;
    })



    if (countries.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center overflow-hidden">
                <div className="animate-spin rounded-full h-10 w-10 border-4 border-t-transparent border-gray-400"></div>
            </div>
        );
    }





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
                        type="button"
                        className="rounded-md flex items-center justify-between bg-background min-w-40 max-w-40 px-3 py-3 border border-transparent text-sm text-foreground transition-all shadow-md sm:w-auto"
                    >
                        <span>{selectedRegion ? selectedRegion : 'Filter by region'}</span>
                        <img className="ml-5 w-3 h-3 lg:w-4 lg:h-4" src={theme === "light" ? down : downLight} alt="" />
                    </button>


                    {showRegions && (
                        <ul
                            role="menu"
                            className="absolute top-full mt-1 left-0 z-10 min-w-full overflow-auto rounded-lg border-slate-200 bg-background p-1.5 shadow-md card"
                        >

                            <li
                                onClick={() => {
                                    setSelectedRegion('');
                                    setShowRegions(false);
                                }}
                                className="cursor-pointer text-foreground bg-element text-sm flex w-full items-center rounded-md p-2 transition-all duration-200 hover:scale-[1.02]"
                            >
                                All
                            </li>
                            {regions.map((region) => (
                                <li
                                    onClick={() => {
                                        setSelectedRegion(region);
                                        setShowRegions(false);
                                    }}
                                    key={region}
                                    role="menuitem"
                                    className="cursor-pointer text-foreground bg-element text-sm flex w-full items-center rounded-md p-2 transition-all duration-200 hover:scale-[1.02]"
                                >
                                    {region}
                                </li>
                            ))}

                        </ul>
                    )}
                </div>
            </div>

            <div className="flex flex-wrap justify-center items-center lg:mx-auto gap-6 lg:gap-10 xl:gap-12 mt-12">
                {filteredCountries.length === 0 ? (
                    <p className="text-center text-foreground text-lg font-semibold">There is no country like this.</p>
                ) : (
                    filteredCountries.map((item, index) => (
                        <CountryCard
                            key={index}
                            png={item.flags.png}
                            name={item.name.common}
                            population={item.population}
                            region={item.region}
                            capital={item.capital}
                        />
                    ))
                )}


            </div>
        </div>

    )
}

export default Home
