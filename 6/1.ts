import { input } from './input'

const [times, distances] = input.split('\n').map(line => line.replace(/Time:\s+/, '').replace(/Distance:\s+/, '').split(/\s+/).map(Number))

const res = times.reduce((acc, time, index) => {
  const record = distances[index]

  const wins = Array.from({ length: time + 1 }, (_, idx) => idx).reduce<number>((count, holdTime) => {
    const timeLeft = time - holdTime
    const distance = timeLeft * holdTime

    return distance > record ? count + 1 : count
  }, 0)

  return acc * wins
}, 1)

console.log(res)