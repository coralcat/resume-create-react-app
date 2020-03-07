import React from 'react';
import './App.css';
import {Aside} from "./components/Aside";
import {Main} from "./components/Main";

const sns = [
  {id: "behance", link: "https://www.behance.net/coralcat", icon: "fab fa-behance fa-stack-1x fa-inverse"},
  {id: "github", link: "https://www.behance.net/coralcat", icon: "fab fa-github-alt fa-stack-1x fa-inverse"},
  {id: "pinterest", link: "https://www.pinterest/soridive", icon: "fab fa-pinterest-p fa-stack-1x fa-inverse"},
  {
    id: "youtube",
    link: "https://www.youtube.com/channel/UC6hdJ39DekitIQ8sIf5RtQg",
    icon: "fab fa-youtube fa-stack-1x fa-inverse"
  },
  {id: "dribbble", link: "https://www.dribbble/coralcat", icon: "fab fa-dribbble fa-stack-1x fa-inverse"},
];

const academies = [
  {
    id: "Reactjs",
    title: "ReactJS Programming",
    date: "2020.02 ~ 2020.03",
    hours: "32시간"
  },
  {
    id: "Illustrator",
    title: "Adobe Illustrator",
    date: "2019.10 ~ 2019.12",
    hours: "30시간"
  },
  {
    id: "Nodejs",
    title: "NodeJS Programming",
    date: "2019.06 ~ 2019.07",
    hours: "32시간"
  },
  {
    id: "HTML",
    title: "HTML5 & CSS3",
    date: "2019.03 ~ 2019.04",
    hours: "30시간"
  },
  {
    id: "JAVA",
    title: "JAVA Software Engineering",
    date: "2017.03 ~ 2017.10",
    hours: "1016시간"
  },
  {
    id: "javascript",
    title: "Javascript & jQuery",
    date: "2016.03 ~ 2016.04",
    hours: "30시간"
  },
  {
    id: "actionscript",
    title: "Adobe Flash Actionscript",
    date: "2010.12 ~ 2011.01",
    hours: "60시간"
  },
  {
    id: "flash",
    title: "Adobe Flash",
    date: "2010.04 ~ 2010.05",
    hours: "30시간"
  },
  {
    id: "dreamweaver",
    title: "Adobe Dreamweaver",
    date: "2010.12 ~ 2011.01",
    hours: "30시간"
  }
];

