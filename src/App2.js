import { useState, useEffect } from "react";

function App2() {
    const [count, setCount] = useState(0);
    const [keyword, setKeyword] = useState('');
 
    function countUp(){
        setCount(prev => prev+1);
    }

    function searchKeyword(e){
        setKeyword(keyword => e.target.value);
    }

    // 항상 호출
    console.log('render every time;');

    // 최초 한번만 호출
    useEffect(() => {
        console.log("API 호출");
    }, []);

    // count가 변할때만 호출
    useEffect(()=> {
        console.log('Count is changed');
    }, [count]);
    

    // keyword가 변할때만 호출
    useEffect(()=> {
        // keyword에 2글자 이상이 입력됐을 때만 영화 검색 시작
        if (keyword.length > 1) {
            console.log('search keyword = ', keyword);
        }
    }, [keyword]);

    return (
        <div>
            <h1>useEffect 활용</h1>
            <input value={keyword} placeholder="2글자 이상 입력하세요" onChange={searchKeyword}/>
            <h3>{count}</h3>
            <button onClick={countUp}>count up</button>
        </div>
    );
}

/* 
state가 변하면 모든 컴포넌드가 다시 실행되고, 모든 코드가 재실행됨 = count 숫자가 바뀔때마다 앱2 컴포넌트 전체가 리랜더됨. 
but, 첫 번째 render시에만 실행되고, state가 변할때에는 실행되지 않았으면 하는 함수가 있음 (ex. api호출)
==> useEffect 사용해서 해결
useEffect(조건state가 변할때만 실행할 함수, [조건 state]);
*/

export default App2;