import React, { useState } from 'react';
import { CheckBox, Name, Wrapper } from './styles/Task.styled';
import { DeleteButton } from './Button';
import useApi from '../hooks/useApi';

export default function Task(props) {
    const { completion, id, taskName } = props;
    const { fetchData, removeTask, updateTask } = useApi(id);

    async function toggleCompletion() {
        updateTask({ completion: !completion });
    }

    async function handleRemoveTask() {
        await removeTask(id);
        fetchData();
    }

    return (
        <Wrapper>
            <CheckBox
                id={id}
                name={taskName}
                checked={completion}
                onChange={toggleCompletion}
            />
            <Name htmlFor={id}>
                {taskName}
            </Name>
            <DeleteButton
                onClick={() => handleRemoveTask(id)}
            />
        </Wrapper>
    )
}
