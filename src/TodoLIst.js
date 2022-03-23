import { useState } from "react";

function TodoList(){
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  function onChange(e){
    const txt = e.target.value;
    setTodo(txt);
  }
  
  // 입력 버튼을 누르면 todoList arr에 input값이 차례대로 들어가도록
  function onSubmit(e){
    e.preventDefault();
    /* setTodoList의 ()안쪽 = 함수
    첫 번째 argument = 현재의 state 
    ...arr -> arr 안의 내용을 복사해올 수 있음 (그냥 arr로 쓰면 [arr]자체가 들어옴) */
    setTodoList((cur) => [todo, ...todoList]);
    setTodo('');
    console.log("todoList = ", todoList);
  }

  /* form 태그 안의 버튼 클릭 시, 자동으로 submit 된다. (유일한 버튼인 경우)
  js를 쓸 경우에는 { } 중괄호 안에 스크립트를 써줘야 한다. */
  return(
    <div>
      <h1>My Todo List ({todoList.length})</h1>
      <form onSubmit={onSubmit}>
        <input value={todo} placeholder="할 일을 입력해주세요." onChange={onChange} />
        <button>입력</button>
      </form>
    </div>
  );
}

export default TodoList;
