import React from 'react'
import NavigationBar from './components/NavigationBar/NavigationBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import Footer from './components/Footer/Footer';
import NewAuthorPage from './pages/Author/NewAuthorPage';

//This is the root component of our application
const App = () => {
    return (
        <BrowserRouter>
            <NavigationBar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/NewAuthor' element = {<NewAuthorPage/>}/>
                <Route path='login' element={<LoginPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App