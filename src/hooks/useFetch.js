import { useEffect, useState } from "react";

export default function useFetch(query) {
    const [status, setStatus] = useState('pending');
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            const rawData = await fetch("http://localhost:5000/todos");
            const jsonData = await rawData.json();
            setData(jsonData);
            setStatus('finished');
        }
        getData();
    }, [query]);

    return { status, data };
}