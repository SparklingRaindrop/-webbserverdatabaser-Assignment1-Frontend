import React from 'react';
import { useRecoilValue } from 'recoil';
import { dataState } from '../recoil/data/atom';
import { List, NoTaskMessage } from './styles/TaskList.styled';
import Task from './Task';

export default function TaskList() {
    const tasks = useRecoilValue(dataState);

    if (tasks.length === 0) {
        return (
            <NoTaskMessage>
                Currently No Tasks
            </NoTaskMessage>
        )
    }
    return (
        <List>
            {
                tasks.map(task => <Task key={task.id} {...task} />)
            }
        </List>
    )
}
