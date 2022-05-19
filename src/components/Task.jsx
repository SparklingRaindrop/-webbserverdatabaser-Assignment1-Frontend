import React from 'react';
import { CheckBox, Name, Wrapper } from './styles/Task.styled';
import { DeleteButton } from './Button';

export default function Task(props) {
    const { completion, id, taskName } = props;
    return (
        <Wrapper>
            <CheckBox
                id={id}
                name={taskName}
                checked={completion ? true : null}
                onChange={() => toggleCompletion(id)}
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
