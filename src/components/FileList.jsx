import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FileList = () => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const response = await axios.get('/api/files');
                setFiles(response.data);
            } catch (error) {
                console.error('Error fetching files:', error);
            }
        };

        fetchFiles();
    }, []);

    return (
        <div className="container">
            <h2>Files</h2>
            <ul className="list-group">
                {files.map(file => (
                    <li key={file._id} className="list-group-item">
                        <a href={file.fileUrl} target="_blank" rel="noopener noreferrer">
                            {file.projectName}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FileList;
