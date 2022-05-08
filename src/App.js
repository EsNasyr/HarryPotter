import './App.css';
import './Media.css'
import { Routes, Route } from "react-router-dom"
import Nav from "./Components/Nav/Nav";
import Main from "./Pages/Main/Main";
import Characters from "./Pages/Characters/Characters";
import Books from "./Pages/Books/Books";
import Things from "./Pages/Things/Things";
import Films from "./Pages/Films/Films";
import Games from "./Pages/Games/Games";
import Cart from "./Components/Cart/Cart";
import axios from "axios";
import React, {useEffect, useState} from "react";
import Register from "./Pages/Register/Register'";
import Login from "./Pages/Login/Login";
import data from "./Components/Data/Data"
const fetchData = () => {
    return ( axios.get('http://localhost:3004/characters')
        .then(response => response.data))
}

function App() {
    const [characters, setCharacters] = useState([]);
    const {products} = data;
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1} : x
            )
            );
        } else {
            setCartItems([ ...cartItems, { ...product, qty: 1}]);
        }
    };
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id))
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? {...exist, qty: exist.qty - 1} : x
                )
            );
        }
    }

    useEffect(() => {
        fetchData().then(characters => setCharacters(characters))
    }, [])

    // console.log(characters)
    return (
            <div className="App">
                    <Nav/>
                <div className="contentWrapper">
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/characters" element={<Characters characters={characters}/>}/>
                        <Route path="/books" element={<Books onAdd={onAdd} countCartItems={cartItems.length} products={products}/>}/>
                        <Route path="/films" element={<Films/>}/>
                        <Route path="/things" element={<Things/>}/>
                        <Route path="/games" element={<Games/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/cart" element={<Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>}/>
                    </Routes>
                </div>
            </div>
  );
}

// Autocomplete
// checkbox
export default App;
