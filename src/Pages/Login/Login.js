import React, {useState, useContext} from 'react';
import { Context } from "../../Context/Context";
import axios from "axios";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {dispatch, user} = useContext(Context)
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    const handleLogin = async (e) => {
        e.preventDefault()
        dispatch({type: "LOGIN_START"})
        try{
            const res = await axios.post('http://localhost:3004/login', {
                email : email,
                password : password,
            })
            dispatch({type: "LOGIN_SUCCESS", payload: res.data.user})
            setEmail("")
            setPassword("")
        }
        catch(err){
            dispatch({type: "LOGIN_FAILURE"})
        }
    }

    return (
        <section className="section">
            <form className="regForm" onSubmit={handleLogin}>
                <div className="regContent">
                    <ul >
                        <li><h2>Авторизация</h2></li>
                        <li><input type="email" name="email-reg" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Почта" id="email-reg" required/></li>
                        <li><input type="password" name="password-reg" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" id="password-reg" required/></li>
                        <li><button className="filmsBtn filmsLink" onClick={handleClick} type="submit">Войти</button></li>
                        {/*{ user ? "" : (<p>{user.name}</p>) }*/}
                    </ul>
                </div>
            </form>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Вы успешно вошли в аккаунт!
                </Alert>
            </Snackbar>
        </section>
    );
};

export default Login;