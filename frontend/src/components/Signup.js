import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (!username || !password || !weight || !height ) {
            alert('Please fill in all fields.');
            return;
        } else {
            alert('Proceeding to Calculate BMI');
            window.location.href = '/bmi';
        }
    
        console.log(username, password, weight, height);
        fetch("http://localhost:5000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
                weight: weight,
                height: height,
            }),
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw new Error('Failed to create account. Please try again.');
        })
        .then((data) => {
            console.log(data, "userRegister")
            alert('Account Saved!');
            setUsername('');
            setPassword('');
            setWeight('')
            setHeight('')
            setPassword('')
        })
        .catch(error => {
            console.error("Error registering user:", error);
            if (error.message.includes('409')) {
                alert('Account already exists.');
            } else {
                alert('Error creating account. Please try again.');
            }
        });
    };

    return (
        <div className="body">
            <div className="dashboard-container">
                <form onSubmit={handleSubmit} style={styles.form}>
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
                    <div>
                        <label htmlFor="weight" style={styles.label}>Weight: </label>
                        <input
                            type="text"
                            id="weight"
                            placeholder="Enter your weight in kg"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            style={styles.input}
                        />
                    </div>
                    <div>
                        <label htmlFor="height" style={styles.label}>Height: </label>
                        <input
                            type="text"
                            id="height"
                            placeholder="Enter your height in cm"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            style={styles.input}
                        />
                    </div>
                    <button type="submit" style={styles.button1}>Create Account</button>
                </form>
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
        alignItems: 'right',
        marginLeft: '600px',
    },
    button1: {
        padding: '15px 35px',
        borderRadius: '5px',
        cursor: 'pointer',
        backgroundColor: '#DFA100',
        color: '#fff',
        border: '2px solid #DFA100',
        display: 'flex',
        justifyContent: 'center',
        marginRight: '600px',
        margin: '10px',
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