'use strict'

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







// function getUserByName(userName){
//     const getUser = users.filter((user)=>{
//         return user.username.includes(userName)
//     }) 
//     console.log(getUser);
// }
// getUserByName('M')


// let person ={
//     name: 'Brzenk',
//     age: 19,
//     logout: function(){
//         console.log(this.name);
//     },
// }
// person.logout()



// this kalit sozi
// let person ={
//     name: 'Brzenk',
//     age: 19,
//     logout: function(){
//         console.log(this.name);
//         function name(){
//             console.log(this);
//         }
//         name()
//     },
// }
// person.logout()



// this functionlarda
// function sayHello(){
//     console.log(this);
// }
// sayHello()
// Funksiyalarda this window global objectga teng agar "use strict" yoniq bolsa undefined ga teng

// function sayHello(){
//     console.log(this);
//     function name(){
//         console.log(this);
//     }
//     name()
// }
// sayHello()

// this funksiylarni ichida bolsa ham windowga va "use strict" yoniq bolsa undefinedga teng



// this kalit sozi objectlarda

// const user={
//     name:"Sardor",
//     userAge:16,
//     sayBye: function(){
//         console.log(this);
//     }
// }
// user.sayBye()


// Objectlarda THIS sozi "use strict ochiq bolsa ham yoniq bo'lsa ham objectning o'ziga teng"

// var user={
//     username:"Michael",
//     age:31,
//     writer: function(){
//         console.log(this.age);
//         function remover(){
//             console.log(this)
//         }
//         remover()
//     },
// }

// user.writer()

// this kalit sozi object methodlarining ichida joylashgan bolsa windowga, "use strict" yoniq bolganda undefinedga teng