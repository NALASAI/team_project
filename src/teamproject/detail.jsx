import React, { useRef, useState, useEffect } from "react";
import Carlist from './content2/CarList';
import ReviewList from "./content3/ReviewList";
import './detail.css';

function Main(){
    // 클릭시 스크롤 이동[ 작동안됨, 임시로 a태그로 해결]    
    const idRef1 = useRef(null);
    const idRef2 = useRef(null);
    const idRef3 = useRef(null);

    const onScrollClick = (id = null) => {
        if(id === 'content1') idRef1.current?.scrollIntoView({ behavior: 'smooth' });
        if(id === 'content2') idRef2.current?.scrollIntoView({ behavior: 'smooth' });
        if(id === 'content3') idRef3.current?.scrollIntoView({ behavior: 'smooth' });
    };
    // 스크롤시 상단 고정
    const [ScrollY, setScrollY] = useState(0);
    const [ScrollActive, setScrollActive] = useState(false);
    function handleScroll() {
        if (ScrollY > 629) {
          setScrollY(window.pageYOffset);
          setScrollActive(true);
        } else {
          setScrollY(window.pageYOffset);
          setScrollActive(false);
        }
    }
    useEffect(() => {
        function scrollListener() {
            window.addEventListener("scroll", handleScroll);
        }
        scrollListener();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return(
        <div className='detail_main'>
            <div className='detail_topbanner'>
                <div className='detail_top_body'>
                    <div className='detail_img'>
                    </div>
                    <div className='detail_title'>
                        <p>들어온 경로</p>
                        <p id='item_title'>강의명</p>
                        <p id='item_teacher'>강사명</p>
                        <p>강의 간단 설명란</p>
                    </div>
                </div>
            </div> 
            <div className= {ScrollActive ? 'detail_menu fixed' : 'detail_menu'}>
                <div className='menu_list'>
                    <div className='menu'><button type="button" onClick={() => onScrollClick('content1')}>강의소개</button></div>
                    <div className='menu'><button type="button" onClick={() => onScrollClick('content2')}>커리큘럼</button></div>
                    <div className='menu'><button type="button" onClick={() => onScrollClick('content3')}>수강평</button></div>
                </div>
            </div> 
            <div className='detail_content'>
                <div className='detail_content_main'>
                    <div id='content1' className= {ScrollActive ? 'con scroll' : 'con'} ref={idRef1}>
                        <h1>강의소개</h1>
                        <p>강의 설명<br/>
                            - 이강의는 ~~~~~~~~~~~하는 강의입니다.<br/>
                        </p>
                        <p>도움되실 대상(필요없으면 제거)<br/>
                            1. aa<br/>
                            2. bb<br/>
                            3. cc
                        </p>
                        <p style={{fontSize: '32px', fontWeight: 'bold'}}>강의 특징</p>
                        <p style={{lineHeight: '34px'}}>
                            사용언어 : xxx<br/>
                            학습방법<br/>
                            * 1. AAA<br/>
                            * 2. BBB
                        </p>
                        <p>연관강의 링크</p>
                    </div>
                    <div id='content2' className= {ScrollActive ? 'con scroll' : 'con'} ref={idRef2}>
                        <h1>커리큘럼</h1>
                        <Carlist/>
                    </div>
                    <div id='content3' className= {ScrollActive ? 'con scroll' : 'con'}  ref={idRef3}>
                        <h1>수강평</h1>
                        <ReviewList/>
                    </div>
                </div>
                <div className='detail_payment'>
                    <div className='pay_body'>
                        <div className='money'>가격[상품별로 따로표기]</div>
                        <div id='login_backet' className='backet'>
                            <span><a>장바구니</a></span>
                        </div>
                        <div className='sub'>
                            <ul>
                                <li>설명1</li>
                                <li>설명2</li>
                                <li>설명3</li>
                                <li>설명4</li>
                                <li>설명5</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Main;