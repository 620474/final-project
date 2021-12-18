import React, {useState, useContext, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import "./styles2.css"


import Pokemon from '../../Components/Pokemon/Pokemon';
import useStyles from './styles';
import {Context} from "../../api/Context";
import {CircularProgress} from "@material-ui/core";
import {Pagination} from "@mui/material";

const AllPokemons = ({filter}) => {

    const classes = useStyles();
    const [data] = useContext(Context)


    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(12)
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        const array = []
        data.map(pokemon => pokemon.name.includes(filter) ? array.push(pokemon) : null)
        setFilteredData(array)
    }, [filter])


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


    if (filteredData.length === 0) return <CircularProgress/>
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
            <Pagination style={{
                justifyContent: "center",
                display: 'flex'
            }} count={pages.length} variant="outlined" onChange={handleChange}/>
        </main>
    );
};

export default AllPokemons;
