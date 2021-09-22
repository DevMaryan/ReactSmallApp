import React from 'react';
import '../css/formAbout.css';

export function About(){

    return(
        <div id = 'about'>
            <h2>About</h2>
            <form>
                <span>StudentID: <input type = 'number'/></span>
                <span>City: <input type = 'text'/></span>
                <span>DOB: <input type = 'number'/></span>
                <span>G.P.A.: <input type = 'number'/></span>
                <button className = 'btn-add-date'>Alert</button>
            </form>
        </div>
    )
}