import Button from "./Button";
import styles from "./App.module.css";


// App.module.css에 .btn이라는 동일한 클래스를 h1태그에 줬지만, App.js에서는 App.module.css만 임포트하고있기 때문에, Button.module.css에 있는 .btn속성을 알 수 없음.
// 동일하게 .btn클래스를 사용해도 Button과는 별개의 css를 적용할 수 있음.
// <h1 class="App_btn__0TPxd"> 과 같이 임의의 클래스명이 붙여짐.
function App() {
  return (
    <div>
      <h1 className={styles.btn}>Name.module.css 를 사용해서 css를 모듈로 적용시키자</h1>
      <Button text={"hi"}/>
    </div>
  );
}

export default App;
