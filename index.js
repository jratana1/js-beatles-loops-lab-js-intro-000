function theBeatlesPlay(musicians, instruments){
  var empty = [];
  for (let i = 0; i<musicians.length; i++ ){
    empty[i] = musicians[i]+' plays '+instruments[i]
  }
  return(empty)
}
