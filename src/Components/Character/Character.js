import React from 'react';
import harry from "../../Images/Characters/harry.jpg"
import { Link } from "react-router-dom";

const Character = (props) => {
    return (
        <div className="charItems">
            <img className="charImg" src={props.img} alt="img"/>
            <div className="charInfo">
                <h3>Имя: {props.name}</h3>
                <h3>Пол: {props.gender}</h3>
                <h3>Факультет: {props.house}</h3>
                <h3>Дата рождения: {props.dateOfBirth}</h3>
                <h3>Деятельность: {props.wizard}</h3>
                <h3>Родословная: {props.blood}</h3>
                {/*<h3>Глаза: {props.eyes}</h3>*/}
                {/*<h3>Волосы: {props.hair}</h3>*/}
                <h3>В школе: {props.activity}</h3>
                <h3>Актёр: {props.actor}</h3>
                {/*<h3>Состояние: {props.alive}</h3>*/}
            </div>
        </div>
    );
};

export default Character;