const works = [
  {
    id: "welstory",
    title: "UI Design & Mobile Publishing",
    date: "2019.08 ~ 2019.12",
    content: "삼성 웰스토리 모바일 오피스 UI 디자인 및 퍼블리싱",
    behance: "https://www.behance.net/gallery/92129937/SAMSUNG-Welstory",
    link: "https://coralcat.github.io/welstory/"
  },
  {
    id: "rsm-chatbot",
    title: "UI Design, Web & Mobile Publishing",
    date: "2019.02 ~ 2019.07",
    content: "르노삼성 자동차 고객센터 챗봇 UI 디자인 및 퍼블리싱",
    behance: "https://www.behance.net/gallery/92085323/Renault-Samsung",
    link: "https://coralcat.github.io/rsm_chatbot/"
  },
  {
    id: "skhynix",
    title: "UI Design & Mobile Publishing",
    date: "2018.12 ~ 2019.01",
    content: "SK 하이닉스 사내 시스템 GDPR UI 디자인 및 퍼블리싱",
    behance: "https://www.behance.net/gallery/92070663/SK-Hynix",
    link: "https://coralcat.github.io/sk_gdpr/"
  },
  {
    id: "skcnc",
    title: "UI Design",
    date: "2018.08 ~ 2018.12",
    content: "SK C&C 사내 시스템 TAMS UI 디자인",
    behance: "https://www.behance.net/gallery/91699661/SK-C-C",
    link: ""
  },
  {
    id: "samsung-sds",
    title: "UI Design",
    date: "2018.05 ~ 2018.07",
    content: "삼성 소프트웨어 라이센스 B2B 사이트 UI 디자인",
    behance: "https://www.behance.net/gallery/91699461/Samsung-License-Management",
    link: ""
  },
  {
    id: "ghsoft",
    title: "UI Design & Web Publishing",
    date: "2017.12 ~ 2018.03",
    content: "GHSoft ISO 인증관리 솔루션 퍼블리싱, 제품 프로모션 사이트 제작",
    behance: "https://www.behance.net/gallery/91578205/GHSoft",
    link: "https://coralcat.github.io/imez/"
  },
  {
    id: "tovsoft",
    title: "Web Publishing",
    date: "2017.11 ~ 2017.12",
    content: "디지털 교과서 퍼블리싱 및 웹표준화 작업",
    behance: "",
    link: ""
  },
  {
    id: "top-intercube",
    title: "Web Design & Publishing",
    date: "2016.01 ~ 2017.01",
    content: "- 탑인터큐브 온라인몰 리뉴얼\n" +
        "- 사이트 내 모든 배너, 이벤트페이지, 메일링 이미지 제작 및 업로드\n" +
        "- 썸내일, 상세페이지 이미지 제작 및 업로드",
    behance: "https://www.behance.net/gallery/91577293/TNP-Mall",
    link: ""
  },
  {
    id: "chungsa",
    title: "UI Design & Web Publishing",
    date: "2015.01 ~ 2015.12",
    content: "- 정부청사관리소 공식사이트 관리, 메인페이지 디자인 및 퍼블리싱\n" +
        "- 사내 업무 시스템 메인페이지 디자인 및 퍼블리싱",
    behance: "https://www.behance.net/gallery/91576791/_",
    link: "http://chungsa.go.kr"
  },
  {
    id: "onestop",
    title: "Web Design & Publishing",
    date: "2014.08 ~ 2014.12",
    content: "원스톱웨딩 웨딩&여행사 관련 배너/상세 이미지 제작, 사이트 부분 리뉴얼",
    behance: "https://www.behance.net/gallery/91576525/Onestop-Wedding   ",
    link: ""
  },
  {
    id: "akmall",
    title: "Web Design",
    date: "2013.07 ~ 2014.07",
    content: "AKMALL 백화점몰 기획전/이벤트/메일링 이미지 제작",
    behance: "https://www.behance.net/gallery/91575811/AK-Mall",
    link: ""
  },
  {
    id: "gib",
    title: "Web Design & Publishing",
    date: "2012.07 ~ 2013.06",
    content: "제너럴아이디어 상품상세/이벤트/메일링 이미지 제작, 사이트 리뉴얼",
    behance: "https://www.behance.net/gallery/91575263/general-idea",
    link: "http://generalidea.co.kr/index.html"
  },
  {
    id: "sbr",
    title: "UI Design & Web Publishing",
    date: "2011.11 ~ 2012.06",
    content: "- 넥스컨트럴사 온도제어시스템 UI 디자인\n" +
        "- 한국전력공사 KDN 전력제어시스템 UI 디자인",
    behance: "",
    link: ""
  },
  {
    id: "parttime",
    title: "Web Design Part time Job",
    date: "2011.02 ~ 2011.10",
    content: "- 서울문화사 뉴스레터 및 상품 상세 이미지 보조 제작\n" +
        "- 정상JLS어학원 교육 컨텐츠 관리",
    behance: "",
    link: ""
  },
  {
    id: "nhn",
    title: "Content Management",
    date: "2009.11 ~ 2010.11",
    content: "- 네이버 백신 업데이트, 테스트 및 CS관리\n" +
        "- 네이버 책 검수, 네이버 키친,웹툰, 영화, 등의 포토샵작업\n" +
        "- 네이버 모바일 과련 배너제작 등등",
    behance: "",
    link: ""
  },
];

function App() {
  return (
      <div className="wrapper">
        <div className="resume">
          <ul className="icon">
            <li><ion-icon className="ico-print" name="print-outline" size="large" onClick={() => window.print()}></ion-icon></li>
          </ul>
          <Aside initialSNS={sns} initialAcademies={academies}/>
          <Main initialWorks={works}/>
        </div>
      </div>
  );
}

export default App;
