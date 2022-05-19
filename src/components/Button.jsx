import React from 'react'
import { DeleteButtonWrapper, AddButtonWrapper, TextButtonWrapper } from './styles/Button.styled';
import Icon from './Icon';

export function DeleteButton(props) {
    return (
        <DeleteButtonWrapper {...props} className={props.className} title='Remove'>
            <Icon name='bin' />
        </DeleteButtonWrapper>
    )
}

export function AddButton(props) {
    return (
        <AddButtonWrapper {...props} title='Add task'>
            <Icon name='plus' />
        </AddButtonWrapper>
    )
}

export function Button(props) {
    const { text } = props;
    return (
        <TextButtonWrapper {...props}>
            {text}
        </TextButtonWrapper>
    )
}
