import React from 'react';

export const Work = (props) => (
    <div>
        <ul>
            <li><h4>{props.title}</h4></li>
            <li className="date">{props.date}</li>
            <li className="content kr">{props.content}</li>
        </ul>
        <ul className="links">
            <li className="behance">
                <a href={props.behance} target="_blank" rel="noopener noreferrer">
                    <span className="fa-stack fa-2x">
                      <i className="fas fa-square fa-stack-2x"></i>
                      <i className="fab fa-behance fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
            </li>
            <li className="link">
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                    <span className="fa-stack fa-2x">
                      <i className="fas fa-square fa-stack-2x"></i>
                      <i className="fas fa-external-link-alt fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
            </li>
        </ul>
    </div>
);