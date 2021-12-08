import {useState, useEffect} from 'react'
import axios from 'axios'
import PokemonHomePage from "./Components/PokemonHomePageInfo";


function App() {
    const [data, setData] = useState([])
    const [img, setImg] = useState('')

    useEffect(() => {
        getData();
    }, []);


    function getData() {
        axios.get(`https://pokeapi.co/api/v2/pokemon`)
            .then(response => {
                setData([...response.data.results, ...data]);
            })
            .catch(error => {
                console.log(error);
            })
    }

    function consoleLog() {
        console.log(data)
    }


    function fetchImg(pokemonImgUrl = 'https://pokeapi.co/api/v2/pokemon/1') {
        axios.get(`https://pokeapi.co/api/v2/pokemon/1`).then(resp => setImg(resp?.data?.sprites?.other['official-artwork']?.front_default))
    }

    if (!data) return <>Loading...</>

    return (
        <>
            <button onClick={consoleLog}>Нажми меня</button>
            <div className="ui four column relaxed grid">
                {data.map((pokemon, i) => {
                    return (
                        <PokemonHomePage key={i}
                                         img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i + 1}.png`}
                                         name={pokemon.name}>
                        </PokemonHomePage>
                    )
                })}
            </div>
        </>
    );
}

export default App;
