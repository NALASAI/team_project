import React, { useRef, useState } from "react";
import './CarList.css';

function CarList(){
    const [isOpen, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정

    const itemRef1 = useRef(null);
    const itemRef2 = useRef(null);
    const itemRef3 = useRef(null);
    
    const toggleMenu = (id = null) => {
        if(id === 'item1') setMenu(isOpen => !isOpen); // on,off 개념 boolean
        if(id === 'item2') setMenu(isOpen => !isOpen); // on,off 개념 boolean
        if(id === 'item3') setMenu(isOpen => !isOpen); // on,off 개념 boolean
    }

    return(
        <div className="car_list">
            <ul id="item1" className="car_title" onClick={() => toggleMenu('item1')}> 강의 1
                <li className={isOpen ? "car_item" : "hide_item"} ref={itemRef1}><a>강의 1-1. AAA</a></li>
                <li className={isOpen ? "car_item" : "hide_item"} ref={itemRef1}><a>강의 1-2. BBB</a></li>    
            </ul>
            <ul id="item2" className="car_title" onClick={() => toggleMenu('item2')}> 강의 2
                <li className={isOpen ? "car_item" : "hide_item"} ref={itemRef2}><a>강의 2-1. AAA</a></li>
                <li className={isOpen ? "car_item" : "hide_item"} ref={itemRef2}><a>강의 2-2. BBB</a></li>    
            </ul>
            <ul id="item3" className="car_title" onClick={() => toggleMenu('item3')}>강의 3
                <li className={isOpen ? "car_item" : "hide_item"} ref={itemRef3}><a>강의 3-1. AAA</a></li>
                <li className={isOpen ? "car_item" : "hide_item"} ref={itemRef3}><a>강의 3-2. BBB</a></li>    
            </ul>
        </div>
    );
}

export default CarList;