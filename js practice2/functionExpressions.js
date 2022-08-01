
/* creating a variable named plantNeedsWater*/ const plantNeedsWater = /* assigning a function to it (rather than just a value). This way we can refer to the function by calling 'plantNeedsWater()' and pass arguments into that. */ function(day) {
  if (day === 'Wednesday') {
    return true;
  }
  else {
    return false;
  }
}

plantNeedsWater('Tuesday');

console.log(plantNeedsWater('Tuesday'));
