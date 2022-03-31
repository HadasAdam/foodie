import React from 'react'
import NavigationBar from './components/NavigationBar/NavigationBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import Footer from './components/Footer/Footer';

//This is the root component of our application
const App = () => {
    return (
        <BrowserRouter>
            <NavigationBar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='dashboard' element={<DashboardPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App