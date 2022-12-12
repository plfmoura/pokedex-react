import { Grid } from "@mui/material"
import { Container } from "@mui/system"
import axios from "axios"
import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import NavBar from "../components/NavBar"
import PokemonCard from "../components/PokemonCard"
import { Skeletons } from "../components/Skeletons"

export const Home = () => {
    const [pokemons, setPokemons] = useState([])
    useEffect(() => {
        getPokemons();
    }, [])

    const getPokemons = () => {
        var endPoints = []
        for(let i = 1; i < 200; i++) {
            endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        axios.all(endPoints
            .map((endPoint) => axios
                .get(endPoint)))
                .then((response) => setPokemons(response))
                .catch((error) => console.log(error))
    }

    const pokemonFilter = (name) => {
        let filteredPokemons = [];
        if (name === ''){
            getPokemons();
        }

        let pesquisa = name.toLowerCase()
        for(var i in pokemons){
            if(pokemons[i].data.name.includes(pesquisa)){
                filteredPokemons.push(pokemons[i]);
            }
        }
        setPokemons(filteredPokemons);
    }

    return (
        <div>
            <NavBar pokemonFilter={pokemonFilter} />
            <Container maxWidth="false">
                <Grid container spacing="2rem">
                    {pokemons.length === 0 ? (
                        <Skeletons />
                    ) : (
                        pokemons.map((pokemon, key) => (
                            <Grid item xs={12} sm={6} md={3} lg={3} key={key}>
                                <PokemonCard 
                                    name={pokemon.data.name} 
                                    imagem={pokemon.data.sprites.front_default}
                                    types={pokemon.data.types}
                                />
                            </Grid>
                        ))
                    )}
                </Grid>
            </Container>
        </div>
    )
}

export default Home