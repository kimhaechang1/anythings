import { Link } from "react-router-dom";
import "./style.css";
import {useState} from "react";
import RoomResult from "./components/roomResult";
function House() {
    const [input, setInput] = useState("");
    return (
        <div>
            {/* house 상단 검색바  */}
            <div className="house_navbar">
                <div className="inline_block">
                {/* 수정된 부분*/}
                <input type="text" onChange={(e)=>{
                    setInput(e.target.value)
                }}></input>
                {/* 수정된 부분 끝 */}
                </div>
                <p>{input}</p>
                    <button>
                        <Link to="/signup">
                            <p>로그인</p>
                        </Link>
                    </button>
            </div>

            {/* house 중단 필터 검색 */}
            <div className="house_serach">
                
            </div>

            {/* house 하단 집 정보 */}
            <div className="house_warp">
                <RoomResult name={input}/>
            </div>
        </div>
    );
}

function Room(props) {
    return (
        <div className="house_room">
            <p>가격</p>
            <p>원룸이름</p>
        </div>
    );
}

export default House;
