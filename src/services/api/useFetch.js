import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if(!response.ok) {
                    throw new error(`HTTP error! status: ${error.message}`);
                }
                const jsonData = await response.json();
                setData(jsonData);

            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;