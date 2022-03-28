import React from 'react';

const ErrorText = ({ children, className }) => {
    return (
        <p className={className}>{children}</p>
    );
}

export default ErrorText;
