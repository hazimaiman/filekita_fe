import React, { useState } from 'react';
import axios from 'axios';

const UploadFile = () => {
    const [projectName, setProjectName] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('projectName', projectName);
        formData.append('file', file);

        try {
            await axios.post('/api/files/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('File uploaded successfully');
        } catch (error) {
            console.error('File upload failed:', error.response.data.message);
        }
    };

    return (
        <div className="container">
            <h2>Upload File</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Project Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>File:</label>
                    <input
                        type="file"
                        className="form-control"
                        onChange={(e) => setFile(e.target.files[0])}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Upload</button>
            </form>
        </div>
    );
};

export default UploadFile;
