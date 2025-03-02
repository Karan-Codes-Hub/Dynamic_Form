import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu';
import AnimatedLoader from '../../components/CustomComponents/LoaderComponent/AnimatedLoader';
import './Dashboard.css';
// import { CircularProgress } from '@mui/material';
// import Card from '../../components/CustomComponents/CardComponent/Card';
import CreateForm from '../CreateForm/CreateForm';

const Dashboard: React.FC = () => {
    const [isTabLoading, setIsTabLoading] = useState(true);
    const [searchParams] = useSearchParams(); // Hook to access URL search params
    const tab = searchParams.get('tab') || 'Home'; // Get the 'tab' parameter, default to 'Home'

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTabLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
  
    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <SidebarMenu setIsTabLoading={setIsTabLoading} />
            </div>
            <div className="main-content">
            {isTabLoading ? (
                <div className="loader-container">
                    <AnimatedLoader message="Loading..." />
                </div>
            ) : (
                tab === "CreateForm" ? (
                    <div className='content'>
                        <CreateForm />
                    </div>
                ) : (
                    <div className="content">
                        <h1>Welcome to {tab}</h1>
                        <p>This is the main content of the {tab} page.</p>
                        {/* <CircularProgress /> */}
                    </div>
                )
            )}
        </div>
        </div>
    );
};

export default Dashboard;