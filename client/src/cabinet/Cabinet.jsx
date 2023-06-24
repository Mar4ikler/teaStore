import "./Cabinet.css";
import {useEffect, useState} from "react";
import {responseHandler} from "../helpers/responseHandler";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import {getOrders, getUser} from "./cabinetFunctions";


export default function Cabinet() {
    const [data, setData] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await getOrders();
            setData(await responseHandler(response));
        }

        fetchData();
    }, [])

    useEffect(() => {
        async function fetchData() {
            const response = await getUser();
            setUser(await responseHandler(response));
        }

        fetchData();
    }, [])


    return (
        <div className="cabinetMain">
            <Header/>
            <div className="cabinetContent">
                <div className="userInformation">
                    <img src="./panda1.jpg" alt="not found"/>
                    <div className="userInfoFromServer">
                            <div>Username: {user.username}</div>
                            <div>Email: {user.email}</div>
                    </div>
                </div>
                <div>Заказанные товары:</div>
                <div className="orderCardBuying">
                    {
                        data.map((item, index) => (
                            <div className="prCardBuying" key={index}>
                                <div className="ordIndo">
                                    <img src={'./' + item.products.productImage} alt="not found"/>
                                    <div className="prInfoBuying">
                                        <div className="prMainInfoBuying">
                                            <div>{item.products.product_name}</div>
                                            <div>{item.price} BYN</div>
                                            <div>100гр.</div>
                                        </div>
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