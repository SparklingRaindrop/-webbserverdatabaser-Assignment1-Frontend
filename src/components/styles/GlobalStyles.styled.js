import { createGlobalStyle } from 'styled-components';
import img from '../../assets/background.svg';

export const GlobalStyles = createGlobalStyle`
    body {
        background: url(${img}) center center fixed;
        background-size: cover;
    }
`;