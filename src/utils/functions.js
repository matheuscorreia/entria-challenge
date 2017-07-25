const randomHex = (min, max) => {
  let r = Math.floor(Math.random() * max - min).toString(16);
  let g = Math.floor(Math.random() * max - min).toString(16);
  let b = Math.floor(Math.random() * max - min).toString(16);
  return `#${r}${g}${b}`
}

const capitalize = str => {
  return `${str[0].toUpperCase()}${str.slice(1)}`
}

export { randomHex, capitalize }
