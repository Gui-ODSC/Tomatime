import React from "react";

type InputProps = {
    id: string;
    labelText?: string;
} & React.ComponentProps<'input'>;

export function Input({ type, id, labelText, ...rest }: InputProps) {
    return (
        <>
            {labelText && <label htmlFor={id}>{labelText}</label>}
            <input id={id} type={type} {...rest} />
        </>
    )
}