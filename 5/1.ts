import { input } from './input';

const [ seedsList, ...maps ] = input.split('\n\n')

const seeds = seedsList.replace('seeds: ', '').split(' ').map(Number)

const res = seeds.reduce((min, seed) => {
  const location = maps.reduce((acc, map) => {
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