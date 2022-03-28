import { useState } from 'react';

const useHttp = (url) => {

    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async (config) => {
        setIsLoading(true)
        setError(false);
        let data
        try{
            const response = await fetch(url, config)
            console.log("fetchData ~ response", response)
            if(!response.ok) throw Error('Something went wrong')
            data = await response.json()
        } catch(err){
            console.log("fetchData ~ err", err)
            setError(err.message)
        }
        setIsLoading(false) 
        return data
    }



    return {
        fetchData,
        isLoading,
        error
    };
}

export default useHttp;
