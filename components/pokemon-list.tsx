import { useContext } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Badge from './badge'
import { PokemonType } from '../utils/types'
import { DataContext } from '../contexts/data-context'

export default function PokemonList(
{
  pokemen
}: { pokemen: PokemonType[] }) {

  const router = useRouter()

  const { fetchPokemon } = useContext(DataContext)

  const onClick = async (id: number) => {
    await fetchPokemon(id)
    router.push(`/pokemon/${id}`)
  }
  
  return (
    <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-4 lg:grid-cols-5 xl:gap-x-6">
      {pokemen.map(({ id, name, sprite, types }: PokemonType) => (
        <div key={name}>
          <div
            className="group aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-stack-3 xl:aspect-w-7 xl:aspect-h-8 hover:cursor-pointer"
            onClick={() => onClick(id)}
          >
            {sprite && (
              <Image
                src={sprite ?? ''}
                alt={name}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
                layout="fill"
              />
            )}
          </div>

          <span className="text-sm text-secondary font-semibold sm:ml-4">#{id}</span>

          <h3
            className="my-2 text-xl text-primary font-semibold capitalize text-left sm:ml-4 hover:underline hover:cursor-pointer"
            onClick={() => onClick(id)}
          >
            {name}
          </h3>

          <div className="sm:ml-4">
            {types.map(type => {
              const background = `var(--bg-${type})`
              return (
                <Badge
                  key={`${id}_${name}_${type}`}
                  label={type}
                  background={background}
                />
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}