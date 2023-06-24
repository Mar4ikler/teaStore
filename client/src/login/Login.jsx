import "./Login.css";
import {useState} from "react";
import {getLogin} from "./loginFunctions";
import {Link} from "react-router-dom";
import {responseHandler} from "../helpers/responseHandler";


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setEmailError("");
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = async () => {
        if (!email || !validateEmail(email)) {
            setEmailError("Некорректный email");
            return;
        }
        const response = await getLogin(email, password);
        const parseRes = await responseHandler(response);
        if(parseRes['token']) {
            window.localStorage.setItem('token', parseRes['token']);
            window.location.assign("http://localhost:3001/");
        } else {
            alert('Данный пользователь не существует');
        }
        setEmail('');
        setPassword('');

    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
                <div className="loginContent">
                    <img src="./lodin.png" className="loginImage" alt="not found"/>
                    <h2 className="loginH">Вход</h2>
                    <div className="emailLogin">
                        <label>Email:</label>
                        <input type="email" value={email} onChange={handleEmailChange} />
                        {emailError && <span className="error-message"> {emailError}</span>}
                    </div>
                    <div className="emailPassword">
                        <label>Пароль:</label>
                        <input type="password" value={password} onChange={handlePasswordChange} />
                    </div>
                    <button onClick={handleLogin} className="buttonStl">Войти</button>
                    <Link to="/registry"><button className="buttonStl">Зарегистрироваться</button></Link>
                </div>
    )
}