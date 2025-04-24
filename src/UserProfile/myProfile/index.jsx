import React, { useState, useEffect, useContext } from 'react';
import { FaEdit, FaUser, FaSave, FaTimes } from 'react-icons/fa';
import './myprofile.scss';
import profileContext from '../../configurations/profileContext';

export default function MyProfile() {
  const { updateProfileImage } = useContext(profileContext);

  const [profileData, setProfileData] = useState(() => {
    const savedData = localStorage.getItem('profileData');
    return savedData ? JSON.parse(savedData) : {
      profileImage: null,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '+1 234 567 8900',
      dateOfBirth: '1990-01-01',
      gender: 'Male',
      address: '123 Main Street, New York, NY 10001',
      occupation: 'Software Developer',
      bio: 'Passionate about creating beautiful and functional web applications.'
    };
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(profileData);

  useEffect(() => {
    localStorage.setItem('profileData', JSON.stringify(profileData));
  }, [profileData]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        const confirmChange = window.confirm('Do you want to change your profile photo?');
        if (confirmChange) {
          setProfileData(prev => ({
            ...prev,
            profileImage: result
          }));
          updateProfileImage(result); // Update shared profile image
        }
        event.target.value = '';
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = () => {
    setEditedData(profileData);
    setIsEditing(true);
  };

  const handleSave = () => {
    setProfileData(editedData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedData(profileData);
  };

  const handleChange = (field, value) => {
    setEditedData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-cover">
          <div className="profile-photo">
            {profileData.profileImage ? (
              <img src={profileData.profileImage} alt="Profile" />
            ) : (
              <div className="profile-placeholder">
                <FaUser />
              </div>
            )}
            <label className="edit-photo" htmlFor="profile-upload">
              <FaEdit />
              <input
                type="file"
                id="profile-upload"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
            </label>
          </div>
        </div>

        {/* Buttons wrapped in a container */}
        <div className="button-container">
          {!isEditing ? (
            <button className="edit-button" onClick={handleEdit}>
              <FaEdit /> Edit Profile
            </button>
          ) : (
            <div className="edit-buttons">
              <button className="save-button" onClick={handleSave}>
                <FaSave /> Save
              </button>
              <button className="cancel-button" onClick={handleCancel}>
                <FaTimes /> Cancel
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="profile-content">
        <div className="profile-section">
          <h3>Personal Information</h3>
          <div className="info-grid">
            {[
              { label: 'First Name', field: 'firstName', readonly: true },
              { label: 'Last Name', field: 'lastName', readonly: true },
              { label: 'Email', field: 'email', readonly: true },
              { label: 'Phone', field: 'phone' },
              { label: 'Date of Birth', field: 'dateOfBirth' },
              { label: 'Gender', field: 'gender' }
            ].map(({ label, field, readonly }) => (
              <div className="info-item" key={field}>
                <label>{label}</label>
                {isEditing ? (
                  readonly ? (
                    <p className="readonly-field">{profileData[field]}</p>
                  ) : (
                    <input
                      type={field === 'dateOfBirth' ? 'date' : 'text'}
                      value={editedData[field]}
                      onChange={(e) => handleChange(field, e.target.value)}
                      className="edit-input"
                    />
                  )
                ) : (
                  <p>{profileData[field]}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="profile-section">
          <h3>Additional Information</h3>
          <div className="info-grid">
            {[
              { label: 'Address', field: 'address', fullWidth: true },
              { label: 'Occupation', field: 'occupation' },
              { label: 'Bio', field: 'bio', fullWidth: true }
            ].map(({ label, field, fullWidth }) => (
              <div className={`info-item ${fullWidth ? 'full-width' : ''}`} key={field}>
                <label>{label}</label>
                {isEditing ? (
                  field === 'bio' ? (
                    <textarea
                      value={editedData[field]}
                      onChange={(e) => handleChange(field, e.target.value)}
                      className="edit-input"
                      rows="4"
                    />
                  ) : (
                    <input
                      type="text"
                      value={editedData[field]}
                      onChange={(e) => handleChange(field, e.target.value)}
                      className="edit-input"
                    />
                  )
                ) : (
                  <p>{profileData[field]}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
