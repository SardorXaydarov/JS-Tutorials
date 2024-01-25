// let ism= prompt('Ismingizni kiriting')
// let yosh= +prompt('Yoshingizni kiriting')
// let oy= yosh*12
// let hafta= (yosh*365/7).toFixed()
// let kun= yosh*365
// let soat= yosh*365*24
// let minut= yosh*365*24*60
// let sekund= yosh*365*24*60*60
// alert(`Qadrli ${ism}. Siz ${oy} oy , ${hafta} hafta, ${kun} kun, ${soat} soat. ${minut} minut, ${sekund} soniya yashagansiz`)

const ism= prompt("Ism kiriting:")

const imslar= ['Sardor', 'Anvar', 'Faxriyor']
if(imslar.includes(ism)){
    alert(`Ha ${ism} bor`)
}else{
    alert(`Afsus ${ism} yo'q`)
}