import React, {useState, useContext, useEffect} from 'react';
import { Context } from "../../Context/Context";
import Book from "../../Components/Book/Book";
import cart from "../../Images/icons8-cart-64.png"
import {Link} from "react-router-dom";
import Cart from "../../Components/Cart/Cart";


const Books = (props) => {
    const {products, onAdd} = props;
    const {user} = useContext(Context)
    const {countCartItems} = props;

    return (
        <section className="section">
            <div className="bookHeader">
                <h2 className="projectTitles">Издательство "Machaon"</h2>
                <div><Link to="/cart"><img className="cartImg" src={cart} alt=""/></Link>
                    { " "}
                    {countCartItems? (
                        <button className="badge">{countCartItems}</button>
                    ) :
                        ('')}
            </div>
            </div>
            <div className="booksContent">
                { products.map((product) => (
                            <Book
                                key={product.id}
                                product={product}
                                onAdd={onAdd}

                            />
                        ))}
            </div>

        </section>
    );
};

export default Books;