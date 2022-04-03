import React from 'react'
import { Link } from 'react-router-dom';
import "./ManagementMenu.scss";

const ManagementMenu = () => {
    return (
        <aside className='management-menu'>
            <Link to={"/NewAuthor"}>New Author</Link>
            <Link to={"/NewAuthor"}>New Author</Link>
            <Link to={"/NewAuthor"}>New Author</Link>
        </aside>
    )
}

export default ManagementMenu