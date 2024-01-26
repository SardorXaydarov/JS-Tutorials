// 1.Foydalanuvchidan nechta kino ko'rdingiz degan savol bering
// 2.Foydalanuvchi nechta kino ko'rganini kiritgandan keyin o'shancha marta
// 1 - ko'rgan kinongizni nomi? 2-ko'rgan kinongizni nomi ? 3 - ko'rgan kinongizni nomi?
// va hokozo shaklida so'ralsin.Va console.logga 1 - ko'rgan kinongizni shu 2 - ko'rgan kinogiz
// shu deb chiqarsin
// 3.kinoning nomlarini bitta massivga qo'shing
// har bitta ko'rilgan kinoni nomini kiritgandan keyin so'ralsin raqam ko'rgan kinongiz unga
// nehca bal berasiz agar foydalanuvchi 5 va 4 oralig'ida bal bersa kino nomi ajoyib kinoga o'xshaydi,
// 4dan kam 2dan baland bo'lsa kino nomi. o'rtacha kinoga o'xshaydi,
// 2dan kam 0ga teng yoki 0dan baland bo'lsa kino nomi. yomon kinoga o'xshaydi unga shunaqa bal beribsiz

// let jamiKino = +prompt("Nechta kino ko'rdingiz?");
// if (jamiKino>=0 || jamiKino<=0){
//     for (let i = 1; i <= jamiKino; i++) {
//         let kinoNomi = prompt(`${i}- kinoning nomi nima?"`)
//         let baho= +prompt(`${i}-kinoga nechi baho qo'yasiz?`)
//         console.log(`${i}-kinongizning nomi ${kinoNomi}`)
//         if(baho===5){
//             console.log(`${i}-kinongiz zor shekilli`)
//         }else if(baho===4){
//             console.log(`${i}-kinongiz yaxshiga oxshayapti`)
//         }else if(baho<4){
//             console.log(`${i}-kinongiz yaxshi emas sizga yoqmapti`)
//         }else{
//             console.log("Iltimos bahongizni sonlarda kiriting")
//         }
//         console.log(`Siz korgan kinoyingiz: ${kinoNomi} unga qoygan baho ${baho}`)
//     }
// }else{
//     alert("Iltimos kinoning sonini sonda kiriting")
// }




// Function find user By ID
const users = [
    {
        _id: "ab12ex",
        username: "Alex",
        email: "alex@alex.com",
        password: "123123",
        createdAt: "08/01/2022 9:00 AM",
        isLoggendIn: false
    },
    {
        _id: "fg12cy",
        username: "Asab",
        email: "asab@asab.com",
        password: "123456",
        createdAt: "08/01/2022 9:30 AM",
        isLoggendIn: true
    },
    {
        _id: "zwf8md",
        username: "Brook",
        email: "brook@brook.com",
        password: "123111",
        createdAt: "08/01/2022 9:45 AM",
        isLoggendIn: true
    },
    {
        _id: "eefamr",
        username: "Martha",
        email: "martha@martha.com",
        password: "123222",
        createdAt: "08/01/2022 9:50 AM",
        isLoggendIn: false
    },
    {
        _id: "ghderc",
        username: "Tomas",
        email: "tomas@tomas.com",
        password: "123333",
        createdAt: "08/01/2022 10:00 AM",
        isLoggendIn: false
    }
];


// function findUserById(users, userId){
//     const findUser= users.filter((user)=>{
//         return user._id===userId
//     })
//     console.log(findUser)
// }
// console.log(findUserById(users, "eefamr"))



// function findUserByName(userEmail) {
//     const findEmail = users.filter((user) => {
//         if (userEmail === user.email) {
//             alert(user.createdAt)
//         }
//         return userEmail === user.email
//     })
//     console.log(findEmail)
// }
// console.log(findUserByName("alex@alex.com"))




// function findUserLoggendIn(login){
//     const findLogin=users.filter((user)=>{
//         return user.isLoggendIn===login
//     })
//     console.log(findLogin)
// }
// console.log(findUserLoggendIn(false))



// function userCHeckPassword(userName, userPassword){
//     const checkPassword= users.filter((user)=>{
//         if(user.password===userPassword && userName===user.username){
//             alert("Siz kiritgan usernamening paroli to'g'ri")
//         }else if(user.password===userPassword || userName===user.username){
//             alert("Siz kiritgan parol yoki username xato")
//         }
//     })
//     return checkPassword
// }
// console.log(userCHeckPassword("Tomas", "123333"));


// function createdAt(userName){
//     const findCreatedAt=users.filter((user)=>{
//         if (userName=== user.username){
//             alert(user.createdAt)
//         }
//         return userName === user.username
//     })
//     console.log(findCreatedAt);
// }
// console.log(createdAt("Martha"));



// SPREAD operatori

// let arr1= [..."Salom"];
// console.log(arr1);

// let arrNumbers=[1,2,3,4,5,6]
// let noNumbers="16"
// noNumbers=[...arrNumbers, noNumbers]
// console.log(noNumbers);



// let question= prompt("Nimadir?", "")
// console.log(question);
// if(question==0){
//     alert("Siz ok tugmasini bosdingiz!")
// }else if(question===null){
//     alert("Siz cancel tugmasini bosdingiz!")
// }


