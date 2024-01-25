// Array methods

// Splice

// let arr= ['Sardor','Axror', 'Bobur',]
// arr.splice(0,1, 'Anvar');
// console.log(arr)

// let array= ['Thomas', {isMarried:true,}, 'Denis']
// array.splice(2,1);
// console.log(array);

// let users=[['John', 'Mike', 'Sofiya',],['Ulugbek','Olim', 'Jasur']];
// console.log(users[0][1]);
// users[0][1]="Michael";
// console.log(users[0][1])

// let arr= ['olma', {ism:'Sardor', age:16,},'anor']
// console.log(arr)
// console.log(arr[1].ism)
// console.log(arr[2])

// Push
// let arr= ['Sardor', 'Faxriyor',]
// arr.push('Sarvar')
// console.log(arr);

// Pop
// let arr= ['Sardor', 'Faxriyor',]
// arr.pop()
// console.log(arr);


// Unshift
// let arr= ['anor', 'olma',]
// arr.unshift('mandarin')
// console.log(arr);


// Shift
// let arr= ['anor', 'olma',]
// arr.shift()
// console.log(arr);


// Delete 
// let arr= ['anor', 'olma',]
// delete arr[1]
// console.log(arr);

// DELETE Splice 
// let arr= ['anor', 'olma',]
// arr.splice(1,1)
// console.log(arr);


// ADD Splice
// let arr= ['anor', 'olma',]
// arr.splice(0,0, 'Sardor')
// console.log(arr);



// let user={}

// let firstName='Addison';
// let name= "Anton";
// user[firstName]=name;
// console.log(user.Addison);

// var userName= {}
// let firstName="Jerry";
// let lastName= "Ricardo";
// userName[lastName]= firstName;
// console.log(userName.Ricardo)

// const obj={}
// let name= "Michael";
// let firstName= "Bobbi";
// obj[name]=firstName;
// console.log(obj.Michael)



// const user={
//     userName:"Sardor",
//     userAge:16,
//     job:{
//         "yoqtirgan jamoasi":"real",
//         "yoqtirgan rangi":'yashil',
//     }
// }
// for (let i in user){
//     console.log(`${i} and ${user[i]}`)
// }

// for (let control in user.job){
//     console.log(`${control} and ${user.job[control]}`)
// }


let user={
    name:"Aryan",
    age:24,
    from:"India",
}

let clonedObj=structuredClone(user)
console.log(clonedObj)

clonedObj.name="Rawesh";
console.log(clonedObj)