import React from 'react';
import "./style.css"

function Index({character}) {

    return (
        <div className={`card ${character.status === "Alive" ? "card-alive" : "card-dead"}`}>
            <p className={"name"}>
                {character.name}
            </p>
            <img className={"img"}
                 src={character.image} alt=""/>
        </div>);
}

export default Index;