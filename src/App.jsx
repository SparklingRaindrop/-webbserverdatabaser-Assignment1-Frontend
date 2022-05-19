import { useEffect } from "react";
import { ThemeProvider } from 'styled-components';

import { themes } from './themeStyles';
import useApi from "./hooks/useApi";

import { GlobalStyles } from './components/styles/GlobalStyles.styled';
import { Title } from './components/styles/App.styled';
import ToDoList from './components/ToDoList';

export default function App() {
    const { isLoading, fetchData } = useApi();

    useEffect(() => {
        fetchData();
    }, [isLoading]);

    return (
        <ThemeProvider theme={themes}>
            <GlobalStyles />
            <Title>My to-do list</Title>
            <ToDoList />
        </ThemeProvider>
    );
}
