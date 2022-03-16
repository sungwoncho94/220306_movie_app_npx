import PropTypes from "prop-types";
// create-react-app은 css 코드를 js오브젝트로 변환시킴
import styles from "./Button.module.css";

function Button({text}){
    // js오브젝트는 btn을 가지고 있음
    // 브라우저에서 보면 <button class="Button_btn__SYa8K"> 과 같은 형식으로 클래스가 임의로 변함.
    // 그렇기 때문에, 우리는 같은 클래스네임을 여러 파일에서 쓸 수 있음 (각기 다른 css파일이 모듈로 존재하기 때문.)
    return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Button;