var kittens = ['Milo', 'Otis', 'Garfield'];

var destructivelyAppendKitten = function(name) {
  kittens.push(name);
  return kittens;
}