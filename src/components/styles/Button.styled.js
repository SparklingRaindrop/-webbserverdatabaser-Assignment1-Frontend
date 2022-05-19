import styled from 'styled-components';

export const Wrapper = styled.button`
    padding: 0;
    margin: 0;
    border: none;
    cursor: pointer;
    background-color: transparent;

    font-family: ${({theme}) => theme.typography.button.family};
    font-weight: ${({theme}) => theme.typography.button.weight};
    font-size: ${({theme}) => theme.typography.button.size};

    &:disabled {
        cursor: not-allowed;
        box-shadow: none;
        filter: grayscale(60%);
    }
`;

export const DeleteButtonWrapper = styled(Wrapper)`
    width: 2rem;
    height: 2rem;

    border-radius: ${({theme}) => theme.borderRadius};

    &:hover {
        background-color: ${({theme}) => theme.colors.background.button.hover};
    }
`;

export const PurpleButton = styled(Wrapper)`
    background-color: ${({theme}) => theme.colors.background.button.purple};
    box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.5);

    &:disabled {
        cursor: not-allowed;
        box-shadow: none;
        filter: grayscale(60%);
    }

    &:not(:disabled):hover {
        transform: translate(0.1rem);
        box-shadow: none;
    }
`;
export const AddButtonWrapper = styled(PurpleButton)`
    width: 2.5rem;
    height: 2.5rem;
    margin: 0.5rem;

    color: white;
    display: inline-block;
    border-radius: 50%;
`;

export const TextButtonWrapper = styled(PurpleButton)`
    width: 100%;
    margin: auto;
    padding: ${({theme}) => theme.padding};

    border-radius: ${({theme}) => theme.borderRadius};
`;