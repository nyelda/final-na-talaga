import React, { useState } from 'react';
import '../Navbar.css';

const Homepage = () => {
    const [activeTab, setActiveTab] = useState('exercise');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="body1">
            <div className="dashboard-container">
                <div className="navigation">
                    <div className={`nav-item ${activeTab === 'exercise' ? 'active' : ''}`} onClick={() => handleTabChange('exercise')}>Exercises</div>
                    <div className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => handleTabChange('profile')}>Profile</div>
                </div>
                <div className="tab-content">
                    {activeTab === 'exercise' && <HomeTab />}
                    {activeTab === 'profile' && <ProfileTab />}
                </div>
            </div>
        </div>
    );
};

const HomeTab = () => {

    const handleExer = () => {
        alert('Are you READY? READY!');
        window.location.href = '/exercise';
    };

    return(
        <div className="body2">
            <div className="dashboard-container">
                <h2 style={styles.heading}>Choose Exercise</h2>
            </div>
            <div className="exercise">
                <div style={styles.exercise}>
                    <div className="picture">
                        <h1 style={styles.text}>BARBELL BICEPS CURL</h1>
                        <div style={styles.reco}>
                            <h3 style={styles.text2}>Recommended</h3>
                        </div>
                        <h2 style={styles.text1}>LEGS & ARMS | 3 Minutes </h2>
                        <button type="submit" style={styles.start} onClick={handleExer}>Click to Start</button>
                    </div>
                </div>
                <div style={styles.exercise}>
                    <div className="picture2">
                        <h1 style={styles.text}>BARBELL ROW</h1>
                        <div style={styles.reco}>
                            <h3 style={styles.text2}>Recommended</h3>
                        </div>
                        <h2 style={styles.text1}>DEAD LIFT | 3 Minutes </h2>
                        <button type="submit" style={styles.start} onClick={handleExer}>Click to Start</button>
                    </div>
                </div>
                <div style={styles.exercise}>
                    <div className="picture3">
                        <h1 style={styles.text}>DEAD LIFT</h1>
                        <div style={styles.reco}>
                            <h3 style={styles.text2}>Recommended</h3>
                        </div>
                        <h2 style={styles.text1}>CHEST & ARMS | 3 Minutes </h2>
                        <button type="submit" style={styles.start} onClick={handleExer}>Click to Start</button>
                    </div>
                </div>
                <div style={styles.exercise}>
                    <div className="picture4">
                        <h1 style={styles.text}>JUMP & JACKS</h1>
                        <div style={styles.reco}>
                            <h3 style={styles.text2}>Recommended</h3>
                        </div>
                        <h2 style={styles.text1}>DEAD LIFT | 3 Minutes </h2>
                        <button type="submit" style={styles.start} onClick={handleExer}>Click to Start</button>
                    </div>
                </div>
                <div style={styles.exercise}>
                    <div className="picture5">
                        <h1 style={styles.text}>LATERAL RAISE</h1>
                        <div style={styles.reco}>
                            <h3 style={styles.text2}>Recommended</h3>
                        </div>
                        <h2 style={styles.text1}>CHEST & ARMS | 3 Minutes </h2>
                        <button type="submit" style={styles.start} onClick={handleExer}>Click to Start</button>
                    </div>
                </div>
                <div style={styles.exercise}>
                    <div className="picture6">
                        <h1 style={styles.text}>LUNGES</h1>
                        <div style={styles.reco}>
                            <h3 style={styles.text2}>Recommended</h3>
                        </div>
                        <h2 style={styles.text1}>DEAD LIFT | 3 Minutes </h2>
                        <button type="submit" style={styles.start} onClick={handleExer}>Click to Start</button>
                    </div>
                </div>
                <div style={styles.exercise}>
                    <div className="picture7">
                        <h1 style={styles.text}>OVERHEAD PRESS</h1>
                        <div style={styles.reco}>
                            <h3 style={styles.text2}>Recommended</h3>
                        </div>
                        <h2 style={styles.text1}>DEAD LIFT | 3 Minutes </h2>
                        <button type="submit" style={styles.start} onClick={handleExer}>Click to Start</button>
                    </div>
                </div>
                <div style={styles.exercise}>
                    <div className="picture8">
                        <h1 style={styles.text}>PUSH UPS</h1>
                        <div style={styles.reco}>
                            <h3 style={styles.text2}>Recommended</h3>
                        </div>
                        <h2 style={styles.text1}>DEAD LIFT | 3 Minutes </h2>
                        <button type="submit" style={styles.start} onClick={handleExer}>Click to Start</button>
                    </div>
                </div>
                <div style={styles.exercise}>
                    <div className="picture10">
                        <h1 style={styles.text}>SQUAT</h1>
                        <div style={styles.reco}>
                            <h3 style={styles.text2}>Recommended</h3>
                        </div>
                        <h2 style={styles.text1}>DEAD LIFT | 3 Minutes </h2>
                        <button type="submit" style={styles.start} onClick={handleExer}>Click to Start</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProfileTab = () => {

    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    
    const handleNice= () => {
        alert('Progress Saved!');
        window.location.href = '/homepage';
    };

    return (
    <div className="body3">
        <div className="dashboard-container">
            <h2 style={styles.heading}>Profile Settings</h2>
        </div>
        <div styles={styles.container}>
            <div className="user">
                <h3>Name:</h3>
            </div>
            <h3 styles={styles.text3}>Height:</h3>
            <h3 styles={styles.text3}>Weight:</h3>
            <h3 styles={styles.text3}>BMI:</h3>
        </div>
        <div>
            <label htmlFor="height" style={styles.label}>Height</label>
                <input
                    type="number"
                    id="height"
                    placeholder="Enter your height in cm"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    style={styles.input}
                />
        </div>
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
        <div className="dashboard-container">
            <h2 style={styles.heading}>Progress Report</h2>
        </div>
        <button type="submit" style={styles.button} onClick={handleNice}>Save Profile</button>
    </div>
    );
};

export default Homepage;

const styles = {
    container: {
        padding: '50px',
        borderRadius: '40px',
        backgroundColor: 'transparent',
        border: '5px solid transparnt',
    },
    exercise: {
        padding: '20px',
        paddingRight: '22px',
        borderRadius: '30px',
        backgroundColor: '#DFA100',
        marginBottom: '20px',
        margin: '20px',
    },
    heading: {
        textAlign: 'center',
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
    text: {
        textAlign: 'left',
        fontSize: '20px',
        color: '#fff',
        fontWeight: 'bold',
        whiteSpace: 'nowrap',
        marginLeft: '20px',
    },
    text1: {
        fontSize: '10px',
        color: '#fff',
        fontWeight: '10px',
        whiteSpace: 'nowrap',
        textAlign: 'left',
        marginLeft: '20px',
    },
    text2: {
        fontSize: '10px',
        color: '#fff',
        fontWeight: '10px',
        whiteSpace: 'nowrap',
        textAlign: 'center',
        justifyContent: 'center',
    },
    text3: {
        fontSize: '10px',
        color: '#000000',
        fontWeight: '10px',
        whiteSpace: 'nowrap',
        textAlign: 'center',
    },
    reco: {
        borderRadius: '10px',
        cursor: 'pointer',
        backgroundColor: '#FFFF00',
        border: '2px solid transparent',
        margin: '5px',
        width: '80px', 
        height: '30px',
        marginLeft: '5px',
    },
    start: {
        borderRadius: '20px',
        cursor: 'pointer',
        backgroundColor: '#808080',
        color: '#fff',
        border: '2px solid #808080',
        margin: '5px',
        width: '100px', 
        height: '35px',
        alignItems: 'left',
        whiteSpace: 'nowrap',
        marginLeft: '5px',
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