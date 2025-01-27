import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from "@mui/icons-material/Search";
import {useNavigate} from "react-router-dom"
import {Search, SearchIconWrapper, StyledInputBase} from './styles'



const ResponsiveAppBar = ({filter, setFilter}) => {


    const [anchorElNav, setAnchorElNav] = React.useState(null);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const inputChange = (event) => {
        setFilter(event.target.value)
    }


    const navigate = useNavigate()
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
                    >
                        Pokedex
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >

                            <MenuItem key={2} onClick={() => {
                                navigate(`/catchedPokemons`)
                            }}>
                                <Typography textAlign="center">Catched Pokemons</Typography>
                            </MenuItem>
                            <MenuItem key={3} onClick={() => {
                                navigate(`/`)
                            }}>
                                <Typography textAlign="center">Main</Typography>
                            </MenuItem>

                        </Menu>
                    </Box>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        <Button
                            key={1}
                            onClick={() => {
                                navigate(`/catchedPokemons`)
                            }}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            Catched Pokemons
                        </Button>
                        <Button
                            onClick={() => {
                                navigate(`/`)
                            }}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            Main page
                        </Button>
                    </Box>
                    <Search>
                    <SearchIconWrapper>
                        <SearchIcon/>
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{'aria-label': 'search'}}
                        onChange={inputChange}
                        value={filter}
                    />
                </Search>
            </Toolbar>
        </Container>
</AppBar>
)
    ;
};
export default ResponsiveAppBar;
