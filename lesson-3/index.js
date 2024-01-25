// 1.
// let son= +prompt('Sonni kiriting')
// if (son%2==0) {
//     console.log('Bu juft son');
// }else {
//     console.log('Bu toq son');
// }

// 2.
let number= +prompt('Sonni kiriting')
if(number%2==0 && number>0){
    alert(`${number} musbat va juft son`)
}else if(number%2==0 && number<0){
    alert(`${number} juft lekin manfiy`)
}else if(number%2!==0 && number>0){
    alert(`${number} toq va musbat`)
}else if(number==0){
    alert(`${number} toq ham emas juft son ham hisoblanmaydi`)
}else if(number%2!=0 && number<0){
    alert(`${number} toq lekin manfiy`)
}else { 
    alert('Siz sonni kiritishingiz kerak edi')
}



// 3.
// let mNafas = +prompt('Bir daqiqada nechi marta nafas oladi?')
// let secund = 60
// const sNafas = mNafas / secund
// if(sNafas>0){
//     alert(`Bir soniyada ${sNafas} marta nafas oladi`)
// }else{
//     alert('Sonni hali kiritmadiz')
// }

// 4.
// let firstSpeed= +prompt('Birinchi tezlik')
// let firstTime=+prompt('Birinchi vaqt')
// let secondSpeed=+prompt('Ikkinchi tezlik')
// let secondTime= +prompt('Ikkinchi vaqt')
// const allDistance= firstSpeed*firstTime+secondSpeed*secondTime
// alert(`Jami ${allDistance} km masofa yurdiz`)

// 5.
// let sutLitr= +prompt('Nechi litrlik sut oldingiz')
// let sutBanka= +prompt('Nechi banka?')
// const sutNarxi= 5000
// const narxiSut= (sutLitr*sutBanka)*sutNarxi
// if(narxiSut>0){
//     alert(`Jami xarid qilgan sut ${narxiSut} so\'m`)
// }else if(sutLitr<0 || sutBanka<0){
//     alert('Siz noto\'g\'ri narx kiritdingiz')
// }

// 6.
// let umumiyMassa=1828
// let sigirSoni=2
// let sigirVazni= 286
// let buqaSoni= 4
// const buqaVazni= (umumiyMassa-(sigirVazni*sigirSoni))/buqaSoni
// console.log(buqaVazni);

// 7.
// alert('Siz uchta sonni kiritishiz kerak')
// let firstNum= +prompt('Birinchi sonni kiriting')
// let secondNum= +prompt('Ikkinchi sonni kiriting')
// let thirdNum= +prompt('Uchinchi sonni kiriting')
// const maxNumber= Math.max(firstNum, secondNum, thirdNum)
// alert(`Siz kiritgan sonlariz ichida eng kattasi ${maxNumber}`)

// 8.
// alert('Uchta sonni kiriting')
// let birinchiSon= +prompt('Birinchi sonni kiriting')
// let ikkinchiSon= +prompt('Ikkinchi sonni kiriting')
// let uchinchiSon= +prompt('Uchinchi sonni kiriting')
// let minNumber= Math.min(birinchiSon, ikkinchiSon, uchinchiSon)
// alert(`Siz kiritgan sonlar ichida eng kichigi ${minNumber}`)


// 9.
// let birinchiSon= +prompt('Birinchi sonni kiriting')
// let ikkinchiSon= +prompt('Ikkinchi sonni kiriting')
// if(birinchiSon%2!==0 && ikkinchiSon%2!==0){
//     alert('Bu sonlarni ikkasi ham toq')
// }else if(birinchiSon%2!==0 || ikkinchiSon%2!==0){
//     alert('Bu sonnlardan faqat bittasi toq')
// }else if(birinchiSon%2==0 && ikkinchiSon%2==0){
//     alert('Bu sonlarning ikkisi ham juft')
// }else if(birinchiSon%2==0 || ikkinchiSon%2==0){
//     alert('Bu sonlardan faqat bittasi juft')
// }else{
//     alert('Siz son qiymatini kiritishingiz kerak')
// }

// 10.
// let a= +prompt('Birinchi sonni kiriting')
// let b= +prompt('Ikkinchi sonni kiriting')
// let c= +prompt('Uchinchi sonni kiriting')
// let d= +prompt('To\'rtinchi sonni kkiriting')
// if(a%2==0 && b%2==0 && c%2==0 && d%2==0){
//     alert('Bu sonlarning hammasi juft')
// }else {
//     alert('Bu sonlardan hammasi ham juft emas')
// }

// 11.
// let son= +prompt('Sonni kiriting')
// let juft= son+3
// let toq= son-2
// if(son%2==0){
//     alert(`${juft}`)
// }else {
//     alert(`${toq}`)
// }

// 12. 
// let son= +prompt('Hafta sonini kiriting')
// switch (son) {
//     case 1:
//         alert('Dushanba')
//         break;
//     case 2:
//         alert('Seshanba')
//         break
//     case 3:
//         alert('Chorshanba')
//         break
//     case 4:
//         alert('Payshanba')
//         break
//     case 5:
//         alert('Juma')
//         break
//     case 6:
//         alert('Shanba')
//         break
//     case 7:
//         alert('Yakshanba')
//         break
//     default:
//         alert('Siz aniq sonni kiritmadingiz')
//         break;
// }

// 13.
// let num = +prompt('Telefon raqamingizning kodini kiriting')
// switch (num) {
//     case 90:
//         alert('Beeline')
//         break
//     case 91:
//         alert('Beeline')
//         break
//     case 93:
//         alert('UCELL')
//         break
//     case 94:
//         alert('UCELL')
//         break
//     case 97:
//         alert('UMS')
//         break
//     case 99:
//         alert('UzMobile')
//         break
//     default:
//         alert('Xato sonni kiritdingiz')
//         break
// }

// 14. 
// let number= +prompt('Olgan bahongizni kiriting')
// switch  (number){
//     case 1:
//         alert('Yomon')
//         break
//     case 2:
//         alert('Qoniqarsiz')
//         break
//     case 3:
//         alert('Qoniqarli')
//         break
//     case 4:
//         alert('Yaxshi')
//         break
//     case 5:
//         alert('A\'lo')
//         break
//     default:
//         alert('Bunday baho yo\'q')
//         break
// }

// 15.
// let oyNum = +prompt('Oyning tartib raqamini kiriting')
// switch (oyNum) {
//     case 1:
//         alert('Yanvar qish fasli')
//         break
//     case 2:
//         alert('Fevral qish fasli')
//         break
//     case 3:
//         alert('Mart bahor fasli')
//         break
//     case 4:
//         alert('Aprel bahor fasli')
//         break
//     case 5:
//         alert('May bahor fasli')
//         break
//     case 6:
//         alert('Iyun yoz fasli')
//         break
//     case 7:
//         alert('Iyul yoz fasli')
//         break
//     case 8:
//         alert('Avgust yoz fasli')
//         break
//     case 9:
//         alert('Sentyabr kuz fasli')
//         break
//     case 10:
//         alert('Oktyabr kuz fasli')
//         break
//     case 11:
//         alert('Noyabr kuz fasli')
//         break
//     case 12:
//         alert('Dekabr qish fasli')
//         break
// }