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
  kittens.pop();
  return kittens;
}

var destructivelyRemoveFirstKitten = function(name) {
  kittens.shift();
  return kittens;
}

var appendKitten = function(name) {
  return [...kittens, name];
}

var prependKitten = function(name) {
  return [name, ...kittens];
}