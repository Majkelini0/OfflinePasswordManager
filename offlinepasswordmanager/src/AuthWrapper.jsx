import './index.css';
import React, {useState} from 'react';
import App from './App';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import {AnimatePresence, motion} from 'framer-motion';


function AuthWrapper() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authScreen, setAuthScreen] = useState('login');

    const handleLogin = (credentials) => {
        console.log("Login: " + credentials.login);
        console.log("Password: " + credentials.password);

        // setAuthScreen('register');
    }

    const handleRegister = (credentials) => {
        console.log("Login: " + credentials.login);
        console.log("Password: " + credentials.password);
        console.log("Password repeat: " + credentials.passwordRepeat);

        // setAuthScreen('login');
    }

    if (isAuthenticated) {
        return <App/>
    }

    return (
        <>
            <div className="fixed inset-0 bg-dark flex justify-center items-center z-50">
                <AnimatePresence mode="wait">
                    {authScreen === "login" ? (
                        <motion.div
                            key="login"
                            initial={{opacity: 0, y: 300}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: 0}}
                            transition={{duration: 0.5}}
                        >
                            <Login
                                onLogin={handleLogin}
                                onSwitchToRegister={() => {
                                    setAuthScreen("register")
                                }}
                            />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="register"
                            initial={{opacity: 0, y: 300}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: 0}}
                            transition={{duration: 0.5}}
                        >
                            <Register
                                onRegister={handleRegister}
                                onSwitchToLogin={() => {
                                    setAuthScreen("login")
                                }}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}

export default AuthWrapper;