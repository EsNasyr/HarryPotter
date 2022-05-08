import React from 'react';
import mainImg from "../../Images/Main/1267875.jpg"
import mainContentLogo from "../../Images/Main/image.webp"
import mainContentLogo2 from "../../Images/Main/Wand_experience_Ollivanders_exterior__Normal_width.webp"
import harryPotter from "../../Images/Main/PromoHP7_Harry.jpg"
import djoanRouling from "../../Images/Main/Joanne_Rowling_2018.jpg"

const Main = () => {
    return (
        <section className="section">
            <div className="mainImgItem">
                <img src={mainImg} className="mainImg" alt="mainImg"/>
            </div>
            <div className="mainImgContent">
                <div className="mainImgContentItem">
                    <img src={mainContentLogo} alt="" className="mainImgContentLogo"/>
                    <h1 className="mainImgContentTitle">Некоторые основные <br/> моменты, которых стоит <br/> ожидать от Волшебного <br/> мира в 2022 году</h1>
                    <p className="mainImgContentDesc">Новый фильм «Фантастические твари», документальный <br/> фильм о волшебных существах, новая игра, премьера <br/> «Проклятого ребенка», особая годовщина книги, <br/> совершенно новая гастрольная выставка, новые функции <br/> студии Warner Bros. Studio Tour в Лондоне... 2022 год <br/> обещает стать еще одним волшебный год.</p>
                </div>
            </div>
            <div className="mainContent">
                <h2 className="projectTitles">Гарри Поттер</h2>
                <div className="projectItems">
                    <p className="projectDesc">
                        Серия романов, написанная британской писательницей Дж. К. Роулинг. Книги представляют собой хронику приключений юного волшебника Гарри Поттера, а также его друзей Рона Уизли и Гермионы Грейнджер, обучающихся в школе чародейства и волшебства Хогвартс. Основной сюжет посвящён противостоянию Гарри и тёмного волшебника по имени лорд Волан-де-Морт, в чьи цели входит обретение бессмертия и порабощение магического мира.
                    </p>
                </div>
                <h2 className="projectTitles">О Гарри Поттере</h2>
                <div className="projectItems">
                    <img src={harryPotter} alt="" className="itemsImg"/>
                    <p className="projectDesc">
                        Главный герой Поттерианы, одноклассник и лучший друг Рона Уизли и Гермионы Грейнджер, член Золотого Трио. Самый знаменитый студент Хогвартса за последние сто лет. Первый волшебник, которому удалось противостоять смертельному проклятью «Авада Кедавра», благодаря чему он стал знаменитым и получил прозвище «Мальчик, Который Выжил». Героически сражался с лордом Волан-де-Мортом и его последователями Пожирателями смерти. Единственный, кому удалось остаться живым после шести поединков с Тёмным Лордом и кто, в конце концов, победил его. Обладатель специальной награды Хогвартса «За заслуги перед школой», полученной в 1993 году за спасение школы от чудовища Тайной комнаты — василиска.
                    </p>
                </div>
                <h2 className="projectTitles">Джоан Роулиг</h2>
                <div className="projectItems">
                    <img src={djoanRouling} alt="" className="itemsImg"/>
                    <p className="projectDesc">
                        Невероятно популярная английская писательница, автор серии романов о Гарри Поттере (1997—2008), переведённых на десятки языков, в том числе и на русский. Офицер ордена Британской империи, Кавалер ордена Почётного легиона, Кавалер ордена Улыбки, лауреат премии Хьюго.
                    </p>
                </div>
                    <img src={mainContentLogo2} className="mainImg-2" alt="mainImg-2"/>
                    <div className="mainImgContent-2">
                        <div className="mainImgContentItem-2">
                            <h1 className="mainImgContentTitle-2">Примите участие <br/> в нашей официальной <br/> церемонии жезлов</h1>
                            <p className="mainImgContentDesc-2">Найти свою палочку — это обряд посвящения <br/> всех юных волшебников и ведьм. Так <br/> чего же вы ждете, откройте для <br/> себя свою сейчас в онлайн-опыте фан-клуба <br/> Гарри Поттера.</p>
                            <button className="mainImgContentBtn"><a href="https://my.wizardingworld.com/login">Найди свою палочку</a></button>
                        </div>
                    </div>
            </div>
        </section>
    );
};

export default Main;