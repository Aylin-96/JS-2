function toNumber(a, b, c){
    var number = 0;
    switch(a){
        case "Сто":
        case "сто":
            number = 100;
            break;
        case "Двести":
        case "двести":
            number = 200;
            break; 
        case "Триста":
        case "триста":
            number = 300;
            break;        
        case "Четыреста":
        case "четыреста":
            number = 400;
            break; 
        case "Пятьсот":
        case "пятьсот":
            number = 500;
            break;
        case "Шестьсот":
        case "шестьсот":
            number = 600;
            break; 
        case "Семьсот":
        case "семьсот":
            number = 700;
            break;
        case "Восемьсот":
        case "восемьсот":
            number = 800;
            break; 
        case "Девятьсот":
        case "девятьсот":
            number = 900;
            break;
        case "":
            break;
        default:
            return NaN;
    }
    switch(b){
        case "Десять":
        case "десять":
            number += 10;
            return number;
        case "Одиннадцать":
        case "одиннадцать":
            number += 11;
            return number;
        case "Двенадцать":
        case "двенадцать":
            number += 12;
            return number;
        case "Тринадцать":
        case "тринадцать":
            number += 13;
            return number;      
        case "Четырнадцать":
        case "четырнадцать":
            number += 14;
            return number;
        case "Пятнадцать":
        case "пятнадцать":
            number += 15;
            return number;
        case "Шестнадцать":
        case "шестнадцать":
            number += 16;
            return number;
        case "Семнадцать":
        case "семнадцать":
            number += 17;
            return number;
        case "Восемнадцать":
        case "восемнадцать":
            number += 18;
            return number;
        case "Девятнадцать":
        case "девятнадцать":
            number += 19;
            return number;
        case "Двадцать":
        case "двадцать":
            number += 20;
            break; 
        case "Тридцать":
        case "тридцать":
            number += 30;
            break;        
        case "Сорок":
        case "сорок":
            number += 40;
            break; 
        case "Пятьдесят":
        case "пятьдесят":
            number += 50;
            break;
        case "Шестьдесят":
        case "шестьдесят":
            number += 60;
            break; 
        case "Семьдесят":
        case "семьдесят":
            number += 70;
            break;
        case "Восемьдесят":
        case "восемьдесят":
            number += 80;
            break; 
        case "Девяносто":
        case "девяносто":
            number += 90;
            break;
        case "":
            number += 0;
            break;
        default:
            return NaN;
    }
    switch(c){
        case "Ноль":
        case "ноль":
            number = 0;
            break;
        case "Один":
        case "один":
            number += 1;
            break;
        case "Два":
        case "два":
            number += 2;
            break;
        case "Три":
        case "три":
            number += 3;
            break; 
        case "Четыре":
        case "четыре":
            number += 4;
            break;        
        case "Пять":
        case "пять":
            number += 5;
            break; 
        case "Шесть":
        case "шесть":
            number += 6;
            break;
        case "Семь":
        case "семь":
            number += 7;
            break; 
        case "Восемь":
        case "восемь":
            number += 8;
            break;
        case "Девять":
        case "девять":
            number += 9;
            break; 
        case "":
            number += 0;
            break;
        default:
            return NaN;  
    }
    return number;
}

console.log(toNumber("девятьсот", "девяносто", "девять"));
console.log(toNumber("", "", "Ноль"));
console.log(toNumber("", "одиннадцать", ""));
console.log(toNumber("", "", "четыре"));
console.log(toNumber("сто", "пятьдесят", ""));