import React, { useState, useEffect } from 'react';
import profileContext from '../configurations/profileContext';

export const ProfileContextProvider = ({ children }) => {
    const [profileImage, setProfileImage] = useState(() => {
        const savedData = localStorage.getItem('profileData');
        return savedData ? JSON.parse(savedData).profileImage : null;
    });

    useEffect(() => {
        const savedData = localStorage.getItem('profileData');
        if (savedData) {
            const data = JSON.parse(savedData);
            data.profileImage = profileImage;
            localStorage.setItem('profileData', JSON.stringify(data));
        }
    }, [profileImage]);

    const updateProfileImage = (newImage) => {
        setProfileImage(newImage);
    };

    return (
        <profileContext.Provider value={{ profileImage, updateProfileImage }}>
            {children}
        </profileContext.Provider>
    );
};