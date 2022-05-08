import React, {useContext, useState} from 'react';
import  { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Context} from "../../Context/Context";




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Cart = (props) => {

    const {cartItems, onAdd, onRemove} = props;

    const itemsPrice = cartItems.reduce((a, c) => a + c.prise * c.qty, 0);
    const taxPrice = itemsPrice * 0.030;
    const totalPrice = itemsPrice + taxPrice

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { user} = useContext(Context)

    return (
            <div className="cart">
                <h2>Корзина </h2>
                <div className="">
                    <div className="">
                        {cartItems.length === 0 && <h3>Корзина пуста</h3>}
                    </div>
                    <div className="">
                        {cartItems.map((item) => (
                            <div key={item.id}>
                                <div  className="cartItem">
                                    <div className="col-2">{item.title}</div>
                                    <div className="col-2">
                                        <button onClick={() => onAdd(item)} className="add">+</button>
                                        <button onClick={() => onRemove(item)} className="remove">-</button>
                                    </div>
                                </div>
                                <div className="col-2">{item.qty} x {item.prise.toFixed(2)} сом</div>
                                <hr/>
                            </div>

                        ))}
                    </div>
                        {cartItems.length !== 0 &&(
                            <>
                                <div className="cartPrice">
                                    <h3 className="col-2" >Цена книг:</h3>
                                    <h3 className="col-2">{itemsPrice.toFixed(2)} сом</h3>
                                </div>
                                <div className="cartPrice">
                                    <h3 className="col-2">Доставка:</h3>
                                    <h3 className="col-2">{taxPrice.toFixed(2)} сом</h3>
                                </div>
                                <div className="cartPrice">
                                    <h3 className="col-2"><strong>В общем:</strong></h3>
                                    <h3 className="col-2"><strong>{totalPrice.toFixed(2)} сом</strong></h3>
                                </div>
                            </>
                        )}
                    <button className="filmsBtn"><Link className="filmsLink" to="/books">Назад</Link></button>
                    {cartItems.length > 0 ? <button className="getBtn" onClick={handleOpen}>Заказать</button> : null}

                </div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            <p className="cartFormTitle">Доставка</p>
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <form action="https://formsubmit.co/nasa20070307@gmail.com" className="cartForm" method="POST">
                                <ul>
                                    <li><input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"/></li>
                                    <li><input type="text" name="name" placeholder={user.name} required/></li>
                                    <li><input type="email" name="email" placeholder={user.email} required/></li>
                                    <li><input type="tel" name="tel" placeholder="Телефон*" required/></li>
                                    <li><input type="text" name="home" placeholder="Улица, дом, подъезд, кв. "/></li>
                                    <li><button className="getBtn">Заказать</button></li>
                                </ul>
                            </form>
                        </Typography>
                    </Box>
                </Modal>
            </div>
    );
};

export default Cart;