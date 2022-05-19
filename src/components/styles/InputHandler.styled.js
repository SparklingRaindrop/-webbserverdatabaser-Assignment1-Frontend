import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

export const Upper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const InputField = styled.input.attrs({
    type: 'text',
    placeholder: 'Enter a task',
})`
    margin: auto;
    padding: ${({theme}) => theme.padding};

    border-radius: ${({theme}) => theme.borderRadius};
    background-color: rgba(255, 255, 255, 0.5);
    border: 3px rgba(0, 0, 0, 0.4) solid;
    transition: all 0.5s ease-out;

    &:focus {
        outline: none;
        background-color: rgba(255, 255, 255, 0.6);
        border: 3px black solid;
    }
`;