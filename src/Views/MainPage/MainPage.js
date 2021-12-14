import React, {useState, useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import "./styles2.css"


import Pokemon from '../../Components/Pokemon/Pokemon';
import useStyles from './styles';
import {Context} from "../../api/Context";
import {CircularProgress} from "@material-ui/core";
import {Pagination} from "@mui/material";

const AllPokemons = () => {

    const classes = useStyles();
    const [data] = useContext(Context)


    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(12)

    const [catchPokemon, setCatchPokemon] = useState([])



    const pages = []
    for (let i = 1; i < Math.ceil(data.length / itemsPerPage); i++) {
        pages.push(i)
    }


    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

    const handleChange = (event, value) => {
        setCurrentPage(value)
    };


    if (data.length === 0) return <CircularProgress/>
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container spacing={4}>
                {currentItems.map((pokemon, i) => (
                    <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
                        <Pokemon pokemon={pokemon} id={i + 1} catchePokemon={catchPokemon}
                                 setCatchePokemon={setCatchPokemon}/>
                    </Grid>
                ))}
            </Grid>
            <Pagination style={{
                justifyContent: "center",
                display: 'flex'
            }} count={pages.length} variant="outlined" onChange={handleChange}/>
        </main>
    );
};

export default AllPokemons;
