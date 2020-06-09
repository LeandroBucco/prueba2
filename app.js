const calculator = require('./calculator');
const readlineSync = require('readline-sync'),
    operaciones = ['SUMAR', 'RESTAR', 'MULTIPLICAR', 'DIVIDIR'],
    index = readlineSync.keyInSelect(operaciones, 'Que quiere hacer?');
if (index != -1){
    "Gracias por participar "

let datos = readlineSync.question(`Ingrese los numeros a ${operaciones[index]}: `);

datos = datos.split(" ");
datos = datos.filter(function(dato){
    return dato !=" "
console.log (datos);  
})
let numeros = datos.map(function(elemento){
return parseInt(elemento)

})
 
 //console.log(numero)

 switch(index){
     case 0 :
        calculator.sumar(numeros)

         break
         case 1:
             calculator.restar(numeros)
             
             break
        case 2:
            calculator.multiplicar(numeros)
            break
            case 3:
                calculator.dividir(numeros)
                break
                case-1:
                console.log("Gracias por usar CALCULATOR");
                break
 }
}else{
    console.log("Gracias por usar CALCULATOR")
}