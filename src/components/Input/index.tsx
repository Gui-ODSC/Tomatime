import React from "react";

import styles from "./styles.module.css"

type InputProps = {
    id: string;
    labelText?: string;
} & React.ComponentProps<'input'>;

export function Input({ type, id, labelText, ...rest }: InputProps) {
    return (
        <>
            {labelText && <label htmlFor={id}>{labelText}</label>}
            <input className={styles.input} id={id} type={type} {...rest} />
        </>
    )
}