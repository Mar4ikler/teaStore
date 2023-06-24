import "./Catalog.css";
import {getProducts, postProductToCart} from "./catalogFunctions";
import {useEffect, useState} from "react";
import {responseHandler} from "../helpers/responseHandler";
import Footer from "../footer/Footer";
import Header from "../header/Header";


export default function Catalog() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await getProducts();
            setData(await responseHandler(response));
        }

        fetchData();
    }, [])

    async function addToCart(item) {
        await postProductToCart(item);
        alert('Товар добавлен в корзину');
    }

    return (
        <div className="catalogMain">
            <Header/>
            <div className="catalogContent">
                <div className="catalogHead">Каталог</div>
                <div className="productsList">
                    {
                        data.map((item, index) => (
                            <div className="productCard" key={index}>
                                <div className="mainCardInfo">
                                    <div>
                                        <img src={'./' + item.productImage} alt="not found"/>
                                    </div>
                                    <div>{item.product_name}</div>
                                    <div>{item.description}</div>
                                    <div>Температура заваривания: {item.brewingTemperature}</div>
                                </div>
                                <div className="lastRow">
                                    <div>{item.price} BYN</div>
                                    <div>
                                        <button className="buttonStl" onClick={() => addToCart(item)}>В корзину</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}