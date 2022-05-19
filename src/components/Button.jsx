import React from 'react'
import { Icon, DeleteButtonWrapper, AddButtonWrapper, TextButtonWrapper } from './styles/Button.styled';
import binIcon from '../assets/rubbish-bin-icon.svg';
import addIcon from '../assets/addButton.svg';

export function DeleteButton() {
    return (
        <DeleteButtonWrapper>
            <Icon src={binIcon} alt='Remove' />
        </DeleteButtonWrapper>
    )
}

export function AddButton({ disabled }) {
    return (
        <AddButtonWrapper disabled={disabled}>
            <Icon src={addIcon} alt='Add task' />
        </AddButtonWrapper>
    )
}

export function Button(props) {
    const { text, disabled } = props;
    return (
        <TextButtonWrapper disabled={disabled}>
            {text}
        </TextButtonWrapper>
    )
}
