function mod(n, d) {
  return ((n % d) + d) % d
}

function extendedEuclideanAlgorithm(x,y){
  if(y== 0){
    return [x, 1, 0]
  } 
  else {
    [d, a, b] = extendedEuclideanAlgorithm(
      x,
      mod(x, y)
    )
    return [d, b, a - Math.floor(x / y) * b]
  }
}

function gcd(x, y) {
  return y == 0 ? x : gcd(y, mod(x,y))
}

function inverseMod(x, y) {
  return extendedEuclideanAlgorithm(x,y)[1]
}

exports.mod = mod

exports.extendedEuclideanAlgorithm = extendedEuclideanAlgorithm

exports.gcd = gcd

exports.inverseMod = inverseMod
