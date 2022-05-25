import axios from "axios";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { dataState } from "../recoil/data/atom";


export default function useApi(query = '') {
    const [isLoading, setIsLoading] = useState(false);
    const setData = useSetRecoilState(dataState);

    const fetch = axios.create({
        baseURL: 'http://localhost:5000/todos/',
        timeout: 2500
    });

    async function fetchData() {
        setIsLoading(true);
        try {
            //const url = `http://localhost:5000/todos/`;
            const response = await fetch();
            const data = response.data.sort(sortTasks);
            setData(data);
        } catch (e) {
            console.log('There is something wrong');
        }
        setIsLoading(false);
    }

    async function removeTask() {
        try {
            await fetch.delete(`/${query}`);
        } catch (e) {
            console.log(e);
        }
    }

    async function addTask(str) {
        try {
            await fetch.post('/', {
                taskName: str,
                completion: false,
            });
            fetchData();
        } catch (e) {
            console.log(e);
        }
    }

    async function updateTask(obj) {
        try {
            await fetch.patch(`/${query}`, obj);
            fetchData();
        } catch (e) {
            console.log(e);
        }
    }

    return { isLoading, fetchData, addTask, removeTask, updateTask };
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