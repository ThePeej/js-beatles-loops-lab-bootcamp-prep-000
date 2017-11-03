

function johnLennonFacts(array) {
  var n = 0
  var exclam = "!!!"
  while (n < array.length) {
    array = array.splice(n,1,array[n]+exclam)
    n++
  }
  return array
}
