import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import FileList from './components/FileList.jsx';
import UploadFile from './components/UploadFile.jsx';

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('authToken') || '');

    const setAuthToken = (newToken) => {
        localStorage.setItem('authToken', newToken);
        setToken(newToken);
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        setToken('');
    };

    return (
        <Router>
            <div className="container">
                <h1>File Management System</h1>
                {token ? (
                    <>
                        <button onClick={logout} className="btn btn-danger">Logout</button>
                        <Routes>
                            <Route path="/files" element={<FileList />} />
                            <Route path="/upload" element={<UploadFile />} />
                            <Route path="/" element={<Navigate to="/files" />} />
                        </Routes>
                    </>
                ) : (
                    <Routes>
                        <Route path="/login" element={<Login setToken={setAuthToken} />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/" element={<Navigate to="/login" />} />
                    </Routes>
                )}
            </div>
        </Router>
    );
};

export default App;
