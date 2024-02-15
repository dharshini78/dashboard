import React, { useState } from 'react';
import { MultipleFilesUpload, TextUpload } from 'react-ipfs-uploader';
import './Notes.css'

const Notes = () => {
    const [multipleFilesUrl, setMultipleFilesUrl] = useState('');
    const [textUrl, setTextUrl] = useState('');

    return (
        <div className='uploads'>
            <div className='multiple'>
                <MultipleFilesUpload setUrl={setMultipleFilesUrl} />
                MultipleFilesUrl : 
                <a
                    href={multipleFilesUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    {multipleFilesUrl}
                </a>
            </div>

            <div className='text'>
                <TextUpload setUrl={setTextUrl} />
                TextUrl : 
                <a
                    href={textUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    {textUrl}
                </a>
            </div>
        </div>
    );
};

export default Notes;
