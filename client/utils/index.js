export {art, graphics} from './images'

export const shuffle = array => {
  const newArray = array.slice()
  let currentIndex = newArray.length
  let tempValue
  let randomIndex

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    tempValue = newArray[currentIndex]
    newArray[currentIndex] = newArray[randomIndex]
    newArray[randomIndex] = tempValue
  }

  return newArray
}
