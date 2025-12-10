let fruit=["apple","banaya","cherry","grapes","strawberry"]
for(let i=0;i<fruit.length;i++){
    console.log(fruit[i])
}

fruit.push("papaya")
console.log(fruit)
fruit.pop()
console.log(fruit)
fruit.unshift("kiwi")
console.log(fruit)
console.log(fruit.includes("mango"))
console.log(fruit.indexOf("banaya"))

// map operation
let num=[1,2,3]
let doubled=num.map(n=>n*2)
console.log(doubled)

let numb=[2,4,7,8,9]
let res=numb.map(n=>n*2)
console.log(res)

// filter operation
let nums=[1,2,3,10,20,30]
let result=nums.filter(n=>n>7)
console.log(result)
let nume=[10,20,30,40,50]
let rest=nume.filter(n=>n>20)
console.log(rest)

// reduce function
let numer=[1,2,3,4,5]
let sum=numer.reduce((acc,curr)=>acc+curr,0)
console.log(sum)
