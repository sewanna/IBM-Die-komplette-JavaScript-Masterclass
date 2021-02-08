//zadania dla początkujących- stringi

"use strict"


//let fruits= "  jabłka , mango, +++gruszka, śliwka  " 
//fruits = fruits.replace("+++" , "")
//let list ="- \n"
//console.log(list.repeat(6))
//let fruits2 = (fruits.substr(2,15))
//let fruits1 = (fruits.substr(21))
//let all = fruits2 + fruits1;

//Zadanie 1- usunąć puste znaki z przodu i końca tekstu.
//console.log(fruits.trim()) 
//lub
//fruits=fruits.trim()
//console.log(fruits)

//Zadanie 2 -znalezienie pozycji plusów i podanie pozycji w konsoli
//console.log(fruits.indexOf("+"))
//lub
//let plus = fruits.indexOf ("+++")
//let line ="\n-"
//console.log(plus)

//Zadanie 3 i 4-wycięcie plusów i wyświetlenie w konsoli wyniku
//console.log(fruits.slice(2, 17) + fruits.substr(21, ))
//lub
//console.log(fruits.substr(0, plus) + fruits.substr(plus +3))

//Zadanie 5 - wyświetlić stringa w formie listy, z myślnikiem

let fruits= "  jabłka , mango, +++gruszka, śliwka  " 
let lista="Lista zakupów: \n"
fruits = fruits.replace("+++" , "")
fruits=fruits.trim()
console.log("-".repeat(20))
console.log( lista + " - " + fruits.replace("," , "\n -").replace("," , "\n -").replace("," , "\n -").replace("," , "\n -"))
console.log("-".repeat(20))

