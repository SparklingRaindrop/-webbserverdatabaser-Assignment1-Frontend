import React, { useEffect, useState } from 'react';
import addButton from './assets/addButton.svg';
import styles from './CSS/UserInputHandler.module.css';

// Components
import Button from './Button';
import Tooltip from './Tooltip';

export default function UserInputHandler(props) {
    const {handleAddTask, removeCompletedTasks, hasCompletedTasks} = props;

    const [inputValue, setInputValue] = useState('');
    const [hasValidInput, setHasValidInput] = useState(false);
    const [showInputTooltips, setShownTooltips] = useState(false);

    useEffect(() => {
        const containsOnlySpace = inputValue.trim().length === 0;

        // when loaded OR user deleted the entire input by themselves
        if(inputValue.length === 0){
            setShownTooltips(false);
            setHasValidInput(false);
        } else if (containsOnlySpace) {
            setHasValidInput(false);
            setShownTooltips(true);
        } else {
            setShownTooltips(false);
            setHasValidInput(true);
        }
    }, [inputValue]);

    function handleUserInput(event){
        setInputValue(event.target.value);
    }

    function addTask() {
        // handleUserInput only accept valid value
        handleAddTask(inputValue);

        // It will clear out input field so that booleans are false
        setInputValue('');
        setHasValidInput(false);
    }

    function handleKeypress(event) {
        if(hasValidInput && event.key === 'Enter'){
            addTask();
        }
    }

    return (
        <div className={styles['user-input--wrapper']}>
            <div className={styles['user-input--input']}>
                <Tooltip tips="Task must contain at least one letter" showTooltips={showInputTooltips}>
                    <input
                        type='text'
                        placeholder='Enter a task'
                        className={styles['user-input--input-field']}
                        onKeyPress={handleKeypress}
                        onChange={handleUserInput}
                        value={inputValue}
                    />
                </Tooltip>
                <Button
                    handleClick={addTask}
                    enabledCondition={hasValidInput}
                    name="add-button"
                    img={addButton}
                />
            </div>
            <Button
                handleClick={removeCompletedTasks}
                enabledCondition={hasCompletedTasks}
                name="clear-button"
                text="Remove completed tasks"
            />
        </div>
    );
}
