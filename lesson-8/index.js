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
let fruitsVegetables= [
    {name:'potato', category:'vegetable'},
    {name:'banana', category:'fruit'},
    {name:'orange', category:'fruit'},
    {name:'tomato', category:'vegetable'},
]

const groupedItems= fruitsVegetables.reduce((accumulator, item)=>{
    const categoryy = item.category;
    if(!accumulator[categoryy]){
        accumulator[categoryy] = []
    }
    accumulator[categoryy].push(item.name)
    return accumulator
})
console.log(groupedItems)