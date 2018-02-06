export interface IPokedexRegion {
    name: string;
    pokemon_entries: {
        entry_number: string,
        pokemon_species: {
            name: string,
            url: string
        },
    }[];
}
