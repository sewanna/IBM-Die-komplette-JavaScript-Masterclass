"use strict"

let fruits= "  jabłka , mango, +++gruszka, śliwka  " ;
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

//Zadanie 2 -znalezienie pozycji plusów i zapisanie ich jako zmienne
//console.log(fruits.indexOf("+"))
//lub
let plus = fruits.indexOf ("+++")
//console.log(plus)

//Zadanie 3 i 4-wycięcie plusów i wyświetlenie w konsoli wyniku
//console.log(fruits.replace("+++", ""))
//console.log(fruits.slice(2, 17) + fruits.substr(21, 50))
//console.log(fruits.substr(21, 50));
//lub
//console.log(fruits.substr(0, plus) + fruits.substr(plus +3))