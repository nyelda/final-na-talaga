import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleBMI = () => {
        alert('Proceeding to Calculate BMI');
        window.location.href = '/bmi';
    }

    return (
        <div className="body">
            <div className="dashboard-container">
                    <form style={styles.form}>
                        <h2 style={styles.heading}>Signup</h2>
                            <div>
                                <label htmlFor="username" style={styles.label}>Username: </label>
                                <input
                                    type="text"
                                    id="username"
                                    placeholder="Enter your username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    style={styles.input}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" style={styles.label}>Password: </label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    style={styles.input}
                                />
                            </div>
                    </form>
                    <button type="submit" style={styles.button} onClick={handleBMI}>Create Account</button>
            </div>
                    <div style={styles.signupLink}>
                        Already have an account? <Link to="/login" style={styles.link}>Login here</Link>.
                    </div>
        </div>
    );
};

export default Signup;

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
    form: {
        display: 'flex',
        flexDirection: 'column',
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
    },
    signupLink: {
        marginTop: '10px',
        textAlign: 'center',
    },
    link: {
        color: '#007bff',
        textDecoration: 'none',
        justifyContent: 'center', 
        alignItems: 'center', 
    },
};
