import React from 'react';
import {Work} from "./Work";
import {Skills} from "./Skills";

export const Main = (props) => {
    return (
        <div className="main">
            <section className="work">
                <h3>work experience</h3>
                {props.initialWorks.map(item => <Work title={item.title} date={item.date} content={item.content}
                                                      behance={item.behance} link={item.link}
                                                      key={item.id}/>)}
            </section>
            <Skills/>
        </div>
    )
};