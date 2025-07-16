import axios from "axios";
import { createContext, useEffect, useState } from "react";

const CountryContext = createContext();

export const CountryProvider = ({children})=>{
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true);
    
     useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://restcountries.com/v3.1/all?fields=name,flags,region,subregion,capital,population,currencies,languages,borders,tld'
                );
                setCountries(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error loading country data:', error);
            }
        };

        fetchData();
    }, []);

    return (
    <CountryContext.Provider value={{ countries, loading }}>
      {children}
    </CountryContext.Provider>
  );
    
}

export default CountryContext;
