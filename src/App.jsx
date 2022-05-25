import { useEffect } from "react";
import { ThemeProvider } from 'styled-components';

import { themes } from './themeStyles';
import useApi from "./hooks/useApi";

import { GlobalStyles } from './components/styles/GlobalStyles.styled';
import { Title } from './components/styles/App.styled';
import ToDoList from './components/ToDoList';

export default function App() {
    const { fetchData } = useApi();

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ThemeProvider theme={themes}>
            <GlobalStyles />
            <Title>My to-do list</Title>
            <ToDoList />
        </ThemeProvider>
    );
}
