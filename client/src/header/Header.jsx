import "./Header.css";
import {Link} from "react-router-dom";



export default function Header() {

    return (
        <div className="headerMain">
            <div>
                <div>+375 (44) 533 05 69 консультация по чаю</div>
                <img src="./1112.png" className="imgLogo" alt="not found"/>
                <div>Минск, пр-кт Независимости 44</div>
            </div>
            <div className="buttons">
                <Link to="/" className="kek">Главная</Link>
                <Link to="/catalog" className="kek">Каталог</Link>
                <Link to="/reviews" className="kek">Отзывы</Link>
                <Link to="/cabinet" className="kek">Личный кабинет</Link>
                <Link to="/cart" className="kek">Корзина</Link>
                <Link to="/login" className="kek" onClick={() => {
                    window.localStorage.removeItem('token');
                    window.localStorage.removeItem('id');
                }}>Выйти</Link>
            </div>
        </div>
    )
}