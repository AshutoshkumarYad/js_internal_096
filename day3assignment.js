let marks = [80, 90, 70, 85, 95]
let avg=marks.reduce((acc,curr)=>(acc+curr)/marks.length,0)
console.log("Task 1 avg of marks: ", avg)

let numbers = [1,2,3,4,5,6,7,8,9]
let even=numbers.filter(n=>n%2===0)
console.log("Task 2 even numbers:",even)

let cart = { 
item: "Laptop", 
price: 45000, 
quantity: 2 
}
let bill=cart.price*cart.quantity
console.log("Task 3 total bill: ",bill)

let movie=["intersteller","inception","The dark knight"]
movie.push("Tenet")
movie.pop()
console.log("Task 4 movie list: ")
for(let i=0;i<movie.length;i++){
    console.log(movie[i])
}

let user = { name: "Aman", age: 21, course: "JS" }
let userJson = JSON.stringify(user)
console.log("Task 5 JSON string:", userJson)
let userObj = JSON.parse(userJson)
console.log("Task 5 Parsed object:", userObj)

let arr = [10, 40, 25, 80, 15]
function findMax(array) {
  if (array.length === 0) return undefined
  let max = array[0]
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) max = array[i]
  }
  return max
}
console.log("Task 6 Max value:", findMax(arr))

let names = ["ram", "shyam", "mohan"]
let upper = names.map(n => n.toUpperCase())
console.log("Task 7 Uppercase names:", upper)
