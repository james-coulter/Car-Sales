import React from 'react';
import {Link} from 'react-router-dom';
import Purchase from './purchase';

const HomePage = props => {
    return (
        <div>
            <h1>Let's buy a car!</h1>
            <Link to='/purchase'>
                Choose Options
                </Link>
        </div>
    )
}

export default HomePage;