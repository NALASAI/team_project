import React, { useRef, useState, useEffect } from "react";
import './detail.css';

function Main(){
    // 클릭시 스크롤 이동
    // const idRef1 = useRef('content1');
    // const idRef2 = useRef('content2');
    // const idRef3 = useRef('content3');
    // const idRef4 = useRef('content4');

    // const onScrollClick = (id = String) => {
    //     if(id === 'content1') idRef1.current?.scrollIntoView({ behavior: 'smooth' });
    //     if(id === 'content2') idRef2.current?.scrollIntoView({ behavior: 'smooth' });
    //     if(id === 'content3') idRef3.current?.scrollIntoView({ behavior: 'smooth' });
    //     if(id === 'content4') idRef4.current?.scrollIntoView({ behavior: 'smooth' });
    // };
    // 스크롤시 상단 고정
    const [ScrollY, setScrollY] = useState(0);
    const [ScrollActive, setScrollActive] = useState(false);
    function handleScroll() {
        if (ScrollY > 630) {
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
                    <div className='menu'><a href="#content1">강의소개</a></div>
                    <div className='menu'><a href="#content2">강사소개</a></div>
                    <div className='menu'><a href="#content3">커리큘럼</a></div>
                    <div className='menu'><a href="#content4">수강평</a></div>
                </div>
            </div> 
            <div className='detail_content'>
                <div className='detail_content_main'>
                    <div id='content1' className='con'>
                        <h1>강의소개</h1>
                    </div>
                    <div id='content2' className='con'>
                        <h1>강사소개</h1>
                    </div>
                    <div id='content3' className='con'>
                        <h1>커리큘럼</h1>
                    </div>
                    <div id='content4' className='con'>
                        <h1>수강평</h1>
                        <div className='review_list'>
                            <div className='review_body'>
                                <h3>리뷰제목</h3>
                                <p>리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란</p>
                                <p>리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란</p>
                                <p>리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란</p>
                            </div>
                        </div>
                        <div className='review_change'>
                            <span><a>1</a></span>
                            <span><a>2</a></span>
                            <span><a>3</a></span>
                            <span><a>4</a></span>
                            <span><a>5</a></span>
                            <span><a>6</a></span>
                            <span><a>7</a></span>
                            <span><a>8</a></span>
                            <span><a>9</a></span>
                            <span><a>10</a></span>
                        </div>
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