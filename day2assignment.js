function sum(a, b){ return a + b; }

function sayHello(name){ return `Hello ${name}`; }

function isEven(n){ return n % 2 === 0 ? "Even" : "Odd"; }

function cToF(c){ return (c * 9/5) + 32; }

function maxOfThree(a,b,c){ return Math.max(a,b,c); }

function strLength(s){ return s.length; }

function toggleBool(x){ return !x; }

function concatStrings(...parts){ return parts.join(''); }

function signOfNumber(n){
  if(n > 0) return "Positive";
  if(n < 0) return "Negative";
  return "Zero";
}

function varLetConstExample(){
  var a = 1; 
  let b = 2; 
  const c = 3; 
  return {a,b,c};
}

function multiplicationTable(n, upto = 10){
  const arr = [];
  for(let i=1;i<=upto;i++) arr.push(`${n} x ${i} = ${n*i}`);
  return arr;
}

function sumFirstNNatural(n = 10){
  return n * (n + 1) / 2;
}

function dayName(n){
  switch(n){
    case 0: return "Sunday";
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wednesday";
    case 4: return "Thursday";
    case 5: return "Friday";
    case 6: return "Saturday";
    default: return "Invalid day";
  }
}

function factorial(n){
  if(n < 0) return undefined;
  let res = 1;
  for(let i=2;i<=n;i++) res *= i;
  return res;
}

function isEligibleToVote(age){
  return age >= 18 ? "Eligible" : "Not eligible";
}

function isPrime(n){
  if(n <= 1) return false;
  if(n <= 3) return true;
  if(n % 2 === 0 || n % 3 === 0) return false;
  for(let i=5; i*i<=n; i+=6){
    if(n % i === 0 || n % (i+2) === 0) return false;
  }
  return true;
}

function sumOfDigits(n){
  n = Math.abs(n);
  let sum = 0;
  while(n){
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

function reverseString(s){
  let out = '';
  for(let i = s.length - 1; i >= 0; i--) out += s[i];
  return out;
}

function gradeFromMarks(marks){
  if(marks >= 90) return 'A';
  if(marks >= 75) return 'B';
  if(marks >= 50) return 'C';
  return 'Fail';
}

function calc(a, b, operator){
  switch(operator){
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : 'Cannot divide by zero';
    default: return 'Invalid operator';
  }
}

function countVowels(s){
  const vowels = new Set(['a','e','i','o','u']);
  let count = 0;
  for(let ch of s.toLowerCase()) if(vowels.has(ch)) count++;
  return count;
}

function fibonacci(n){
  if(n <= 0) return [];
  if(n === 1) return [0];
  const res = [0,1];
  while(res.length < n) res.push(res[res.length-1] + res[res.length-2]);
  return res;
}

function minMax(arr){
  if(!arr || arr.length === 0) return null;
  let min = arr[0], max = arr[0];
  for(let x of arr){
    if(x < min) min = x;
    if(x > max) max = x;
  }
  return {min, max};
}

function menuProgram(choice, a, b){
  switch(choice){
    case 1: return a + b;
    case 2: return a - b; 
    case 3: return a * b; 
    case 4: return b !== 0 ? a / b : 'Cannot divide by zero'; 
    default: return 'Invalid choice';
  }
}

function isArmstrong(n){
  const s = String(Math.abs(n));
  const len = s.length;
  let sum = 0;
  for(let ch of s) sum += Math.pow(Number(ch), len);
  return sum === Math.abs(n);
}

console.log(sum(4, 5))
console.log(sayHello("Ashutosh"))
console.log(isEven(76))
console.log(cToF(89))
console.log(maxOfThree(5,2,9))
console.log(strLength("Today is day 2 of the training"))
console.log(toggleBool(false))
console.log(concatStrings("Hi"," ","there"))
console.log(signOfNumber(-2))
console.log(varLetConstExample())
console.log(multiplicationTable(5))
console.log(sumFirstNNatural())
console.log(dayName(3))
console.log(factorial(5))
console.log(isEligibleToVote(17))
console.log(isPrime(29))
console.log(sumOfDigits(123))
console.log(reverseString("abc"))
console.log(gradeFromMarks(82))
console.log(calc(10,5,'/'))
console.log(countVowels("Hello"))
console.log(fibonacci(6))
console.log(minMax([3,7,1,9]))
console.log(menuProgram(3,4,5))
console.log(isArmstrong(153))