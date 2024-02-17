import React, { useState } from 'react';
import '../Navbar.css';

const NavBar = () => {
    const [activeTab, setActiveTab] = useState('navigate');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="body">
            <div className="dashboard-container">
                <h1 style={styles.font1}> Team 26 </h1>
                <div className="navigation">
                    <div className={`nav-item ${activeTab === 'navigate' ? 'active' : ''}`} onClick={() => handleTabChange('exercises')}>Home</div>
                    <div className={`nav-item ${activeTab === 'navigate' ? 'active' : ''}`} onClick={() => handleTabChange('exercises')}>About Us</div>
                    <div className={`nav-item ${activeTab === 'navigate' ? 'active' : ''}`} onClick={() => handleTabChange('exercises')}>Contact Us</div>
                </div>
                <div className="tab-content">
                    {activeTab === 'navigate' && <HomeTab />}
                </div>
            </div>
        </div>
    );
};

const HomeTab = () => {

    const handleLogin = () => {
        window.location.href = '/login';
    }

    const handleCreate = () => {
        window.location.href = '/signup';
    }

    return (
        <div style={styles.container}>
            <div style={styles.container1}>
                <h1 style={styles.font}> REACH YOUR LIMITS AND GET TO THE NEXT LEVEL </h1>
                <button type="submit" style={styles.button} onClick={handleLogin}> LOGIN </button>
                <button type="submit" style={styles.button1} onClick={handleCreate}> CREATE ACCOUNT NOW </button>
            </div>
        </div>

    );
};

export default NavBar;

const styles = {
    container: {
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
    },
    container1: {
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
    },
    button: {
        padding: '15px 35px',
        backgroundColor: 'transparent',
        color: '#fff',
        border: '2px solid #fff',
        borderRadius: '3px',
        cursor: 'pointer',
        marginTop: '20px',
        alignItems: 'center',
    },
    button1: {
        padding: '15px 35px',
        backgroundColor: '#DFA100',
        color: '#fff',
        border: '2px solid #DFA100',
        borderRadius: '3px',
        cursor: 'pointer',
        margin: '20px',
        alignItems: 'center',
    },
    font: {
        fontFamily: 'Poppins',
        fontSize: '45px',
        fontWeight: '700',
        lineHeight: '60px',
        letterSpacing: '0em',
        textAlign: 'center',
        marginTop: '250px',
        color: '#fff',
    },
    font1: {
        fontFamily: 'Rubik',
        fontSize: '30px',
        fontWeight: '800',
        lineHeight: '36px',
        letterSpacing: '0em',
        textAlign: 'left',
        color: '#fff',
    }
};
