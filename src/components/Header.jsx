import React from "react";
import styles from "./CSS/Header.module.css";

export default function Header(props) {
    const { title } = props;

    return (
        <header>
            <h1 className={styles['header--title']}>{title}</h1>
        </header>
    )
}
