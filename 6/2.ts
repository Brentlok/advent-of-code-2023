import { input } from './input'

const [time, record] = input.split('\n').map(line => Number(line.replace(/Time:\s+/, '').replace(/Distance:\s+/, '').replace(/\s+/g, '')))

const wins = Array.from({ length: time + 1 }, (_, idx) => idx).reduce<number>((count, holdTime) => {
  const timeLeft = time - holdTime
  const distance = timeLeft * holdTime

  return distance > record ? count + 1 : count
}, 0)

console.log(wins)