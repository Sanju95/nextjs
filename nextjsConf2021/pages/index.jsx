import React, { useState } from 'react';
import Header from '../components/Header'

const HomePage = () => {
    const speakers = ['Steven', 'Lee', 'Steph']

    const [likes, setLikes] = useState(0)

    const handleClick = () => setLikes(likes + 1)

    return (
        <div>
            <Header title="Home Page" />
            <ul>
                {speakers.map(speaker => <li key={speaker}>{speaker }</li>)}
            </ul>
            <button onClick={handleClick}>Like { likes}</button>
        </div>
    )
}

export default HomePage;