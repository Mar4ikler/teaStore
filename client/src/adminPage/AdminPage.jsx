import './AdminPage.css';
import React, {useState} from 'react';
import {postProduct} from "./adminPageFunctions";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function AdminPage() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [brewingTemperature, setBrewingTemperature] = useState('');
    const [productImage, setProductImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const productData = {
            name,
            description,
            productImage,
            price,
            brewingTemperature,
        };
        await postProduct(productData);

        setName('');
        setDescription('');
        setPrice('');
        setBrewingTemperature('');
    };

    return (
        <div className="adminPageMain">
            <Header/>
            <div className="adminPageContent">
                <h2>Создание продукта</h2>
                <form onSubmit={handleSubmit} className="formProduct">
                    <div>
                        <label htmlFor="name">Название продукта:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Описание:</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="productImage">Название картинки:</label>
                        <input
                            type="text"
                            id="productImage"
                            value={productImage}
                            onChange={(e) => setProductImage(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="price">Цена:</label>
                        <input
                            type="number"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="brewingTemperature">Температура заваривания:</label>
                        <input
                            type="text"
                            id="brewingTemperature"
                            value={brewingTemperature}
                            onChange={(e) => setBrewingTemperature(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="buttonStl" style={{width: '100%'}}>Добавить</button>
                </form>
            </div>
            <Footer/>
        </div>
    );
};

