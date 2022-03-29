import React from 'react'
import NavigationBar from './components/NavigationBar/NavigationBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import DashboardPage from './pages/Dashboard/DashboardPage';

//This is the root component of our application
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <NavigationBar />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='login' element={<LoginPage />} />
                    <Route path='dashboard' element={<DashboardPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App