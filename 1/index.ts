import { input } from './input'

const stringNumbers = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
]

const spelledNumbers = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine'
]

const search = [
  ...stringNumbers,
  ...spelledNumbers
]

const res = input.split('\n').reduce((acc, line) => {
  const firstMatch = search.reduce((match, searchItem) => {
    const idx = line.indexOf(searchItem)

    if (idx === -1) {
      return match
    }

    return idx < match.index ? { index: idx, matched: searchItem } : match
  }, { index: Infinity, matched: '' })
  const secondMatchRaw = search.reduce((match, searchItem) => {
    const idx = line.lastIndexOf(searchItem)

    
    if (idx === -1) {
      return match
    }

    return idx > match.index ? { index: idx, matched: searchItem } : match
  }, { index: firstMatch.index, matched: '' })

  const secondMatch = secondMatchRaw.matched === ''
    ? firstMatch
    : secondMatchRaw

  const firstValue = spelledNumbers.includes(firstMatch.matched)
    ? spelledNumbers.indexOf(firstMatch.matched)
    : Number(firstMatch.matched)
  const secondValue = spelledNumbers.includes(secondMatch.matched)
    ? spelledNumbers.indexOf(secondMatch.matched)
    : Number(secondMatch.matched)

  return acc + Number(`${firstValue}${secondValue}`)
}, 0)

console.log(res)