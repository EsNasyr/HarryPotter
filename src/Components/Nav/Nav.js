import React, {useContext, useState} from 'react';
import { Context } from "../../Context/Context";
import { Link } from "react-router-dom";
import logoNav from "../../Images/icons8-harry-potter.svg"
import homeIcon from "../../Images/icons8-home.svg"
import characterIcon from "../../Images/icons8-manager-30.png"
import bookIcon from "../../Images/icons8-book-150.png"
import filmIcon from "../../Images/icons8-film-reel-24.png"
import storyIcon from "../../Images/icons8-star-30.png"
import gameIcon from "../../Images/icons8-game-controller-24.png"
import regIcon from "../../Images/icons8-sign-up-64.png"
import loginIcon from "../../Images/Reg/icons8-sign-in-64.png"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

const Nav = () => {
    const {user} = useContext(Context)
    const {dispatch} = useContext(Context)
    const handleLogout = () => {
        dispatch({type: "LOGOUT"})
    }


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
            <aside className="aside">
                <div className="asideWrapper">
                    <Link to="/"><img src={logoNav} alt="" className="asideImg"/></Link>
                    <ul>
                        <li><img src={homeIcon} className="navIcon" /><Link to="/" className="asideLink">Главная</Link></li>
                        <li><img src={characterIcon} className="navIcon" /><Link to="/characters" className="asideLink">Персонажи</Link></li>
                        <li><img src={bookIcon} className="navIcon" /><Link to="/books" className="asideLink">Книги</Link></li>
                        <li><img src={filmIcon} className="navIcon" /><Link to="/films" className="asideLink">Фильмы</Link></li>
                        <li><img src={storyIcon} className="navIcon" /><Link to="/things" className="asideLink">Теории</Link></li>
                        <li><img src={gameIcon} className="navIcon" /><Link to="/games" className="asideLink">Игры</Link></li>
                        { user ? "" : (<li><img src={regIcon} className="navIcon" /><Link to="/register" className="asideLink">Зарегистрироваться</Link></li>)  }
                        { user ? <Link className="asideLink asideUser" onClick={handleOpen}  to="#">{user.name}</Link> : (<li><img src={loginIcon} className="navIcon" /><Link to="/login" className="asideLink">Войти</Link></li>)}
                        { user ? <button onClick={handleLogout} className="exitBtn">Выйти</button> : null }
                        { user ?
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">

                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        <p><strong>Имя:</strong> {user.name}</p>
                                        <p><strong>Фамилие:</strong> {user.surname}</p>
                                        <p><strong>Почта:</strong> {user.email}</p>
                                    </Typography>
                                </Box>
                            </Modal>
                            :
                            null
                        }
                    </ul>
                </div>
            </aside>
    );
};

export default Nav;