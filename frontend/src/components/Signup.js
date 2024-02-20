import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (!username || !password) {
            alert('Please fill in all fields.');
            return;
        }
    
        console.log(username, password);
        fetch("http://localhost:5000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
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

    const handleBMI = () => {
        alert('Proceeding to Calculate BMI');
        window.location.href = '/bmi';
    };

    return (
        <div className="body">
            <div className="dashboard-container">
                <form onSubmit={handleSubmit} style={styles.form}> {/* Handle form submission */}
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
                    <button type="submit" style={styles.button1}>Create Account</button>
                    <button type="button" style={styles.button} onClick={handleBMI}>Proceed to BMI</button>
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