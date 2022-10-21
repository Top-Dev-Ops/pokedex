import { useState, useEffect, useCallback, createContext } from 'react'
import { PokemonType } from '../utils/types'

interface DataContextInterface {
  loading: boolean
  totalCount: number
  pokemen: PokemonType[]
  pokemon: PokemonType | null
  loadMore: () => void
  search: (query: string) => void
  fetchPokemon: (id: number) => void
}

export const DataContext = createContext<DataContextInterface>({
  totalCount: 1154,
  loading: false,
  pokemen: [],
  pokemon: null,
  loadMore: () => {},
  search: () => {},
  fetchPokemon: () => {},
});

export default function DataProvider(props: any) {
  const [loading, setLoading] = useState(false)
  const [pokemen, setPokemen] = useState<PokemonType[]>([])
  const [pokemon, setPokemon] = useState<PokemonType | null>(null)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const totalCount = 1154

  useEffect(() => {
    const newPokemen: PokemonType[] = []
    ;(async () => {
      for (let id = 1; id <= 20; id++) {
        const data = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pokemon/${id}`)).json()
        delete data.sprites['other']
        delete data.sprites['versions']
        newPokemen.push({
          id: data.id,
          name: data.name,
          sprite: data.sprites.front_default,
          types: data.types.map(({ type: { name, _ } }: any) => name),
          sprites: data.sprites,
          height: data.height,
          weight: data.weight,
          species: data.species.name,
          abilities: data.abilities.map((ability: any) => ability.ability.name),
          stats: data.stats.map((stat: any) => ({ name: stat.stat.name, base_stat: stat.base_stat })),
        })
      }
      setPokemen(newPokemen)
    })()
  }, [])

  const loadMore = async () => {
    setLoading(true)
    const newPokemen: PokemonType[] = []
    for (let id = 20 * currentPage + 1; id <= 20 * (currentPage + 1); id++) {
      const data = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pokemon/${id}`)).json()
      delete data.sprites['other']
      delete data.sprites['versions']
      newPokemen.push({
        id: data.id,
        name: data.name,
        sprite: data.sprites.front_default,
        types: data.types.map(({ type: { name, _ } }: any) => name),
        sprites: data.sprites,
        height: data.height,
        weight: data.weight,
        species: data.species.name,
        abilities: data.abilities.map((ability: any) => ability.ability.name),
        stats: data.stats.map((stat: any) => ({ name: stat.stat.name, base_stat: stat.base_stat })),
      })
    }
    setCurrentPage(currentPage + 1)
    setPokemen(prev => [...prev, ...newPokemen])
    setLoading(false)
  }

  const search = async (query: string) => {
    const newPokemen: PokemonType[] = []
    if (query === '') {
      for (let id = 1; id <= 20; id++) {
        const data = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pokemon/${id}`)).json()
        delete data.sprites['other']
        delete data.sprites['versions']
        newPokemen.push({
          id: data.id,
          name: data.name,
          sprite: data.sprites.front_default,
          types: data.types.map(({ type: { name, _ } }: any) => name),
          sprites: data.sprites,
          height: data.height,
          weight: data.weight,
          species: data.species.name,
          abilities: data.abilities.map((ability: any) => ability.ability.name),
          stats: data.stats.map((stat: any) => ({ name: stat.stat.name, base_stat: stat.base_stat })),
        })
      }
      setPokemen(newPokemen)
      return
    }
    const pokemonNames = (await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pokemon/?offset=0&limit=1154`)).json()).results
    const apiUrls = pokemonNames.filter((
      {name, url}: { name: string, url: string }
      , index: number
    ) => name.includes(query.toLowerCase()) || index.toString().includes(query))
    for (let id = 0; id < apiUrls.length; id++) {
      const data = await (await fetch(apiUrls[id].url)).json()
      delete data.sprites['other']
      delete data.sprites['versions']
      newPokemen.push({
        id: data.id,
        name: data.name,
        sprite: data.sprites.front_default,
        types: data.types.map(({ type: { name, _ } }: any) => name),
        sprites: data.sprites,
        height: data.height,
        weight: data.weight,
        species: data.species.name,
        abilities: data.abilities.map((ability: any) => ability.ability.name),
        stats: data.stats.map((stat: any) => ({ name: stat.stat.name, base_stat: stat.base_stat })),
      })
    }
    setPokemen(newPokemen)
  }

  const fetchPokemon = async (id: number) => {
    const data = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pokemon/${id}`)).json()
    delete data.sprites['other']
    delete data.sprites['versions']
    setPokemon({
      id: data.id,
      name: data.name,
      sprite: data.sprites.front_default,
      types: data.types.map(({ type: { name, _ } }: any) => name),
      sprites: data.sprites,
      height: data.height,
      weight: data.weight,
      species: data.species.name,
      abilities: data.abilities.map((ability: any) => ability.ability.name),
      stats: data.stats.map((stat: any) => ({ name: stat.stat.name, base_stat: stat.base_stat })),
    })
  }

  return (
    <DataContext.Provider
      value={{
        loading,
        totalCount,
        pokemen,
        pokemon,
        search,
        loadMore,
        fetchPokemon,
      }}

      {...props}
    />
  )
}

