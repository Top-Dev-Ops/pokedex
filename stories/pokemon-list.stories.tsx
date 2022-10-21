import React from 'react'
import { Story, ComponentMeta } from '@storybook/react'

import PokemonList from '../components/pokemon-list'

export default {
  title: 'Atom/PokemonList',
  component: PokemonList,
  argTypes: {
    width: {
      control: { type: 'range', min: 420, max: 1600, step: 50 },
    },
  },
} as ComponentMeta<typeof PokemonList>

const Template: Story<any> = (args) => (
  <div className="bg-stack-4 p-4">
    <PokemonList {...args} />
  </div>
)

export const Primary = Template.bind({})

Primary.args = {
  pokemen: [{
    id: 7,
    name: 'squirtle',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    types: ['water'],
    sprites: {
      'back_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png',
      'back_female': null,
      'back_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/7.png',
      'back_shiny_female': null,
      'front_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
      'front_female': null,
      'front_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png',
      'front_shiny_female': null, 
    },
    height: 5,
    weight: 90,
    species: 'squirtle',
    abilities: ['torrent', 'rain-dish'],
    stats: [
      {base_stat: 44, name: "hp"},
      {base_stat: 48, name: "attack"},
      {base_stat: 65, name: "defense"},
      {base_stat: 50, name: "special-attack"},
      {base_stat: 64, name: "special-defense"},
      {base_stat: 43, name: "speed"},
    ]
  }, {
    id: 27,
    name: 'sandshrew',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png',
    types: ['ground'],
    sprites: {
      'back_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/27.png',
      'back_female': null,
      'back_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/27.png',
      'back_shiny_female': null,
      'front_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png',
      'front_female': null,
      'front_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/27.png',
      'front_shiny_female': null, 
    },
    height: 6,
    weight: 27,
    species: 'sandshrew',
    abilities: ['sand-veil', 'sand-rush'],
    stats: [
      {base_stat: 50, name: "hp"},
      {base_stat: 75, name: "attack"},
      {base_stat: 85, name: "defense"},
      {base_stat: 20, name: "special-attack"},
      {base_stat: 30, name: "special-defense"},
      {base_stat: 40, name: "speed"},
    ]
  }]
}