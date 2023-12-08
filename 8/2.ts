import { input } from './input';

const [ directionsRaw, ...mapRaw ] = input.split(/\n+/)

type Direction = 'L' | 'R'

const directions = directionsRaw.split('') as Array<Direction>

const map = new Map(mapRaw.map(item => {
  const [ key, value ] = item.split(' = ')

  return [ key, value.replace('(', '').replace(')', '').split(', ') ]
}))

let directionIndex = 0
let steps = 0
let positions = Array.from(map.keys()).filter(key => key.endsWith('A'))

while (!positions.every(position => position.endsWith('Z'))) {
  const direction = directions[directionIndex]

  steps++
  directionIndex = (directionIndex + 1) % directions.length
  positions = positions.map(position => {
    const [ left, right ] = map.get(position) as [ string, string ]

    return direction === 'L' ? left : right
  })
  console.log(steps)
}

console.log('---END---')
console.log(steps)