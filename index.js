function theBeatlesPlay(musicians, instruments) {
  var empty = new Array();
  for (var i = 0; i < musicians.length; i++) {
    empty.push(`${musicians [i]} plays ${instruments[i]}`)
  }
  return empty
}
