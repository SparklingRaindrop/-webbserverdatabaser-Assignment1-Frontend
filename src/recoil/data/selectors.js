import { selector } from "recoil";
import {dataState} from './atom';

export const completedTaskSelector = selector({
    key: 'completedTaskSelector',
    get: ({get}) => {
        const tasks = get(dataState);

        return tasks.filter(task => task.completion);
    }
});