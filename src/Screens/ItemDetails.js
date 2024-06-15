import React from 'react';
import { categoryDetailsPage as category } from '../Constants/constant';
import './itemdetails.css'

const SubcategoryPage = () => {

    const DetailsCard = ({ category }) => {
        return (
            <div className='item-component'>
                <div className='foldername'>
                    <img src='https://pngfre.com/wp-content/uploads/Folder-28.png' alt='folder' />
                    <h2><a href='https://static.vecteezy.com/system/resources/previews/011/946/312/non_2x/illustration-of-browser-error-icon-file-not-found-free-vector.jpg'>{category.year}</a></h2>
                </div>
                <div>
                    <h3>Subcatagories: {category.subcategories.length}</h3>
                    <h3>Files: {category.files.length}</h3>
                </div>
            </div>
        );
    };

    const randomizedCategories = [...category].sort(() => Math.random() - 0.5);
    return (
        <div>
            <header className='header'>
                <div className='mainheader'>
                    <h1>EXPLORE GREEN PVT. LTD.</h1>
                </div>
                <nav className='navbar'>
                    <ul className='navigation'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/details">Biology Mathematics</a></li>
                        <li><a href="/details">Computer Maths</a></li>
                        <li><a href="/details">Science</a></li>
                        <li><a href="/details">Commerce</a></li>
                        <li><a href="/details">Vocational</a></li>
                        <li><a href="/details">All</a></li>

                    </ul>
                </nav>
            </header>
            <div>
                <button onClick={() => window.history.back()}>Overview</button>
                <button onClick={() => window.history.back()}>Search</button>
                <button onClick={() => window.history.back()}>Up</button>
            </div>
            <div>
                <ul>
                    {randomizedCategories.map((category, index) => (
                        <DetailsCard key={index} category={category} />
                    ))}
                </ul>
            </div>
            <button onClick={() => window.history.back()}>Back</button>
            <footer className="footer">
                <p>&copy; 2024 Explore Green Pvt Ltd. All rights reserved.</p>
            </footer>
        </div>


    );
};

export default SubcategoryPage;
