import styled from 'styled-components';

export const Wrapper = styled.li`
    margin: 0.3rem 0;
    padding: ${({theme}) => theme.padding};

    display: flex;
    flex-direction: row;
    align-items: center;
    
    line-height: 1.2;
    border-radius: ${({theme}) => theme.borderRadius};
    background-color: ${({theme}) => theme.colors.textBg};

    &:hover {
        background-color: rgba(255, 255, 255, 0.9);
    }
`;

export const Name = styled.label`
    overflow-wrap: break-word;
`;

export const CheckBox = styled.input.attrs({
    type: 'checkbox',
})`
    filter: hue-rotate(60deg);
    transform: scale(2);
    margin: 10px;
    cursor: pointer;

    &:checked + ${Name} {
        text-decoration: line-through;
        color: grey;
    }

    &:not(:checked) + ${Name} {
        cursor: pointer;
    }
`;

