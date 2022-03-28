import React from 'react';

import styles from './Button.module.css'

const Button = ({ children, ...inputAtr}) => {
    return (
        <button
            {...inputAtr}
            className={`${inputAtr.className} 123 ${styles.button}`}
        >
            {children}
        </button>
    );
}

export default Button;
