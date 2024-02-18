import React, { useState } from 'react';
import Webcam from 'react-webcam';

const BMI = () => {
    const [weight, setWeight] = useState('');
    const [showCamera, setShowCamera] = useState(false);

    const handleHome = () => {
        alert('Proceeding to Homepage');
        window.location.href = '/homepage';
    };

    const cameraClick = () => {
        setShowCamera(true);
    };

    return (
        <div className="body">
            <div className="dashboard-container">
                        <h2 style={styles.heading}>Calculate BMI</h2>
                            <div>
                                <label htmlFor="weight" style={styles.label}>Weight</label>
                                <input
                                    type="number"
                                    id="weight"
                                    placeholder="Enter your weight in kg"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    style={styles.input}
                                />
                            </div>
                            <div>
                            <label htmlFor="height" style={styles.label}>Height</label>
                            <button type="submit" style={styles.button} onClick={cameraClick}> Click here to see your height </button>
                            </div>
                            <div style={styles.webContainer}>
                                    <div style={styles.camera}>
                                    {showCamera && (
                                        <Webcam 
                                        height={400} 
                                        width={400}
                                        />
                                    )}
                                    </div>
                                <button type="submit" style={styles.button} onClick={handleHome}>Done</button>
                            </div>
            </div>
        </div>
    );
};

export default BMI;

const styles = {
    webContainer: {
        padding: '50px',
        borderRadius: '5px',
        cursor: 'pointer',
        backgroundColor: '#000000',
        border: '2px solid #000000',
    },
    camera: {
        padding: '2px',
        borderRadius: '5px',
        cursor: 'pointer',
        backgroundColor: '#fff',
        color: '#fff',
        border: '2px solid #fff',
        alignItems: 'center',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
        font: 'Viga',
        fontSize: '35px',
        fontWeight: 'bold',
        lineHeight: '65px',
        color: '#fff',
    },
    label: {
        marginBottom: '5px',
        color: '#fff',
    },
    input: {
        padding: '10px',
        marginBottom: '10px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        display: 'block',
    },
    button: {
        padding: '15px 35px',
        borderRadius: '5px',
        cursor: 'pointer',
        backgroundColor: '#DFA100',
        color: '#fff',
        border: '2px solid #DFA100',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        margin: '5px', 
    },
};