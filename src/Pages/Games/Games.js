import React from 'react';
import one from "../../Images/Games/image.webp"
import two from "../../Images/Games/image (1).webp"
import three from "../../Images/Games/image (2).webp"
import app from "../../Images/Games/Без названия.svg"
import google from "../../Images/Games/Без названия (1).svg"
const Games = () => {
    return (
        <section className="section">
            <h2 className="projectTitles">Игры</h2>
            <div className="gamesContent">
                <div className="projectItems">
                    <img src={one} alt="" className="gamesImg"/>
                    <ul>
                        <li><h2 className="gamesTitle">Hogwarts Legacy</h2></li>
                        <li><button className="gamesBtn "><a className="filmsLink" href="https://www.hogwartslegacy.com/ru-ru">Играть</a></button></li>
                    </ul>
                </div>
                <div className="projectItems">
                    <img src={two} alt="" className="gamesImg"/>
                    <ul>
                        <li><h2 className="gamesTitle">Harry Potter:
                            Puzzles & Spells</h2></li>
                        <li><button className="gamesBtn "><a className="filmsLink" href="https://www.zynga.com/games/harry-potter-puzzles-and-spells/">Играть</a></button></li>
                    </ul>
                </div>
                <div className="projectItems">
                    <img src={three} alt="" className="gamesImg"/>
                    <ul>
                        <li><h2 className="gamesTitle">Harry Potter:
                            Hogwarts Mystery</h2></li>
                        <li><a href="https://apps.apple.com/nz/app/harry-potter-hogwarts-mystery/id1333256716"><img src={app} alt="" className="gamesImg-1"/></a>
                            <a href="https://play.google.com/store/apps/details?id=com.tinyco.potter&referrer=adjust_reftag%3DcwEe62UpwGb3X%26utm_source%3DWebsite%26utm_campaign%3DJam_City%26utm_content%3Dunknown%26utm_term%3Dandroid_icon"><img src={google} alt="" className="gamesImg-1"/></a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Games;