import React from 'react';
import Character from "../../Components/Character/Character";

const Characters = (props) => {
    return (
        <section className="section">
            <h2 className="projectTitles">Персонажи</h2>
            <div className="charactersItem">
                    {props.characters.map(character => {
                        return (
                            <Character
                                key={character.id}
                                img={character.img}
                                name={character.name}
                                gender={character.gender}
                                house={character.house}
                                dateOfBirth={character.dateOfBirth}
                                wizard={character.wizard}
                                blood={character.blood}
                                activity={character.activity}
                                actor={character.actor}
                            />
                        )
                    })}
                </div>
        </section>
    );
};

export default Characters;