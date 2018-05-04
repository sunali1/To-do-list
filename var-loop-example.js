{
  var list  = []

  for (var i = 0; i < 10; ++i) {
    list.push(()=> i)
  }

  console.log(i)

  list.forEach(f => console.log(f()))
}

console.log(i)
