import React, {useState} from 'react';
import axios from "axios";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Register = () => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    const handleRegister = (e) => {
        e.preventDefault();
        if (password.length > 8) {
            axios.post('http://localhost:3004/users', {
                name,
                surname,
                email,
                password
            });
        } else {
            alert("Пароль быть больше 8 символов")
        }
        setName("")
        setSurname("")
        setEmail("")
        setPassword("")
    }

    return (
        <section className="section">
                <form className="regForm" onSubmit={handleRegister}>
                    <div className="regContent">
                        <ul >
                            <li><h2>Регистрация</h2></li>
                            <li><input type="text" name="name-reg" value={name} onChange={(e) => setName(e.target.value)} placeholder="Имя" id="name-reg" required/></li>
                            <li><input type="text" name="surname-reg" value={surname} onChange={(e) => setSurname(e.target.value)} placeholder="Фамилие" id="surname-reg" required/></li>
                            <li><input type="email" name="email-reg" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Почта" id="email-reg" required/></li>
                            <li><input type="password" name="password-reg" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" id="password-reg" required/></li>
                            <li><button className="filmsBtn filmsLink" onClick={handleClick}>Зарегистрироваться</button></li>
                        </ul>
                    </div>
                </form>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Вы успешно зарегестрировались!
                </Alert>
            </Snackbar>
        </section>
    );
};

export default Register;