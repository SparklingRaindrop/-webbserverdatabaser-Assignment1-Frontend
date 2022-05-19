import styled from 'styled-components';

export const List = styled.ul`
    width: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const NoTaskMessage = styled.div`
    padding: 2rem;

    border-radius: 0.2rem;
    background-color: ${({theme}) => theme.colors.textBg };
`;