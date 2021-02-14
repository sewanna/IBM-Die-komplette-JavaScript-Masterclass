"use strict"


//do rachunku doliczany jest napiwek w wys 5% rachunku. Wyliczyć rachunek z napiwiek, pamiętając o zaokrągleniu kwoty rachunku)

let price = 33.33
let trinkgeld = price *  5 / 100
let priceall= price + trinkgeld
console.log("Wyskokość rachunku: "  + price+'\n'+ "Napiwek:"+  trinkgeld.toFixed(2) + "\n" + "Razem: " + priceall.toFixed(2))



let spacja="\n"+"\n"
console.log(spacja)

// z podanej liczby wymiernej wyrzucić liczbę całkowitą oraz resztę do 2 miejsc po przecinku

let ko = 12.98435464 //wymierna
let bo = Math.floor(ko) - 0 //całkowita
let mo =  ko -  bo
console.log("Podana liczba: " + ko + "\n" + "Liczba calkowita: " + bo + "\n" +  "Liczba reszta z odejmowania:"+ mo)


console.log(spacja)

//stacja benzynowa- wyliczyć w jakich monetach zostanie wydana reszta. 
//Zakładamy,że w kasie są wszystkie rodzaje monet, nie ma banknotów.
//zapis angielski zamienić na europejski.
//Na początku należy podać największe wartości
//Tip:obliczać w centach i modulo

let reszta = 13.33
let cal = Math.floor(reszta)
let cent = reszta - cal

let onecent= 1/100
let twocent= onecent * 2
let fivecent= onecent * 5
let tencent= onecent * 10
let twentycent= onecent * 20
let fiftycent= onecent * 50
let oneeuro=onecent*100
let twoeuro=oneeuro*2

console.log(reszta)
console.log(cal)
console.log(cent)
console.log(onecent)
console.log(twocent)
console.log(fivecent)
console.log(tencent)
console.log(twentycent)
console.log(fiftycent)
console.log(oneeuro)
console.log(twoeuro)





console.log(spacja)

let amuntStr = "15,37"
let amunt = parseFloat(amuntStr.replace (",",".")) * 100 //zamienia przecinek na kropkę i mnoży x 100. To kwota zamieniona na centy

console.log(amunt)










































