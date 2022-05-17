import Header from "./components/Header";
import TaskHandler from "./components/TaskHandler";
import './App.css';

export default function App() {
    return (
        <>
            <Header title='My to-do list' />
            <TaskHandler />
        </>
    );
}
