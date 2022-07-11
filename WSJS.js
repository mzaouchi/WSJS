// JavaScript Data Types

console.log("Amine")
console.log('Hello Mahmoud')

var str = 'Amine'
console.log(str)
console.log(typeof(str))

var num = 20
console.log(num)
console.log(typeof(num))

var bool = false
console.log(bool)
console.log(typeof(bool))

var tab = [1,2,3,4,5]
console.log(tab)
console.log(typeof(tab))
console.log(tab[4])

var obj = {name : "Ghazi",age : 29, city : "Rades"}
console.log(obj)
console.log(typeof(obj))
console.log(obj.name)
console.log(obj.age)
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

var tab = [1,2,3]
console.log(typeof(tab[3]))

var a = null
console.log(a)
console.log(typeof(a))

// JavaScript Operators

// ARITHMETIC OPERATORS
var a = 5
var b = 2
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
a++ 
a = a+1
console.log(a)
a--
a = a-1
// a+= 6
console.log(a)
console.log(5**2)

// EQUALITY OPERATORS 

var a = 3
var b = 6
var c = '3'
console.log(a == b)
console.log(a == c)
console.log(a === b)
console.log(a === c)

var a = 3
var b = 6
var c = '3'
console.log(a != b)
console.log(a != c)
console.log(a !== b)
console.log(a !== c)

var a = 2
var b = 6
console.log(a>b)
console.log(a<b)
console.log(a<=b)
console.log(a>=b)

// LOGICAL OPERATORS 

var a = 2
var b = 6
var c = 9
console.log(a<b && b<c)
console.log(a < b && b > c)
console.log(a<b || c<b)
console.log(c<b || b<a)

// JavaScript Conditionals

var age = 54

if(age<=18){
  console.log('Jeune')
}

// if(age>18 && age<=50){
//   console.log('Adulte')
// }else{
//   console.log('Vieux')
// }

var age = 2

if(age<=18){
  console.log('Jeune')
}else if(age<=50){
  console.log('Adulte')
}else{
  console.log('Vieux')
}

var month = 12
switch(month){
  case 1 : console.log('Janvier')
            break
  case 3 : console.log('Mars')
            break
  case 12 : console.log('Decemebre')
            break
  default : console.log('Introuvable')
}

// JavaScript Loops

var tab = [1,2,3,4]
// console.log(tab[2])
// for(var i = 0;i<tab.length;i++){
//   console.log(tab[i])
// }

for(var ind in tab){
  console.log(ind)
  // console.log(tab[ind])
}
console.log('-----------')
for( var contenu of tab){
  console.log(contenu)
}

var tab = [1,2,3,4]

var i = 8

while (i<tab.length) {
    console.log(tab[i])
    i++
}

// do {
//     console.log(tab[i])
//     i++
// } while (i<tab.length);



