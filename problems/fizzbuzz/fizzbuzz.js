function genNum(foo) {
  var bar = []
  for(var i = 1; i <= foo; ++i) {
    if ((i%3 === 0) && (i%5 === 0)) {
      bar[i-1] = "fizzbuzz"
    }
    else if(i%3 === 0) {
      bar[i-1] = "fizz"
    }
    else if(i%5 === 0) {
      bar[i-1] = "buzz"
    }
    else {
      bar[i-1] = i
    }
  }
  for (x in bar) {
    console.log(bar[x])
  }
}
