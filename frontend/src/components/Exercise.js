import React, { useState } from 'react';
import Webcam from 'react-webcam';

const Exercise = () => {
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
            <h2 style={styles.heading}>Start Workout</h2>
                <div className="video">
                    <video>

                    </video>
                        <div style={styles.webContainer}>
                            <button type="submit" style={styles.button} onClick={cameraClick}>Click here to Start</button>
                            <div style={styles.camera}>
                                {showCamera && (
                                <Webcam 
                                height={400} 
                                width={400}
                                />
                                )}
                            </div>
                            <div style={styles.text}>
                                <h2>Set:</h2>
                                <h2>Rep:</h2>
                            </div>
                            <button type="submit" style={styles.button} onClick={handleHome}>End Workout</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Exercise;

const styles = {
    heading: {
        textAlign: 'center',
        font: 'Viga',
        fontSize: '35px',
        fontWeight: 'bold',
        lineHeight: '65px',
        color: '#fff',
    },
    webContainer: {
        padding: '50px',
        cursor: 'pointer',
        backgroundColor: '#000000',
        border: '2px solid #000000',
        borderRadius: '20px',
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
    text:{
        textAlign: 'left',
        fontSize: '15px',
        color: '#fff',
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