import React, { useState } from 'react';

const Homepage = () => {
    return(
        <div>
            <h2 style={styles.heading}>Login</h2>
        </div>
    );
};

export default Homepage;

const styles = {
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
        font: 'Viga',
        fontSize: '35px',
        fontWeight: 'bold',
        lineHeight: '65px',
        color: '#fff',
        marginTop: '250px',
    },
    input: {
        padding: '10px',
        marginBottom: '10px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        display: 'block',
    },
};