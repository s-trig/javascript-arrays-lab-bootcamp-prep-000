//const app = "I don't do much."

//var kittens = ['k1', 'k2', 'k3']


 function destructivelyAppendKitten(name) {
   kittens.push(name)
 }

 function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

  function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
}

  function destructivelyRemoveFirstKitten(name) {
    kittens.shift(name)
  }

  function appendKitten(name) {
    return [...kittens, name]
  }

  function prependKitten(name) {
    return [name, ...kittens]
  }

  function removeLastKitten(name) {
    kittens.slice(0, kittens.length -1)
  }
