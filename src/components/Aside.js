import React from 'react';
import {Academy} from "./Academy";
import {Education} from "./Education";
import {SNS} from "./SNS";

export const Aside = (props) => {
    return (
        <aside>
            <section className="title">
                <div className="picture">
                    <img src="./images/sori.jpg" alt="" />
                </div>
                <h1 className="name">김소리</h1>
                <h4 className="role">full-stack designer</h4>
            </section>
            <section className="sns">
                <ul>
                    {props.initialSNS.map(item => <SNS link={item.link} icon={item.icon} key={item.id}/>)}
                </ul>
            </section>
            <section className="information">
                <ul>
                    <li>
                        <i className="fas fa-envelope-open-text fa-sm"></i>
                        <a href="mailto:sori.developer@gmail.com"><span>sori.developer@gmail.com</span></a>
                    </li>
                    <li>
                        <i className="fas fa-phone-alt fa-sm"></i>
                        <span>010 9690 5021</span>
                    </li>
                </ul>
            </section>
            <section className="profile kr">
                브라우저 안의 불필요한 시각공해를 줄이고, 코드 구조를 아름답게 짜는것에 흥미를 느끼며, 최종적으로 UI 개발자가 되는 것이 목표입니다.
            </section>
            <Education/>
            <section className="academy">
                {props.initialAcademies.map(item => <Academy title={item.title} date={item.date} hours={item.hours}
                                                             key={item.id}/>)}
            </section>
        </aside>
    )
};