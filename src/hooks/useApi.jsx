import axios from "axios";
import { useEffect, useState } from "react";

export default function useApi(query = '') {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setIsError(false);
            try {
                const url = `http://localhost:5000/todos/${query}`;
                const response = await axios(url);
                const data = response.data.sort(sortTasks);
                setData(data);
            } catch (e) {
                setIsError(true);
            }
            setIsLoading(false);
        }

        setIsLoading(true);
        fetchData();
    }, [query]);

    return { data, isLoading, isError };
}

//Callback function for sort()
function sortTasks(a, b) {
    // Sorting the order; uncompleted tasks comes first
    if (b.completion && !a.completion) {
        return -1;
    } else if (a.completion && !b.completion) {
        return 1;
    } else {
        return 0;
    }
}