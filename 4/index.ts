import { input } from './input';

const cards = input.split('\n')

const scoreMap = cards.reduce((acc, card, index) => {
  const [left, right] = card.replace(/Card \d+:\s+/, '').split(' | ')
  const winning = left.split(/\s+/).map(Number)
  const mine = right.split(/\s+/).map(Number)

  const point = mine.reduce((points, card) => {
    if (!winning.includes(card)) {
      return points
    }

    return points + 1
  }, 0)

  return {
    ...acc,
    [index + 1]: point,
  }
}, {} as Record<number, number>)

const { sum } = Object.keys(scoreMap).map(Number).reduce(({ sum, resMap }, key) => {
  const value = scoreMap[key]
  const count = resMap[key] || 1
  const newResMap = Array.from({ length: value }).reduce((acc: Record<number, number>, _, index) => ({
    ...acc,
    [key + index + 1]: (resMap[key + index + 1] || 1) + count
  }), resMap as Record<number, number>)

  return { sum: sum + count, resMap: newResMap }
}, { sum: 0, resMap: {} as Partial<Record<number, number>> })

console.log(sum)