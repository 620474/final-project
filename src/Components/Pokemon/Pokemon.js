import React, {useState} from 'react';
import {CardMedia, CardContent, Typography} from '@material-ui/core';
import {useNavigate} from "react-router-dom";
import {firstLetterUpperCase} from "../../api/firstLetterUpperCase";

import useStyles from './styles';
import {Button} from "@mui/material";

const Pokemon = ({pokemon}) => {
    const classes = useStyles();
    const navigate = useNavigate()
    const [catched, setCatched] = useState(pokemon.catched);

    const getDate = () => {
        const dateObj = new Date();
        const month = dateObj.getUTCMonth() + 1; //months from 1-12
        const day = dateObj.getUTCDate();
        const year = dateObj.getUTCFullYear();
        return year + "/" + month + "/" + day;
    }

    const CatchePokemon = () => {
        setCatched(true)
        pokemon.catched = true
        pokemon.catchTime = getDate()
    }

    const DissmissPokemon = (e) => {
        setCatched(false)
        pokemon.catched = false
        pokemon.catchTime = ''
    }

    return (
        <>
            <CardMedia className={classes.media} image={pokemon.img} title={firstLetterUpperCase(pokemon.name)}
                       onClick={() => navigate(`/pokemon/${pokemon.index + 1}`)}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {firstLetterUpperCase(pokemon.name)}
                    </Typography>
                    {(pokemon.catched) ?
                        <Button size={'medium'} variant="contained" color="success"
                                onClick={DissmissPokemon}>Release</Button> :
                        <Button size={'medium'} variant="contained" onClick={CatchePokemon}>Catche</Button>}
                </div>
            </CardContent>
        </>
    );
};

export default Pokemon;
