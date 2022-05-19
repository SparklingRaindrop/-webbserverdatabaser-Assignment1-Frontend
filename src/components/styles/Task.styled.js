import styled from 'styled-components';
import { DeleteButton } from '../Button';

export const Wrapper = styled.li`
    margin-bottom: 0.5rem;
    padding: 0.3rem 0.5rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    
    border-radius: ${({theme}) => theme.borderRadius};
    background-color: ${({theme}) => theme.colors.background.normal};

    &:hover,
    &:focus-within {
        background-color: ${({theme}) => theme.colors.background.hover};
    }
`;

export const RemoveButton = styled(DeleteButton)`
    margin-left: auto;
`;

export const Name = styled.label`
    min-width: 70%;
    padding: ${({theme}) => theme.padding};
    overflow-wrap: break-word;

    font-family: ${({theme}) => theme.typography.task.family};
    font-weight: ${({theme}) => theme.typography.task.weight};
    font-size: ${({theme}) => theme.typography.task.size};
`;

export const InputField = styled.input.attrs({
    type: 'text',
    autoFocus: true,
})`
    min-width: 70%;
    padding: ${({theme}) => theme.padding};
    box-sizing: content-box;
    
    border: none;
    background-color: transparent;

    font-family: ${({theme}) => theme.typography.task.family};
    font-weight: ${({theme}) => theme.typography.task.weight};
    font-size: ${({theme}) => theme.typography.task.size};
`;


export const CheckBox = styled.input.attrs({
    type: 'checkbox',
})`
    filter: hue-rotate(60deg);
    transform: scale(2);
    cursor: pointer;

    &:checked + ${Name} {
        text-decoration: line-through;
        color: grey;
    }

    &:not(:checked) + ${Name} {
        cursor: pointer;
    }
`;

