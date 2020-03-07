import React from 'react';

export const SNS = (props) => (
    <li className={props.id}>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <span className="fa-stack fa-2x">
              <i className="fas fa-circle fa-stack-2x"></i>
              <i className={props.icon}></i>
            </span>
        </a>
    </li>
);
