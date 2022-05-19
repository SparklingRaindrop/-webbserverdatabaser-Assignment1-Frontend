import styled from 'styled-components';

export const Wrapper = styled.button`
    border: none;
    cursor: pointer;

    &:disabled {
        cursor: not-allowed;
        box-shadow: none;
        filter: grayscale(60%);
    }
`;

export const Icon = styled.img`
    width: 100%;
`;

export const DeleteButtonWrapper = styled(Wrapper)`
    width: 2rem;
    margin-left: auto;
`;

export const AddButtonWrapper = styled(Wrapper)`
    background-color: ${({theme}) => theme.colors.button};
    cursor: pointer;
    box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.425);

    width: 2.5rem;
    height: 2.5rem;
    margin: 0.5rem;

    border-radius: 50%;
    display: inline-block;

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

export const TextButtonWrapper = styled(Wrapper)`
    width: 100%;
    margin: auto;
    padding: ${({theme}) => theme.padding};
    border-radius: ${({theme}) => theme.borderRadius};
`;