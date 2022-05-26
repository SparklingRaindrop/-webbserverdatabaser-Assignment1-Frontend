import React, { useState } from 'react';
import { CheckBox, InputField, Name, Wrapper, RemoveButton } from './styles/Task.styled';
import useApi from '../hooks/useApi';

export default function Task(props) {
    const { completion, id, taskName } = props;
    const [onEdit, setOnEdit] = useState(false);
    const [InputValue, setInputValue] = useState(taskName);
    const { fetchData, removeTask, updateTask } = useApi(id);

    async function toggleCompletion() {
        updateTask({ completion: !completion });
    }

    async function handleRemoveTask(id) {
        await removeTask(id);
        fetchData();
    }

    function toggleEditMode() {
        setOnEdit(prev => !prev);
    }

    function handleOnChange(event) {
        setInputValue(event.target.value);
    }

    function handleOnBlur() {
        updateTask({
            taskName: InputValue,
        });
        setOnEdit(false);
    }

    function handleKeypress(event) {
        if (event.key === 'Escape') {
            setOnEdit(false);
        }
    }

    return (
        <Wrapper>
            <CheckBox
                id={id}
                name={taskName}
                checked={completion}
                onChange={toggleCompletion}
            />
            {
                onEdit ?
                    <InputField
                        onChange={handleOnChange}
                        onBlur={handleOnBlur}
                        onKeyDown={handleKeypress}
                        value={InputValue} /> :
                    <Name htmlFor={id} onClick={toggleEditMode}>
                        {taskName}
                    </Name>
            }
            <RemoveButton
                onClick={() => handleRemoveTask(id)}
            />
        </Wrapper>
    )
}
