"use strict"
let great = "test!" 
console.log(great.length) //length-długosc stringa
console.log(great.charAt(4)) //wyswietli 4 znak w stringu. Gdy liter będzie mniej- nie pokaze zadnej wartości
console.log(great[4]) //wyswietli 4 znak w stringu tak jak charArt. Gdy liter będzie mniej- pokaże wynik undefined
console.log(great.indexOf("!")) // wyswietli na którym miejscu w stringu znajduje sie wykrzyknik,ale tylko pierwszy.Gdy jest wiecej kolejnego miejsca nie wyswietli.
console.log(great.indexOf("!" , 10)) // wyswietli na którym miejscu w stringu znajduje sie wykrzyknik w ciagu max. 10 znaków.
console.log(great.toUpperCase()) // zamienia wszystko na duże litery
console.log(great.toLowerCase()) // zamienia wszystko na małe litery
//console.log(great.replace"!" , "!!!") //zamieni jeden wykrzyknik na 3
console.log(great.trim()) //w przypadku gdy string ma spacje na początku,końcu nie bierze ich pod uwagę- przydatne np. przy adresach mailowych
console.log(great.length + 5) //length to długosc stringa czyli liczba/number. Na number można dokonywać operacje, więc można do niego dodać np. 5
console.log("great\nWelt" )// metoda /n -Welt bedzie napisany w nowej linii /n nkazuje zapis od nowej linii
console.log(great.repeat(10)) //metoda repeat powtórzy 10 razy zmienną great
console.log(great.slice(3 , 5)) //metoda slice wyświetli stringa od podanej liczby-np tutaj tekst będzie się wyświetlał od 3 do 5. Ograniczenie drugie nie nusi byc okreslone.
console.log(great.substr(1, 4)) //metoda identyczna jak slice
