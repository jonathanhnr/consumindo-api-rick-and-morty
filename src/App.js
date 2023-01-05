import {useEffect, useState} from "react";
import './App.css';
import Characters from "./components/Characters";

function App() {
    const [currentPage, setCurrentPage] = useState("https://rickandmortyapi.com/api/character/?page=1")
    const [characterList, setCharacterList] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [pageInfo, setPageInfo] = useState(null)


    useEffect(()=>{
        fetch(currentPage)
            .then(response => response.json())
            .then(response => {
                setCharacterList((character) => character.concat(response.results));
                setPageInfo(response.info)
            })
    },[currentPage])

    return (
        <div className="App">
            <header className="App-header">
                <Characters characterList={characterList}/>
                <button className={"button"} onClick={() => {
                    setCurrentPage(pageInfo.next);
                }}>Carregar mais personagens</button>
            </header>

        </div>
    );
}

export default App;
