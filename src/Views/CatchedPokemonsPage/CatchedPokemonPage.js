import React, {useState, useContext, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import "../MainPage/styles2.css"
import Alert from '@mui/material/Alert';

import Pokemon from '../../Components/Pokemon/Pokemon';
import useStyles from '../MainPage/styles';
import {Context} from "../../api/Context";
import {Pagination} from "@mui/material";


const AllPokemons = ({filter}) => {
    const classes = useStyles();
    const [data] = useContext(Context)
    const [filteredData, setFilteredData] = useState([])


    useEffect(() => {
        const array = []
        const filteredArray = []
        data.map(pokemon => pokemon.catched ? array.push(pokemon) : null)
        array.map(pokemon => pokemon.name.includes(filter) ? filteredArray.push(pokemon) : null)
        setFilteredData(filteredArray)
    }, [filter,data])


    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(12)

    const pages = []
    for (let i = 1; i < Math.ceil(filteredData.length / itemsPerPage); i++) {
        pages.push(i)
    }


    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem)

    const handleChange = (event, value) => {
        setCurrentPage(value)
    };

    if (filteredData.length === 0) return (
        <Alert variant="outlined" severity="info">
            There is no catched pokemons!
        </Alert>
    )

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container spacing={4}>
                {currentItems.map((pokemon) => (
                    <Grid key={pokemon.index} item xs={12} sm={6} md={4} lg={3}>
                        <Pokemon pokemon={pokemon}/>
                    </Grid>
                ))}
            </Grid>
            <Pagination count={pages.length} variant="outlined" onChange={handleChange}/>
        </main>
    );
};

export default AllPokemons;
