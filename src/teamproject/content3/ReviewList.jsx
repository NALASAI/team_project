import React from "react";
import './ReviewList.css';

function ReviewList(){
    return(
        <div className='review_list'>
            <div className='review_body'>
                <h3>리뷰제목</h3>
                <p>리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란</p>
                <p>리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란</p>
                <p>리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란</p>
                <p>리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란</p>
                <div className='review_submit'>
                    <button type="button">수정하기</button>
                    <button type="button">삭제하기</button>
                </div>
            </div>
            <div className='review_body'>
                <h3>리뷰제목</h3>
                <p>리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란</p>
                <p>리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란</p>
                <p>리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란</p>
                <p>리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란</p>
                <div className='review_submit'>
                    <button type="button">수정하기</button>
                    <button type="button">삭제하기</button>
                </div>
            </div>
            <div className='review_body'>
                <h3>리뷰제목</h3>
                <p>리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란</p>
                <p>리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란</p>
                <p>리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란</p>
                <p>리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란</p>
                <div className='review_submit'>
                    <button type="button">수정하기</button>
                    <button type="button">삭제하기</button>
                </div>
            </div>
            <div className='review_body'>
                <h3>리뷰제목</h3>
                <p>리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란</p>
                <p>리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란</p>
                <p>리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란</p>
                <p>리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란리뷰적는란</p>
                <div className='review_submit'>
                    <button type="button">수정하기</button>
                    <button type="button">삭제하기</button>
                </div>
            </div>
            <div className='review_change'>
                {/* 리뷰 갯수가4개를 넘어가면 버튼이 늘어나며 새롭게 만들어진 리뷰가 생김과 동시에가장 오래된 리뷰가 밀려난다. */}
                <span><a>1</a></span>
            </div>
        </div>
    );
}

export default ReviewList;