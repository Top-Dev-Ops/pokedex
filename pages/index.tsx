import type { NextPage } from 'next'
import { useContext } from 'react'
import PokemonList from '../components/pokemon-list'
import Spinner from '../components/spinner'
import { DataContext } from '../contexts/data-context'

const Home: NextPage = () => {

  const { loading, pokemen, loadMore } = useContext(DataContext)

  return (
    <div className="bg-stack-2 mx-4 rounded-lg">
      <div className="mx-auto w-full py-4 px-4 sm:py-8 sm:px-6 lg:px-8">
        <h2 className="text-default mb-4 font-semibold text-lg">All POKEMON</h2>

        <PokemonList
          pokemen={pokemen}
        />

        <div className="text-center mt-20">
          <button
            className="px-4 py-1.5 bg-primary text-primary rounded-xl shadow-md font-extrabold w-80 h-12"
            onClick={loadMore}
          >
            {loading? <Spinner />: 'LOAD MORE POKEMON'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
