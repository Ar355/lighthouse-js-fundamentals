const whichSchool  = function (age) {
  if(age < 13) {
    return 'You shoud go to Elementary School'
  }else if(age <= 18) {
      return 'You should go to Secondary School'
  } else{ 
    return 'You shoud go to Lighthouse Labs'
}
}
console.log (whichSchool(13));