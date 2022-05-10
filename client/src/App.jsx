import React, { useState } from 'react'
import NavigationBar from './components/NavigationBar/NavigationBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import Footer from './components/Footer/Footer';
import NewAuthorPage from './pages/Author/NewAuthorPage';
import ManagementMenu from './components/ManagementMenu/ManagementMenu';
import NewPostPage from './pages/Posts/NewPost/NewPostPage';
import PostsListPage from './pages/Posts/PostsList/PostsListPage';
import EditPostPage from './pages/Posts/EditPost/EditPostPage';


//application context
export const AppContext = React.createContext();

//This is the root component of our application
const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <AppContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            <BrowserRouter>
                <NavigationBar />
                {isLoggedIn && <ManagementMenu />}
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/NewAuthor' element={<NewAuthorPage />} />
                    <Route path='login' element={<LoginPage />} />
                    <Route path='posts/new' element={<NewPostPage />} />
                    <Route path='posts/edit/:postId' element={<EditPostPage />} />
                    <Route path='posts' element={<PostsListPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App