import "./Registration.css";
import {useState} from "react";

import {Link} from "react-router-dom";
import {registration} from "./registrationFunctions";


export default function Registration() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [emailError, setEmailError] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setEmailError("");
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleRegistration = async () => {
        if (!email || !validateEmail(email)) {
            setEmailError("Некорректный email");
            return;
        }
        if(email && password && username) {
            await registration(username, email, password);
            window.location.assign("http://localhost:3001/login");
        } else {
            alert('Данные введены некорректно');
        }
        setEmail('');
        setPassword('');
        setUsername('');

    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
            <div className="registrationContent">
                <img src="./reg.png" className="registryImage" alt="not found"/>
                <h2>Регистрация</h2>
                <div>
                    <label>Никнейм:</label>
                    <input type="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange} />
                    {emailError && <span className="error-message"> {emailError}</span>}
                </div>
                <div>
                    <label>Пароль:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button onClick={handleRegistration} className="buttonStlR">Зарегистрироваться</button>
                <Link to="/login"><button className="buttonStlR">Назад</button></Link>
            </div>
    )
}