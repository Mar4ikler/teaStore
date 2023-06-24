import "./Cart.css";
import {useEffect, useState} from "react";
import {responseHandler} from "../helpers/responseHandler";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import {deleteItem, getCart, orderAllItems} from "./cartFunctions";


export default function Cart() {
    const [data, setData] = useState([]);
    const [finalPrice, setFinalPrice] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const response = await getCart();
            setData(await responseHandler(response));
        }

        fetchData();
    }, [data])

    useEffect(() => {
        if(data.length > 0) {
            let temp = 0;
            data.map((item, index) => {
                temp += +item.price;
            })
            setFinalPrice(temp);
        } else {
            setFinalPrice(0);
        }
    }, [data])

    async function deleteItemFromCart(id) {
        await deleteItem(id);
    }

    async function orderCart() {
        const date = new Date();
        const parseDate = `${date.getDay()}-${date.getMonth()}-${date.getFullYear()} в ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        await orderAllItems(parseDate);
    }

    return (
        <div className="cartMain">
            <Header/>
            <div className="cartContent">
                <div>Корзина</div>
                <div className="cartProducts">
                    {
                        data.map((item, index) => (
                            <div className="prCard" key={index}>
                                <img src={'./' + item.products.productImage} alt="not found"/>
                                <div className="prInfo">
                                    <div className="prMainInfo">
                                        <div>{item.products.product_name}</div>
                                        <div>{item.price} BYN</div>
                                        <div>100гр.</div>
                                    </div>
                                    <div>
                                        <button className="buttonStl" onClick={() => deleteItemFromCart(item.order_id)}>Удалить</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div>Итого: {finalPrice} BYN</div>
                <div>
                    <button className="buttonStyle" onClick={orderCart}>Заказать</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}