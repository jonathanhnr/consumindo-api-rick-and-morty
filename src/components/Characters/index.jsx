import CharCard from "../CharCard";

function Index({characterList}) {
    return (
        <div>
            <h1>Meus personagens</h1>
            {characterList.map((character) => <CharCard character={character} key={character.id}/>)}

        </div>
    );
}

export default Index;