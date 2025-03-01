import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import ViewListIcon from '@mui/icons-material/ViewList';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './sidebarmenu.css';

const SidebarMenu: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    // Get active tab from URL, default to 'Home'
    const activeTab = searchParams.get("tab") || "Home";

    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    const handleMenuClick = (item: string) => {
        setSearchParams({ tab: item });
        navigate(`/dashboard?tab=${item}`);
    };

    useEffect(() => {
        console.log(activeTab);
    }, [activeTab]);

    return (
        <div className={`sidebar-container ${isCollapsed ? 'collapsed' : ''}`}>

            {/* Sidebar Header */}
            <div className="sidebar-header">
                {/* Collapse Button */}
                <button className="collapse-button" onClick={toggleCollapse}>
                    <MenuIcon className="menu-toggle-icon" />
                </button>

                {/* Logo */}
                {!isCollapsed && (
                    <div className="logo-container">
                        <span className="logo-text">
                            Form<span className="logo-highlight">Builder</span>
                        </span>
                    </div>
                )}
            </div>

            {/* Menu Section */}
            <div className="menu-section">
                {menuItems.map(({ name, icon }) => (
                    <div
                        key={name}
                        className={`menu-item ${activeTab === name ? 'active' : ''}`}
                        onClick={() => handleMenuClick(name)}
                    >
                        {icon}
                        {!isCollapsed && <span className="menu-text">{name}</span>}
                    </div>
                ))}
            </div>

            {/* Profile & Settings Section */}
            <div className="sidebar-footer">
                <div className={`profile-settings ${isCollapsed ? 'collapsed' : ''}`}>
                    <div className={`menu-item ${activeTab === "settings" ? 'active' : ''}`} onClick={() => handleMenuClick("settings")}>
                        <SettingsIcon className="menu-icon" />
                        {!isCollapsed && <span className="menu-text">Settings</span>}
                    </div>
                    <div className={`menu-item ${activeTab === "profile" ? 'active' : ''}`} onClick={() => handleMenuClick("profile")}>
                        <AccountCircleIcon className="menu-icon" />
                        {!isCollapsed && <span className="menu-text">Profile</span>}
                    </div>
                </div>
            </div>

        </div>
    );
};

const menuItems = [
    { name: 'Home', icon: <HomeIcon className="menu-icon" /> },
    { name: 'Projects', icon: <FolderIcon className="menu-icon" /> },
    { name: 'Upload', icon: <UploadFileIcon className="menu-icon" /> },
    { name: 'Templates', icon: <ViewListIcon className="menu-icon" /> },
];

export default SidebarMenu;
