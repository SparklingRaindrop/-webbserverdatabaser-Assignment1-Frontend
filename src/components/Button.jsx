import React from 'react'
import { Icon, DeleteButtonWrapper, AddButtonWrapper, TextButtonWrapper } from './styles/Button.styled';
import binIcon from '../assets/rubbish-bin-icon.svg';
import addIcon from '../assets/addButton.svg';

export function DeleteButton(props) {
    return (
        <DeleteButtonWrapper {...props}>
            <Icon src={binIcon} alt='Remove' />
        </DeleteButtonWrapper>
    )
}

export function AddButton(props) {
    return (
        <AddButtonWrapper {...props}>
            <Icon src={addIcon} alt='Add task' />
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
