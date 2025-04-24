import React, { useContext } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { FaChartLine, FaUsers, FaShoppingCart, FaBell, FaSun, FaMoon, FaHeadset, FaUserCircle, FaCog, FaSignOutAlt } from 'react-icons/fa';
import './DashboardLayout.scss';
import profileContext from '../../configurations/profileContext';
import themeContext from '../../configurations/themeContext';

const DashboardLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { profileImage } = useContext(profileContext);
    const { isDarkMode, toggleTheme } = useContext(themeContext);

    const handleNavigation = (path) => {
        navigate(path);
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <div className="dashboard-wrapper">
            {/* Top Navigation Bar */}
            <div className="top-nav">
                <div className="logo">
                    <span>falcon</span>
                </div>

                <div className="nav-right">
                    <div className="theme-toggle">
                        <button onClick={toggleTheme}>
                            {isDarkMode ? <FaSun /> : <FaMoon />}
                        </button>
                    </div>
                    <div className="notifications">
                        <span className="badge">2</span>
                        <button><FaBell /></button>
                    </div>
                    <div className="user-profile">
                        {profileImage ? (
                            <img src={profileImage} alt="user" />
                        ) : (
                            <img src="https://i.imgur.com/1v1qJ1u.png" alt="user" />
                        )}
                    </div>
                </div>
            </div>

            <div className="dashboard-content">
                {/* Left Sidebar */}
                <div className="sidebar">
                    <nav>
                        <div className="nav-section">
                            <p className="nav-title">MAIN MENU</p>
                            <ul>
                                <li
                                    className={isActive('/user/dashboard') ? 'active' : ''}
                                    onClick={() => handleNavigation('/user/dashboard')}
                                >
                                    <FaChartLine />
                                    <span>Dashboard</span>
                                </li>
                                <li
                                    className={isActive('/user/profile') ? 'active' : ''}
                                    onClick={() => handleNavigation('/user/profile')}
                                >
                                    <FaUserCircle />
                                    <span>My Profile</span>
                                </li>
                                <li
                                    className={isActive('/user/orders') ? 'active' : ''}
                                    onClick={() => handleNavigation('/user/orders')}
                                >
                                    <FaShoppingCart />
                                    <span>My Orders</span>
                                </li>
                            </ul>
                        </div>

                        <div className="nav-section">
                            <p className="nav-title">PREFERENCES</p>
                            <ul>
                                <li
                                    className={isActive('/user/settings') ? 'active' : ''}
                                    onClick={() => handleNavigation('/user/settings')}
                                >
                                    <FaCog />
                                    <span>Settings</span>
                                </li>
                                <li
                                    className={isActive('/user/help') ? 'active' : ''}
                                    onClick={() => handleNavigation('/user/help')}
                                >
                                    <FaHeadset />
                                    <span>Help Center</span>
                                </li>
                                <li className="logout" onClick={() => handleNavigation('/logout')}>
                                    <FaSignOutAlt />
                                    <span>Logout</span>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                {/* Main Content Area - This is where child routes will render */}
                <div className="main-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;






