import React, {useContext, useState} from 'react';
import { Context } from "../../Context/Context";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from "react-router-dom";

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

const Book = (props) => {
    const {product, onAdd} = props;
    const { user } = useContext(Context)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="projectItems">
            <img src={product.image} className="bookImg" alt={product.title}/>
            <ul className="booksText">
                <li><h3 className="projectDesc">Название: {product.title}</h3></li>
                <li><h3 className="projectDesc">Автор: {product.author}</h3></li>
                <li><h3 className="projectDesc">Цена: {product.prise}</h3></li>
                <li><h3 className="projectDesc">Год издания: {product.year}</h3></li>
                <li><h3 className="projectDesc">Перевод: {product.translate}</h3></li>
                <li><h3 className="projectDesc">Формат: {product.size}</h3></li>
                <li><h3 className="projectDesc">Тип обложки: {product.type}</h3></li>
                <li><h3 className="projectDesc">Вес: {product.ves}</h3></li>
                <li><h3 className="projectDesc">Для читателей: {product.plus}</h3></li>
                { !user ? (<button onClick={handleOpen} className="bookBtn filmsLink">Корзина</button>) : <button className="bookBtn filmsLink" onClick={() => onAdd(product)}>В корзину</button> }
            </ul>
            <div className="">
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Уппс! Для того чтобы оформлять покупки нужно зарегистрироваться или войти в аккаунт...
                            <div className="">
                                <button className="bookBtnOops"><Link className="bookReg" to="/register">Регистрация</Link></button>
                                <button className="bookBtnOops"><Link className="bookReg" to="/login">Войти</Link></button>
                            </div>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </div>
    );
};

export default Book;