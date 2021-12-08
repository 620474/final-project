
const PokemonHomePage = ({img, name}) => {
    return (
        <>
            <div>
                {name}
            </div>
            <img src={img}/>
        </>
    )
}

export default PokemonHomePage
