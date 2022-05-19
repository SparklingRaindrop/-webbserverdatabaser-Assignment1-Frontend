import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import axios from 'axios';

import useApi from '../hooks/useApi';
import { dataState } from '../recoil/data/atom';
import { completedTaskSelector } from '../recoil/data/selectors';

import { Wrapper, InputField, Upper } from './styles/InputHandler.styled';
import { AddButton, Button } from './Button';


export default function InputHandler() {
    const [inputValue, setInputValue] = useState('');
    const [hasValidInput, setHasValidInput] = useState(false);
    const tasks = useRecoilValue(dataState);
    const { fetchData, addTask, removeTask } = useApi();

    const completedTasks = useRecoilValue(completedTaskSelector);
    const hasCompletedTasks = completedTasks.length > 0;

    useEffect(() => {
        const containsOnlySpace = inputValue.trim().length === 0;

        // when loaded OR user deleted the entire input by themselves
        if (inputValue.length === 0) {
            //setShownTooltips(false);
            setHasValidInput(false);
        } else if (containsOnlySpace) {
            setHasValidInput(false);
            //setShownTooltips(true);
        } else {
            //setShownTooltips(false);
            setHasValidInput(true);
        }
    }, [inputValue]);

    function handleKeypress(event) {
        if (hasValidInput && event.key === 'Enter') {
            addTask(inputValue);
        }
    }

    function handleUserInput(event) {
        setInputValue(event.target.value);
    }

    function removeCompletedTasks() {
        const targets = tasks.filter(task => task.completion);
        const promises = targets.map(target => removeTask(target.id));
        Promise.all(promises).then(() => fetchData());
    }

    return (
        <Wrapper>
            <Upper>
                <InputField
                    onKeyPress={handleKeypress}
                    onChange={handleUserInput}
                    value={inputValue} />
                <AddButton
                    onClick={() => addTask(inputValue)}
                    disabled={!hasValidInput} />
            </Upper>
            <Button
                onClick={removeCompletedTasks}
                disabled={!hasCompletedTasks}
                text="Remove completed tasks"
            />
        </Wrapper>
    )
}