import { useEffect } from "react";

import { ThemeProvider } from 'styled-components';
import { themes } from './themeStyles';
import { createGlobalStyle } from 'styled-components';
import useApi from "./hooks/useApi";

import img from './assets/background.svg';

import { Title } from './components/styles/App.styled';
import ToDoList from './components/ToDoList';
import { useSetRecoilState } from "recoil";
import { dataState } from "./recoil/data/atom";

const GlobalStyles = createGlobalStyle`
    body {
        background: url(${img}) center center fixed;
        background-size: cover;
    }
`

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
