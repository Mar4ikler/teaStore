import "./Main.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";


export default function Main() {
    return (
        <div className="mainPage">
            <Header/>
            <div className="mainContent">
                <div className="siteContent">
                    <div>Немного о нас</div>
                    <div className="firstBlock">
                        <div>
                            <img src="./inf1.jpg" alt="not found"/>
                        </div>
                        <div className="firstParagraph">
                            <div>Интернет-магазин Чайная Почта</div>
                            <div>У нас вы сможете полностью укомплектоваться, чтобы дома окунуться в приятную атмосферу
                                и наслаждаться чаепитиями.
                            </div>
                            <div>Проконсультируем и поможем подобрать чай, который действительно вам подходит.
                                Хотите посмотреть чай вживую?
                                Приходите к нам и мы вам все покажем.
                            </div>
                        </div>
                    </div>
                    <div className="secondBlock">
                        <div>Ныряйте в наш онлайн-каталог и выбирайте чай, который вам приглянулся, добавляйте в корзину
                            и оплачивайте на сайте банковской картой.
                        </div>
                        <div>
                            <img src="./inf2.jpg" alt="not found"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}