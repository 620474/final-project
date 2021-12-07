import {useState, useEffect} from 'react'
import axios from 'axios'


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
                console.log(data)
            })
            .catch(error => {
                console.log(error);
            })
    }

    function consoleLog() {

    }


    function fetchImg(pokemonImgUrl) {
        axios.get(`${pokemonImgUrl.url}`).then(resp => setImg(resp?.data?.sprites?.other['official-artwork']?.front_default))
    }

    if (!data) return <>Loading...</>

    return (
        <>
            <button onClick={fetchImg}>Нажми меня</button>
            <div className="ui four column relaxed grid">
                {data.map((pokemon, i) => {
                    const image = fetchImg(pokemon)
                    return (
                        <div key={i} className="column">
                            <img src={img}/>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default App;
