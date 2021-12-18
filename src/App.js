import {useEffect, useState} from 'react'
import {Route, Routes} from "react-router-dom";
import CatchedPokemonPage from "./Views/CatchedPokemonsPage/CatchedPokemonPage";
import AllPokemons from './Views/MainPage/MainPage'
import ResponsiveAppBar from "./Components/Header";
import PokemonPage from "./Views/PokemonPage";
import {Page404} from "./Views/Page404";
import axios from "axios";
import {Context} from "./api/Context";


function App() {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState([])

    const localStorageCatched = (pokemon) =>{
        return !!localStorage.getItem(pokemon.name);
    }

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon?limit=889`)
            .then((response) => {
                let arr = []
                response.data.results.map((pokemon, i) => {
                    arr.push({
                        index: i,
                        name: pokemon.name,
                        url: pokemon.url,
                        catched: localStorageCatched(pokemon),
                        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i + 1}.png`,
                        catchTime: ''
                    })
                    return null
                })
                setData(arr);
            })
    }, []);


    return (
        <>
            <Context.Provider value={[data, setData]}>
                <ResponsiveAppBar filter={filter} setFilter={setFilter}/>
                <Routes>
                    <Route
                        path="/"
                        element={<AllPokemons filter={filter}/>}
                    />
                    <Route
                        path="/catchedpokemons"
                        element={<CatchedPokemonPage filter={filter}/>}
                    />
                    <Route
                        path='/pokemon/:id' element={<PokemonPage/>}/>
                    <Route
                        path='*' element={<Page404/>}/>
                </Routes>
            </Context.Provider>
        </>
    );
}

export default App;
