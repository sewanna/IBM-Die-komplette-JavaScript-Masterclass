"use strict"

let fruits= "  jabłka , mango, +++gruszka, śliwka  " 
let fruits2 = (fruits.substr(2,15))
let fruits1 = (fruits.substr(21))
let all = fruits2 + fruits1;
console.log(all);
//Zadanie 1- usunąć puste znaki z przodu i końca tekstu
//console.log(fruits.trim()) 

//Zadanie 2 -znalezienie pozycji plusów i zapisanie ich jako zmienne
//console.log(fruits.indexOf("+"))

//Zadanie 3 i 4-wycięcie plusów i wyświetlenie w konsoli wyniku
//console.log(fruits.replace("+++", ""))
//console.log(fruits.slice(2, 17));
//console.log(fruits.substr(21, 50));

//Zadanie 5- wyświetlić w konsoli w formie listy