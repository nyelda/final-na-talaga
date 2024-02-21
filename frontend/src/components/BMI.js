import React, { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '../Navbar.css';

const BMI = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState(null);
    const [showCamera, setShowCamera] = useState(false);
    const [model, setModel] = useState(null);
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const loadModel = async () => {
            const loadedModel = await cocoSsd.load();
            setModel(loadedModel);
        };
        loadModel();
    }, []);

    const handleHome = () => {
        alert('Proceeding to Homepage');
        window.location.href = '/homepage';
    };

    const cameraClick = () => {
        setShowCamera(true);
        estimateHeightFromCamera();
    };

    const estimateHeightFromCamera = async () => {
        if (model && webcamRef.current) {
            const predictions = await model.detect(webcamRef.current.video);
            if (predictions.length > 0) {
                const person = predictions[0];
                const estimatedHeight = Math.floor(Math.random() * (190 - 140 + 1)) + 140;
                setHeight(estimatedHeight);
                drawRect(person);
            }
        }
    };

    const drawRect = (person) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const [x, y, width, height] = person.bbox;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#00FFFF';
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, width, height);
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
                            <button type="submit" style={styles.button} onClick={cameraClick}> Estimate Height </button>
                            </div>
                            <div style={styles.webContainer}>
                                    <div style={styles.camera}>
                                    {showCamera && (
                                        <>
                                            <Webcam 
                                                ref={webcamRef}
                                                height={400} 
                                                width={700}
                                            />
                                            <canvas
                                                ref={canvasRef}
                                                style={{ position: 'absolute', top: 0, left: 0 }}
                                                width={400}
                                                height={400}
                                            />
                                        </>
                                    )}
                                    </div>
                                        <div style={styles.text}>
                                        <h2>Your Height: {height ? height + ' cm' : 'Height estimation in progress...'}</h2>
                                        <h2>BMI:</h2>
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
        position: 'relative',
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
    text:{
        textAlign: 'left',
        fontSize: '15px',
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
