import React, {useEffect, useState, useContext} from "react";
import {Typography, CircularProgress} from "@material-ui/core";
import axios from "axios";
import {useParams} from "react-router-dom";
import {firstLetterUpperCase} from "../api/firstLetterUpperCase";
import {Context} from "../api/Context";
import Box from "@material-ui/core/Box";

const PokemonPage = () => {
    const [data] = useContext(Context)
    const {id} = useParams();
    const [pokemon, setPokemon] = useState({});
    const [ability, setAbility] = useState([])
    const [types, setTypes] = useState([])
    const [catchedTime, setCatchedTime] = useState('')
    useEffect(() => {
        const catchedPokemon = data[id - 1]
        setCatchedTime(catchedPokemon?.catchTime)

    }, [id,data])

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(function (response) {
                const {data} = response;
                const {types, abilities} = data
                setPokemon(data);
                setTypes(types)
                setAbility(abilities)
            })
            .catch(function (error) {
                setPokemon(false);
            });
    }, [id]);
    const generatePokemonJSX = (pokemon) => {
        let {name, height, weight, sprites} = pokemon;
        if (name) name = firstLetterUpperCase(name)
        const fullImageUrl = `${sprites?.other['official-artwork']?.front_default}`;
        return (
            <>
                <Box >
                    <img style={{width: "300px", height: "300px"}} src={fullImageUrl} alt={'hi'}/>
                    <Typography variant="h3">{name}</Typography>
                    <Typography>Height: {height} </Typography>
                    <Typography>Weight: {weight} </Typography>
                    <Typography>Catched: {`${(catchedTime !== '' && catchedTime !== undefined)}`} </Typography>
                    {(catchedTime !== '' && catchedTime !== undefined) ?
                        <Typography>Catched date: {catchedTime} </Typography> : null}
                    <Typography variant="h6"> Types:</Typography>
                    {types.length === 0 ? <CircularProgress/> : types.map((type, i) =>
                        <Typography key={i}>{type?.type?.name}</Typography>)}
                    <Typography variant="h6"> Abilities:</Typography>
                    {ability.length === 0 ? <CircularProgress/> : ability.map((ability, i) =>
                        <Typography key={i}>{ability?.ability?.name}</Typography>)}
                </Box>

            </>
        );
    };

    return (
        <>
            {pokemon === undefined && <CircularProgress/>}
            {pokemon !== undefined && pokemon && generatePokemonJSX(pokemon)}
            {pokemon === false && <Typography> Pokemon not found</Typography>}
        </>
    )
};

export default PokemonPage;
