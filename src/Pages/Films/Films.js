import React from 'react';
import philosofy from "../../Images/Films/208px-Harry_Potter_and_the_Philosopher's_Stone_—_movie.jpg"
import secret from "../../Images/Films/219px-Harry_Potter_and_the_Chamber_of_Secrets_—_movie.jpg"
import azkaban from "../../Images/Films/227px-Harry_Potter_and_the_Prisoner_of_Azkaban_—_movie.jpg"
import kubok from "../../Images/Films/212px-Harry_Potter_and_the_Goblet_of_Fire_—_movie.jpg"
import orden from "../../Images/Films/216px-Harry_Potter_and_the_Order_of_the_Phoenix_—_movie.jpg"
import prince from "../../Images/Films/215px-Harry_Potter_and_the_Half-Blood_Prince_—_movie.jpg"
import dary from "../../Images/Films/232px-Harry_Potter_and_the_Deathly_Hallows._Part_1_—_movie.jpg"
import dary2 from "../../Images/Films/203px-Harry_Potter_and_the_Deathly_Hallows._Part_2_—_movie.jpg"

const Films = () => {
    return (
        <section className="section">
            <h2 className="projectTitles">Фильмы</h2>
            <div className="projectItems">
                <img src={philosofy} alt="" className="itemsImg"/>
                <div className="">
                    <h2 className="projectDesc">Гарри Поттер и философский камень - 1 часть</h2>
                    <p className="projectDesc">
                        британско-американский фэнтезийный фильм 2001 года режиссёра Криса Коламбуса по сценарию Стива Кловиса. Первый фильм франшизы о мальчике-волшебнике Гарри Поттере, экранизация одноимённого романа Джоан Роулинг (1997). Главные роли исполнили Дэниел Рэдклифф, Руперт Гринт и Эмма Уотсон. Во многих взрослых ролях заняты ведущие британские актёры, такие как Мэгги Смит, Алан Рикман, Джон Клиз и другие
                    </p>
                </div>
                <button className="filmsBtn"><a href="https://oc.kg/#/movie/id/107" className="filmsLink">Смотреть</a> </button>
            </div>
            <div className="projectItems">
                <img src={secret} alt="" className="itemsImg"/>
                <div className="">
                    <h2 className="projectDesc">Гарри Поттер и философский камень - 2 часть</h2>
                    <p className="projectDesc">
                        британско-американский фэнтезийный фильм 2002 года режиссёра Криса Коламбуса от студии Warner Bros. Pictures, основанный на одноимённом романе Дж. К. Роулинг 1998 года.
                    </p>
                </div>
                <button className="filmsBtn"><a href="https://oc.kg/#/movie/id/108" className="filmsLink">Смотреть</a> </button>
            </div>
            <div className="projectItems">
                <img src={azkaban} alt="" className="itemsImg"/>
                <div className="">
                    <h2 className="projectDesc">Гарри Поттер и узник Азкабана - 3 часть</h2>
                    <p className="projectDesc">
                        приключенческий фэнтезийный фильм 2004 года, третий из серии фильмов о Гарри Поттере[2]. Экранизация одноимённого романа (1999) Джоан Роулинг.
                    </p>
                </div>
                <button className="filmsBtn"><a href="https://oc.kg/#/movie/id/109" className="filmsLink">Смотреть</a> </button>
            </div>
            <div className="projectItems">
                <img src={kubok} alt="" className="itemsImg"/>
                <div className="">
                    <h2 className="projectDesc">Гарри Поттер и Кубок Огня - 4 часть</h2>
                    <p className="projectDesc">
                        приключенческий фэнтезийный фильм 2005 года режиссёра Майка Ньюэлла, четвёртый из серии фильмов о Гарри Поттере. Экранизация одноимённого романа (2000) Дж. К. Роулинг.
                    </p>
                </div>
                <button className="filmsBtn"><a href="https://oc.kg/#/movie/id/110" className="filmsLink">Смотреть</a> </button>
            </div>
            <div className="projectItems">
                <img src={orden} alt="" className="itemsImg"/>
                <div className="">
                    <h2 className="projectDesc">Гарри Поттер и Орден Феникса - 5 часть</h2>
                    <p className="projectDesc">
                        приключенческий фэнтезийный фильм 2007 года режиссёра Дэвида Йейтса, пятый из серии фильмов о Гарри Поттере. Снят по мотивам одноимённого романа 2003 года Дж. К. Роулинг.
                    </p>
                </div>
                <button className="filmsBtn"><a href="https://oc.kg/#/movie/id/113" className="filmsLink">Смотреть</a> </button>
            </div>
            <div className="projectItems">
                <img src={prince} alt="" className="itemsImg"/>
                <div className="">
                    <h2 className="projectDesc">Гарри Поттер и принц полукровка - 6 часть</h2>
                    <p className="projectDesc">
                        приключенческий фэнтезийный фильм 2009 года режиссёра Дэвида Йейтса, шестой из серии фильмов о Гарри Поттере. Экранизация одноимённого романа (2005) Дж. К. Роулинг.
                    </p>
                </div>
                <button className="filmsBtn"><a href="https://oc.kg/#/movie/id/114" className="filmsLink">Смотреть</a> </button>
            </div>
            <div className="projectItems">
                <img src={dary} alt="" className="itemsImg"/>
                <div className="">
                    <h2 className="projectDesc">Гарри Поттер и Дары Смерти - 7 часть</h2>
                    <p className="projectDesc">
                        седьмой фильм о Гарhи Поттере и первая часть экранизации седьмой книги (2007) Джоан Роулинг об этом персонаже
                    </p>
                </div>
                <button className="filmsBtn"><a href="https://oc.kg/#/movie/id/118" className="filmsLink">Смотреть</a> </button>
            </div>
            <div className="projectItems">
                <img src={dary2} alt="" className="itemsImg"/>
                <div className="">
                    <h2 className="projectDesc">Гарри Поттер и Дары Смерти - 8 часть</h2>
                    <p className="projectDesc">
                        восьмой и заключительный фильм о Гарри Поттере и вторая часть экранизации романа Джоан Роулинг «Гарри Поттер и Дары Смерти» (2007).
                    </p>
                </div>
                <button className="filmsBtn"><a href="https://oc.kg/#/movie/id/119" className="filmsLink">Смотреть</a> </button>
            </div>
        </section>
    );
};

export default Films;