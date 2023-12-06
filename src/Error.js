import React from 'react';

const ErrorDisplay = ({ error }) => {
    return (
        <div>
            <h2>Error</h2>
            <p>{error.message}</p>
            <p>Path: {error.path}</p>
        </div>
    );
};

export default ErrorDisplay;
