import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import ViewListIcon from '@mui/icons-material/ViewList';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Tooltip from '@mui/material/Tooltip'; // Import Tooltip from Material-UI
import './sidebarmenu.css';

interface SidebarMenuProps {
    setIsTabLoading: (value: boolean) => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ setIsTabLoading }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    // Get active tab from URL, default to 'Home'
    const activeTab = searchParams.get("tab") || "Home";

    // List of valid tabs
    const itemList = ['Home', 'Projects', 'Upload', 'Templates', 'Settings', 'Profile'];

    // Redirect to /404 if the tab is not in the itemList
    useEffect(() => {
        if (!itemList.includes(activeTab)) {
            navigate('/404');
        }
    }, [activeTab, navigate]);

    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    const handleMenuClick = (item: string) => {
        setIsTabLoading(true);
        setTimeout(() => {
            setIsTabLoading(false);
            setSearchParams({ tab: item });
            navigate(`/dashboard?tab=${item}`);
        }, 1500);
    };

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
                    <Tooltip
                        key={name}
                        title={name} // Tooltip content
                        placement="right" // Tooltip position
                        arrow // Add an arrow to the tooltip
                        disableHoverListener={!isCollapsed} // Disable tooltip when sidebar is expanded
                    >
                        <div
                            className={`menu-item ${activeTab === name ? 'active' : ''}`}
                            onClick={() => handleMenuClick(name)}
                        >
                            {icon}
                            {!isCollapsed && <span className="menu-text">{name}</span>}
                        </div>
                    </Tooltip>
                ))}
            </div>

            {/* Profile & Settings Section */}
            <div className="sidebar-footer">
                <div className={`profile-settings ${isCollapsed ? 'collapsed' : ''}`}>
                    <Tooltip
                        title="Settings"
                        placement="right"
                        arrow
                        disableHoverListener={!isCollapsed}
                    >
                        <div
                            className={`menu-item ${activeTab === "Settings" ? 'active' : ''}`}
                            onClick={() => handleMenuClick("Settings")}
                        >
                            <SettingsIcon className="menu-icon" />
                            {!isCollapsed && <span className="menu-text">Settings</span>}
                        </div>
                    </Tooltip>
                    <Tooltip
                        title="Profile"
                        placement="right"
                        arrow
                        disableHoverListener={!isCollapsed}
                    >
                        <div
                            className={`menu-item ${activeTab === "Profile" ? 'active' : ''}`}
                            onClick={() => handleMenuClick("Profile")}
                        >
                            <AccountCircleIcon className="menu-icon" />
                            {!isCollapsed && <span className="menu-text">Profile</span>}
                        </div>
                    </Tooltip>
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