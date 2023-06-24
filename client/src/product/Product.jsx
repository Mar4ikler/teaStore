import "./Product.css";
import {getProduct} from "./productFunctions";
import Footer from "../footer/Footer";
import {useEffect, useState} from "react";
import {responseHandler} from "../helpers/responseHandler";
import Header from "../header/Header";


export default function Product() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await getProduct(3);
            setData(await responseHandler(response));
        }
        fetchData();
    }, [])

    return (
        <div className="productMain">
            <div>
                <Header/>
            </div>
            <div className="productContent">
                <div>{data.product_name}</div>
                <div className="productMainInfo">
                    <div>
                        <img alt="not found"/>
                    </div>
                    <div className="infoToOrder">
                        <div>{data.price} BYN</div>
                        <div>100 гр.</div>
                        <div>
                            <button>В корзину</button>
                        </div>
                    </div>
                </div>
                <div>{data.description}</div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}