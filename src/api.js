export const searchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("Deu xabu! Erro a seguir: ", error)
    }
}

export const getPoke = async (limit = 50, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("Deu xabu! Erro a seguir: ", error)
    }
}

export const getPokeData = async (url) => {
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("Deu xabu! Erro a seguir: ", error)
    }
}