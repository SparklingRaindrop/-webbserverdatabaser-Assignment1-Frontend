import React from 'react';
import styles from './CSS/Tooltip.module.css';

export default function Tooltip(props) {
    const { children, tips, showTooltips } = props;

    return (
    <div className={styles['tooltips--wrapper']}>
        { showTooltips && <span className={styles['tooltips--tip-box']}>{tips}</span> }
        {children}
    </div>
    )
}
