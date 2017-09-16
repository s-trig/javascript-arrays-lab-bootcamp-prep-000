//const app = "I don't do much."

var kittens = ['k1', 'k2', 'k3']


 function destructivelyAppendKitten(name) {
   kittens.push(name)
   return kittens
 }

function destructivelyPrependKitten(name) {
  kittens.pop(name)
  return kittens
}
