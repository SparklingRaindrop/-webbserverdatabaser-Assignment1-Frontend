import React, { useEffect, useState } from 'react';
import { Wrapper, InputField, Upper } from './styles/InputHandler.styled';
import { AddButton, Button } from './Button';
import { useRecoilValue } from 'recoil';
import { completedTaskSelector } from '../recoil/data/selectors';

export default function InputHandler() {
    const [inputValue, setInputValue] = useState('');
    const [hasValidInput, setHasValidInput] = useState(false);

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
            addTask();
        }
    }

    function handleUserInput(event) {
        setInputValue(event.target.value);
    }

    function addTask() {
        //Adding Task 
    }

    function removeCompletedTasks() {
        // Removing task
    }

    return (
        <Wrapper>
            <Upper>
                <InputField
                    onKeyPress={handleKeypress}
                    onChange={handleUserInput}
                    value={inputValue} />
                <AddButton
                    handleClick={addTask}
                    disabled={!hasValidInput} />
            </Upper>
            <Button
                handleClick={removeCompletedTasks}
                disabled={!hasCompletedTasks}
                text="Remove completed tasks"
            />
        </Wrapper>
    )
}