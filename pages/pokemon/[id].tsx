import { useContext } from 'react'
import { Tab } from '@headlessui/react'
import Image from 'next/image'
import Badge from '../../components/badge'
import StatBar from '../../components/stat-bar'
import Spinner from '../../components/spinner'
import { DataContext } from '../../contexts/data-context'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Pokemon() {
  
  const { pokemon } = useContext(DataContext)

  return !pokemon ? (
    <div className="bg-stack-2 rounded-lg">
      <Spinner />
    </div>
  ) : (
    <div className="bg-stack-2 rounded-lg">
      <div className="mx-auto max-w-7xl sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Tab.Group as="div" className="flex flex-col-reverse">
              <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                  {Object.keys(pokemon.sprites).filter(key => pokemon.sprites[key]).map((key) => (
                    <Tab
                      key={pokemon.sprites[key]}
                      className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-stack-3 text-sm font-medium uppercase hover:bg-stack-4"
                    >
                      {({ selected }) => (
                        <>
                          <span className="sr-only">{key}</span>
                          <span className="absolute inset-0 overflow-hidden rounded-md">
                            <Image
                              src={pokemon.sprites[key] ?? ''}
                              className="w-full h-full object-cover object-center"
                              alt={key}
                              layout="fill"
                            />
                          </span>
                          <span
                            className={classNames(
                              selected ? 'ring-primary' : 'ring-transparent',
                              'pointer-events-none absolute inset-0 rounded-md ring-2'
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Tab>
                  ))}
                </Tab.List>
              </div>

              <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
                {Object.keys(pokemon.sprites).filter(key => pokemon.sprites[key]).map((key) => (
                  <Tab.Panel key={`tab_${pokemon.sprites[key]}`}>
                    <Image
                      src={pokemon.sprites[key] ?? ''}
                      className="h-full w-full object-cover object-center sm:rounded-lg"
                      layout="fill"
                    />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <div className="flex gap-x-4">
                <h1 className="text-4xl font-extrabold capitalize tracking-tight text-default">{pokemon.name}</h1>
                <p className="text-4xl tracking-tight text-default opacity-70">#{pokemon.id}</p>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div className="grid grid-cols-2 gap-y-4">
                  <div>
                    <h1 className="text-disabled capitalize font-semibold">Height</h1>
                    <div className="text-secondary text-xl font-extrabold capitalize">{pokemon.height}</div>
                  </div>
                  <div>
                    <h1 className="text-disabled capitalize font-semibold">Weight</h1>
                    <div className="text-secondary text-xl font-extrabold capitalize">{pokemon.weight}</div>
                  </div>
                  <div>
                    <h1 className="text-disabled capitalize font-semibold">Species</h1>
                    <div className="text-secondary text-xl font-extrabold capitalize">{pokemon.species}</div>
                  </div>
                  <div>
                    <h1 className="text-disabled capitalize font-semibold">Abilities</h1>
                    <div className="w-full break-normal">
                      {pokemon.abilities.map((ability: string) => (
                        <span key={ability} className="inline text-secondary text-xl font-extrabold capitalize mr-4">{ability}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h1 className="text-disabled capitalize font-semibold">Types</h1>
                <div className="mt-2">
                  {pokemon.types.map(type => {
                    const background = `var(--bg-${type})`
                    return (
                      <Badge
                        key={`${pokemon.id}_type_${type}`}
                        label={type}
                        background={background}
                      />
                    )
                  })}
                </div>
              </div>

              <div className="mt-6">
                <h1 className="text-disabled capitalize font-semibold">Stats</h1>
                <div className="mt-2 bg-stack-4 rounded-xl p-4 flex flex-col gap-y-4">
                  {pokemon.stats.map(({ name, base_stat }) => {
                    const background = base_stat < 25 ? 'bg-red-500' : base_stat < 50 ? 'bg-yellow-400' : base_stat < 75 ? 'bg-blue-600' : 'bg-green-600'
                    return (
                      <StatBar
                        key={`${pokemon.id}_${name}_${base_stat}`}
                        label={`${name}`}
                        stat={+base_stat}
                        background={background}                        
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
