var kittens = ['Milo', 'Otis', 'Garfield'];

var destructivelyAppendKitten = function(name) {
  kittens = kittens.append(name);
  return kittens;
}