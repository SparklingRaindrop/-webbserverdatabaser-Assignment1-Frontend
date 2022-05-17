import React from 'react';
import styles from './CSS/TaskList.module.css';

// Components
import Task from './Task';

// This component get rendered only when "tasks > 0"
export default function TaskList(props) {
    const { tasks, toggleCompletion, handleRemoveTask } = props;

    const items = tasks.map((task) => (
        <Task
            key={task.id}
            id={task.id}
            taskName={task.taskName}
            completion={task.completion}
            toggleCompletion={toggleCompletion}
            handleRemoveTask={handleRemoveTask}
        />
    ));

    return (
        <ul className={styles['to-do-list']}>
            {items}
        </ul>
    )
}
