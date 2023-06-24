import "./Review.css";
import Footer from "../footer/Footer";
import {useEffect, useState} from "react";
import {responseHandler} from "../helpers/responseHandler";
import {getReviews, postReview} from "./reviewFunctions";
import Header from "../header/Header";


export default function Review() {
    const [data, setData] = useState([]);
    const [review, setReview] = useState('');

    useEffect(() => {
        async function fetchData() {
            const response = await getReviews();
            setData(await responseHandler(response));
        }
        fetchData();
    }, [data])

    function handleCommentChange(e) {
        setReview(e.target.value);
    };

    function handleSubmit (e) {
        e.preventDefault();
        const date = new Date();
        const parseDate = `${date.getDay()}-${date.getMonth()}-${date.getFullYear()} в ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        postReview(review, parseDate);
        setReview('');
    };

    return (
        <div className="reviewMain">
            <div>
                <Header/>
            </div>
            <div className="reviewContent">
                <div>Отзывы</div>
                <div className="userInfo">
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <form onSubmit={handleSubmit} className="formReview">
                        <textarea
                            value={review}
                            onChange={handleCommentChange}
                            placeholder="Оставьте отзыв"
                            className="textAr"
                            />
                        <button type="submit" className="buttonStl">Отправить</button>
                    </form>
                </div>
                <div className="allReviews">
                    {
                        data.map((item, index) => (
                            <div className="oneReview" key={index}>
                                <div>{item.review_text}</div>
                                <div>{item.date}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}