import React from 'react';

export default function Home() {
    return (
        <div className='home-container'>
            <h1>Lambda Eats Home</h1>
            <img className='homeImg' src='https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1250&q=80' alt='Pizza'/>

            <button className='formBtn' onClick="window.location.href='/pizza'">Pizza?</button>

        </div>
    )
}