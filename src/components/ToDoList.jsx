import React from 'react';
import { Wrapper } from './styles/ToDoList.styled';
import InputHandler from './InputHandler';
import TaskList from './TaskList';

export default function ToDoList() {

    return (
        <Wrapper>
            <InputHandler />
            <TaskList />
        </Wrapper>
    )
}
