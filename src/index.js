module.exports = function solveEquation(equation) {
  var firstRoot = function (b, d, a) {
    return (-1 * b - Math.sqrt(d)) / (2 * a);
  };

  var secondRoot = function (b, d, a) {
    return (-1 * b + Math.sqrt(d)) / (2 * a);
  };

  var sortRoots =  (a, b) => a - b;

  var result = [];
  var match;
  var a = 0;
  var b = 0;
  var c = 0;

  var string = equation.replace(/\s+/ig, "");

  var stringMatch = string.match(/[\+\-]*\d+\*x\^2/i);

  if (stringMatch) {
    match = stringMatch[0];
    string = string.replace(match, "");
    match = match.replace(/\*x\^2/i, "");
    a = +match;
  }

  stringMatch = string.match(/[\+\-]+\d+\*x/i);

  if (stringMatch) {
    match = stringMatch[0];
    string = string.replace(match, "");
    match = match.replace(/\*x/i, "");
    b = +match;
  }

  stringMatch = string.match(/[\+\-]+\d+/i);

  if (stringMatch) {
    c = +stringMatch[0];
  }

  //discriminant = b*b / 4*a*c
  var d = Math.pow(b, 2) - 4 * a * c; 

  //d < 0 , x - doesn't exist
  //d = 0 , x = -b + sqrt(d) / 2a
  //d > 0 , x = (-b +(-) sqrt(d)) /2a
  if (d < 0) {
    return [null, null];
  } else if (d == 0) {
    return [((-b) + Math.sqrt(d))/(2 * a), null] 
  } else {
    result.push(Math.round(firstRoot(b, d, a)));
    result.push(Math.round(secondRoot(b, d, a)));
    result.sort(sortRoots);
  }
  return result;
}
