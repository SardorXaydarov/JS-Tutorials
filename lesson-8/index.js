// let fruits= [
//     {name:'olma', price:20000,},
//     {name:'anor', price:10000,},
//     {name:'nok', price:30000,},
//     {name:'banan', price:40000,},
// ]

// let jamiSumma= fruits.reduce((previousValue, currentValue)=>{
//     return previousValue+currentValue.price
// },0)

// console.log(jamiSumma)


// let jamiMevalar= fruits.reduce((previousValue, currentValue)=>{
//     return previousValue+`Siz sotib olmoqchi bo'lgan mevalar: ${currentValue.name.toUpperCase()}`
// })

// console.log(jamiMevalar)



// Groupps vegetables and fruits
// let fruitsVegetables= [
//     {name:'potato', category:'vegetable'},
//     {name:'banana', category:'fruit'},
//     {name:'orange', category:'fruit'},
//     {name:'tomato', category:'vegetable'},
// ]

// const groupedItems= fruitsVegetables.reduce((accumulator, item)=>{
//     const categoryy = item.category;
//     if(!accumulator[categoryy]){
//         accumulator[categoryy] = []
//     }
//     accumulator[categoryy].push(item.name)
//     return accumulator
// })
// console.log(groupedItems)



// Find
// let ages= [20,31,44,20,16,17]
// console.log(ages.find((age)=> age<20));

// every


// let names=['Sardor', 'Anvar', 'Jalol', 'Fax']
// let name = names.every((name)=> typeof name === 'string' )
// console.log(name)

// Some
// let namesSome= ['Name1', 'Name2', 'Name3', 'Name4',]
// console.log(namesSome.some((name)=> typeof name === 'number'))

