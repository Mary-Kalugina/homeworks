"use strict";
let fnResult;
function solveEquation(a, b, c) {
    let discriminant = b**2-4*a*c;
    let resultArray = [];
    if (discriminant < 0) {
        fnResult = resultArray;
    } else if (discriminant == 0) {
       fnResult = resultArray.push(-b/(2*a));
    } else if (discriminant > 0) {
       fnResult = resultArray.push((-b + Math.sqrt(discriminant) )/(2*a), (-b - Math.sqrt(discriminant) )/(2*a));
    }
  return fnResult
}
solveEquation(1, 8, 1)
console.log(fnResult)