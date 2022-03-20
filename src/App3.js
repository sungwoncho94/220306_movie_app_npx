import { func } from "prop-types";
import { useState, useEffect } from "react";

function App3(){
    const [showing, setShowing] = useState(false);
    function onClick(){
        setShowing((prev) => !prev);
    }
    
    // component(<Hello />는 단지 jsx(<h3></h3>)를 return 해주는 함수일 뿐임!)
    /* function Hello(){
        useEffect(() => {
            console.log("I'm came :)");
            /* 
            Hello 컴포넌트가 destroy 될 때 console을 찍기 위해서는, function을 return해줘야함.
            이 function은 useEffect에서 온다. 
            === cleanup function
            */
           /*  return () => {console.log("bye... X(")}
        }, []);
        return (<h3>Hello~ :)</h3>);
    }  */

    // 화살표 함수 쓰지 않고 useEffect의 cleanup Func까지 사용해보기
    function Hello() {
        useEffect(function(){
            console.log('hi~ :)');
            return function(){
                console.log("bye... :(");
            };
        }, []);
        return <h2>HELLO</h2>;
    }

    return (
        <div>
            <h2>useEffect - destroy function</h2>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? "hide" : "show"}</button>
        </div>
    );
}

export default App3;
