// 1
// Majburiy fanlar
let matematika = +prompt('Matematikadan balingiz?', '')
let onatili = +prompt('onatilidan balingiz?', '')
let tarix = +prompt('tarixdan balingiz?', '')
const majburiyHammaFanlar= matematika+onatili+tarix;

// Asosiy fanlar
let kimyo= +prompt('Kimyodan balingiz?', '')
let biologiya= +prompt('biologiyadan balingiz?', '')
const asosiyHammaFanlar = kimyo+biologiya
const hammaFanlar = majburiyHammaFanlar+asosiyHammaFanlar
if(hammaFanlar>=120){
    alert(`Salom , tabriklaymiz siz ${hammaFanlar} ball bilan o\'qishga budjet asosida kirdingiz`)
}   else if(hammaFanlar<120 && hammaFanlar>90){
    alert(`Salom , tabriklaymiz siz ${hammaFanlar} ball bilan o\'qishga kantrakt asosida kirdingiz`)
}else if(hammaFanlar<90 && hammaFanlar>70){
    alert(`Salom , ${hammaFanlar} ball bilan o\'qishga super kantrakt asosida kirdingiz`)
}else if(hammaFanlar==0){
    alert('Siz umuman ball toplamadiz')
}else{
    alert(`Salom , ${hammaFanlar} ball bilan o\'qishga kirolmadiz`)
}

// 2
//Ismni sorab javob beradigan dastur
// let ism= prompt('Ismingiz nima');
// let birinchiHarf= ism.charAt().toUpperCase();
// let davomi = ism.slice(1).toLowerCase();
// let result= birinchiHarf+davomi;
// alert(`Salom, ${result}`)


// 3
// let son = +prompt('Sonni kiriting', '')
// if (son>0){
//     console.log('Musbat');
// }   else if(son<0){
//     console.log('Manfiy son');
// }else if(son===0){
//     console.log('Manfiy ham emas, musbat ham emas');
// }else{
//     console.log('Bunday son yo\'q');
// }

// 4
//Uyga vazifa ikkinchi
// let yosh= +prompt('Yoshingizni kiriting')
// if(yosh>50){
//     console.log('Sizning yoshingiz katta', yosh);
// }else{
//     console.log('Sizning yoshingiz kichik', yosh);
// }

// 5
// let somsaNarxi= +prompt('Somsaning narxi qancha?')
// if(somsaNarxi>3000){
//     console.log('Somsa qimmat ekanee', somsaNarxi, 'so\'m');
// }else {
//     console.log('Somsa arzon ekan bu yerda', somsaNarxi, 'so\'m');
// }

//6
// let parolCheck= prompt('Parol nima?')
// if(parolCheck=='sarimsoqpiyoz'){
//     alert('Salom, parol to\'g\'ri')
// }else {
//     alert('Parol xato')
// }

//7
// let yoshingizNechi= +prompt('Yoshingiz nechi?')
// if(yoshingizNechi>0 && yoshingizNechi<=30){
//     console.log('Siz hali yoshsiz');
// } else if(yoshingizNechi>30 && yoshingizNechi<=60){
//     console.log('Yoshiz katta ekan');
// }else if(yoshingizNechi>60 && yoshingizNechi<=100){
//     console.log('Siz qari ekansiz');
// }else{
//     console.log('Siz mavjud bo\'lmagan yoshni kiritdingiz');
// }





