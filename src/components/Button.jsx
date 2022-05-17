import React from 'react';
import styles from './CSS/Button.module.css'

export default function Button(props) {
    const { text, handleClick, enabledCondition, name, img } = props;

    const label = img ?
        <img src={img} alt={name} className="icon" /> :
        `${text}`;

    const indivisualClass = name ? `user-input--${name}` : null;
    const allClasses = indivisualClass === null ?
        `${styles['user-input--button']}` :
        `${styles['user-input--button']} ${styles[indivisualClass]}`;

    return (
        <button
            className={allClasses}
            onClick={handleClick}
            disabled={!enabledCondition}
        >
            {label}
        </button>
    )
}
