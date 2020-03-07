import React from 'react';

export const Academy = (props) => (
    <ul>
        <li><h4>{props.title}</h4></li>
        <li className="date">
            <span className="hours"><i className="far fa-clock fa-sm"></i>{props.hours}</span>
            <span>{props.date}</span>
        </li>
    </ul>
);