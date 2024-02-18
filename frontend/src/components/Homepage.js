import React from 'react';

const Homepage = () => {

    const handleExer = () => {
        alert('Are you READY? READY!');
        window.location.href = '/exercise';
    };

    return(
        <div className="body">
            <div className="dashboard-container">
                <h2 style={styles.heading}>Choose Exercise</h2>
            </div>
            <div style={styles.container}>
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
                        <h1 style={styles.text}>OVERHEAD RAISE</h1>
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
                    <div className="picture9">
                        <h1 style={styles.text}>RUSSIAN TWIST</h1>
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

export default Homepage;

const styles = {
    container: {
        padding: '50px',
        borderRadius: '50px',
        backgroundColor: 'transparent',
        border: '5px solid transparent',
    },
    exercise: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridColumnGap: '20px', 
        gridRowGap: '20px', 
        padding: '20px',
        borderRadius: '30px',
        backgroundColor: '#DFA100',
        marginBottom: '20px',
    },
    heading: {
        textAlign: 'center',
        font: 'Viga',
        fontSize: '35px',
        fontWeight: 'bold',
        lineHeight: '65px',
        color: '#fff',
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
        color: '#000000',
        fontWeight: '10px',
        whiteSpace: 'nowrap',
        textAlign: 'center',
        justifyContent: 'center',
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
};