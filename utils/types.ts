export interface PokemonType {
  id: number
  name: string
  sprite: string
  types: string[]
  height: number
  weight: number
  species: string
  abilities: string[]
  sprites: { [key: string]: string | null }
  stats: { [key: string]: string | number }[]
}