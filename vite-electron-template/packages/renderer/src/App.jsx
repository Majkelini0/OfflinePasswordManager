import {useState} from 'react';
import AuthWrapper from './AuthWrapper';
// import {sha256sum, send} from '#preload';
import {sha256sum, send} from '@app/preload';
import MainWindow from "./MainWindow.jsx";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authScreen, setAuthScreen] = useState('login');
    const [registerStatus, setRegisterStatus] = useState(null);
    const [loginStatus, setLoginStatus] = useState(null);
    const [folderPath, setFolderPath] = useState('');
    const [filePath, setFilePath] = useState('');

    const handleLogin = async (credentials) => {
        try{
            const loginData = JSON.stringify({
                password: credentials.password,
                filePath: filePath
            });
            const response = await send('auth:login', loginData);

            setLoginStatus(response);

            if(response.success){
                setIsAuthenticated(true);
            }
        }catch(error){
            console.error('Login error: ', error);
        }
    };

    const handleRegister = async (credentials) => {
        try {
            if (credentials.password !== credentials.passwordRepeat) {
                setRegisterStatus({success: false, message: 'Passwords do not match'});
                console.log('Passwords do not match');
                return;
            }
            // Never send plain passwords through IPC
            // Encrypt sensitive data before sending
            const registerData = JSON.stringify({
                login: credentials.login,
                password: credentials.password,
                folderPath: folderPath
            });
            // Send to main process via preload bridge
            const response = await send('auth:register', registerData);

            setRegisterStatus(response);
            if (response.success) {
                setAuthScreen('login');
            }
        } catch (error) {
            console.error('Registration error:', error);
            setRegisterStatus({success: false, message: 'Registration failed'});
        }
    };

    const handleFolderSelection = async () => {
        try {
            const result = await send('dialog:selectFolder', null);
            if (!result.canceled && result.filePath) {
                setFolderPath(result.filePath);
            }
        } catch (error) {
            console.error('Error selecting folder:', error);
        }
    };

    const handleFileSelection = async () => {
        try {
            const result = await send('dialog:selectFile', null);
            if (!result.canceled && result.filePath) {
                setFilePath(result.filePath);
            }
        } catch (error) {
            console.error('Error selecting filepath:', error);
        }
    };

    if (isAuthenticated) {
        return <MainWindow/>;
    }

    return (
        <>
            <AuthWrapper handleLogin={handleLogin}
                         handleRegister={handleRegister}
                         setAuthScreen={setAuthScreen}
                         authScreen={authScreen}
                         handleFolderSelection={handleFolderSelection}
                         handleFileSelection={handleFileSelection}
            />
        </>
    );
}

export default App;
