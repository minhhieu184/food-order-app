import React, { forwardRef } from 'react';

import styles from './InputBlock.module.css';

const InputBlock = ({ label, className, inputAtr }, ref) => {

    return (
        <div className={`${styles.input} ${className}`}>
            <label htmlFor={inputAtr.id}>{label}</label>
            <input 
                ref={ref}
                {...inputAtr} 
            />
        </div>
    );
}

export default forwardRef(InputBlock);
