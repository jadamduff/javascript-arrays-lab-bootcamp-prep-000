var kittens = ['Milo', 'Otis', 'Garfield'];

var destructivelyAppendKitten = function(name) {
  kittens.push(name);
  return kittens;
}

var destructivelyPrependKitten = function(name) {
  kittens.unshift(name);
  return kittens;
}

var destructivelyRemoveLastKitten = function(name) {
  kittens.slice(0, kittens.length - 1);
  return kittens;
}

var destructivelyRemoveFirstKitten = function(name) {
  kittens.slice(1);
  return kittens;
}

var appendKitten = function(name) {
  return kittens.push(name);
}