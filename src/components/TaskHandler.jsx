import React, { useEffect, useState } from 'react';
import styles from './CSS/TaskHandler.module.css';

// Components
import TaskList from './TaskList';
import UserInputHandler from './UserInputHandler';

export default function TaskHandler() {
    const [tasks, setTasks] = useState([]);
    const [pending, setPending] = useState(true);

    const hasTasks = tasks.length > 0;
    const hasCompletedTasks = tasks.filter(task => task.completion).length > 0;

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        setPending(true);
        const rawData = await fetch("http://localhost:5000/todos");
        const jsonData = await rawData.json();
        setTasks(jsonData.sort(sortTasks));
        setPending(false);
    }

    async function addTask(newTask) {
        const response = await fetch("http://localhost:5000/todos/", {
            method: "POST",
            body: JSON.stringify(newTask),
            headers: {
                "Content-Type": "application/json",
                "Origin": "http://localhost:3000",
            }
        });
        if (response.ok) {
            getData();
        }
    }

    function removeCompletedTasks() {
        setTasks((prev) => prev.filter(task => !task.completion));
    }

    function toggleCompletion(id) {
        setTasks((prev) => {
            const targetTask = { ...prev.find(task => task.id === id) };
            targetTask.completion = !targetTask.completion;

            let newTaskList = prev.filter(task => task.id !== id);
            newTaskList.push(targetTask);

            return newTaskList.sort(sortTasks);
        });
    }

    //Callback function for sort()
    function sortTasks(a, b) {
        // Sorting the order; uncompleted tasks comes first
        if (b.completion && !a.completion) {
            return -1;
        } else if (a.completion && !b.completion) {
            return 1;
        } else {
            return 0;
        }
    }

    async function toggleCompletion(id) {
        const target = { ...tasks.find(task => task.id === id) }.completion;

        const response = await fetch(`http://localhost:5000/todos/${id}/`, {
            method: "PATCH",
            body: JSON.stringify({
                completion: !target,
            }),
            headers: {
                "Content-Type": "application/json",
                "Origin": "http://localhost:3000",
            }
        });
        if (response.ok) {
            getData();
        }
    }

    async function handleRemoveTask(id) {
        const response = await fetch(`http://localhost:5000/todos/${id}/`, {
            method: "DELETE",
            headers: {
                "Origin": "http://localhost:3000",
            }
        });
        if (response.ok) {
            getData();
        }
    }

    function handleAddTask(userInput) {
        const newTask = {
            taskName: userInput,
            completion: false,
        };
        addTask(newTask);
    }

    async function removeCompletedTasks() {
        const targets = tasks.filter(task => task.completion);
        const promises = targets.map(target => handleRemoveTask(target.id));
        Promise.all(promises).then(() => getData());
    }

    //Callback function for sort()
    function sortTasks(a, b) {
        // Sorting the order; uncompleted tasks comes first
        if (b.completion && !a.completion) {
            return -1;
        } else if (a.completion && !b.completion) {
            return 1;
        } else {
            return 0;
        }
    }
    if (pending) return <p>Loading...</p>
    return (
        <main>
            <UserInputHandler
                handleAddTask={handleAddTask}
                removeCompletedTasks={removeCompletedTasks}
                hasCompletedTasks={hasCompletedTasks}
            />
            {hasTasks ?
                <TaskList
                    tasks={tasks}
                    toggleCompletion={toggleCompletion}
                    handleRemoveTask={handleRemoveTask}
                /> :
                <p className={`${styles['main-content--No-task-label']} no-task-msg`}>
                    Currently No Tasks
                </p>
            }
        </main>
    )
}
