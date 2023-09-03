import React, { useState } from "react";
import './history.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

export default function History() {

    const history = useSelector((state) => state.history.history)
    return (
        <div className="history">
            <h1>Searched History</h1>
            <ul>
                {history.map((item, index) => (
                    <li key={index}>
                        < Link to='/'>{item.word}</Link>
                        {/* <a> {item.word} </a> */}
                        {/* < Link to='/'>home</Link>
            < Link to='/footer'>footer</Link> */}
                    </li>
                ))}
            </ul>

        </div>
    );
}
