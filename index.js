var kittens = ['Milo', 'Otis', 'Garfield'];

var destructivelyAppendKitten = function(name) {
  kittens = kittens.push(name);
  return kittens;
}