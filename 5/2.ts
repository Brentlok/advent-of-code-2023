import { input } from './input';

const [ seedsList, ...maps ] = input.split('\n\n')

const seeds = seedsList.replace('seeds: ', '').split(' ').map(Number).reduce((acc, seed, index, array) => {
  if (index % 2 === 1) {
    return acc
  }

  return [...acc, [seed, array[index + 1]]]
}, [] as Array<Array<number>>)

const res = seeds.reduce((min, seedGroup) => {
  const [seed, width] = seedGroup

  const location = maps.reduce((acc, map, index) => {    
    const ranges = map.split('\n').slice(1)
    
    const conversion = ranges.reduce<number | undefined>((converted, range) => {
      if (converted) {
        return converted
      }
  
      const [to, from, rangeWidth] = range.split(' ').map(Number)
      
      if (acc >= from && acc <= from + rangeWidth) {
        return to + (acc - from)
      }
      
      return converted
    }, undefined) ?? acc
  
    return conversion
  }, seed)

  return location < min ? location : min
}, Infinity)

console.log(res)