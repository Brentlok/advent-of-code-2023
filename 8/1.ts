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
let position = 'AAA'

while (position !== 'ZZZ') {
  const direction = directions[directionIndex]

  steps++
  directionIndex = (directionIndex + 1) % directions.length
  const [ left, right ] = map.get(position) as [ string, string ]
  position = direction === 'L' ? left : right
  console.log(position)
}

console.log(steps)