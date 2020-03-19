function toString(number) {
    if(number < 0 || number > 999){
        console.log("Неверное число");
        return null;
    }
    else{
        var a = Array(3);
        var b = parseInt(number/100);
        switch(b){
            case 0:
                a[0] = "";
                break;
            case 1:
                a[0] = "Сто";
                break;
            case 2:
                a[0] = "Двести";
                break;
            case 3:
                a[0] = "Триста";
                break;
            case 4:
                a[0] = "Четыреста";
                break;
            case 5:
                a[0] = "Пятьсот";
                break;
            case 6:
                a[0] = "Шестьсот";
                break;
            case 7:
                a[0] = "Семьсот";
                break;
            case 8:
                a[0] = "Восемьсот";
                break;
            case 9:
                a[0] = "Девятьсот";
        }
        b = parseInt((number % 100) / 10);
        switch(b){
            case 0:
                a[1] = "";
                break;
            case 1:
                switch(number % 10){
                    case 0:
                        a[1] = "десять";
                        a[2] = "";
                        return a;
                    case 1:
                        a[1] = "одиннадцать";
                        a[2] = "";
                        return a;
                    case 2:
                        a[1] = "двенадцать";
                        a[2] = "";
                        return a;
                    case 3:
                        a[1] = "тринадцать";
                        a[2] = "";
                        return a;
                    case 4:
                        a[1] = "четырнадцать";
                        a[2] = "";
                        return a;
                    case 5:
                        a[1] = "пятнадцать";
                        a[2] = "";
                        return a;
                    case 6:
                        a[1] = "шестнадцать";
                        a[2] = "";
                        return a;
                    case 7:
                        a[1] = "семнадцать";
                        a[2] = "";
                        return a;
                    case 8:
                        a[1] = "восемнадцать";
                        a[2] = "";
                        return a;
                    case 9:
                        a[1] = "девятнадцать";
                        a[2] = "";
                        return a;
                }
                break;
            case 2:
                a[1] = "двадцать";
                break;
            case 3:
                a[1] = "тридцать";
                break;
            case 4:
                a[1] = "сорок";
                break;
            case 5:
                a[1] = "пятьдесят";
                break;
            case 6:
                a[1] = "шестьдесят";
                break;
            case 7:
                a[1] = "семьдесят";
                break;
            case 8:
                a[1] = "восемьдесят";
                break;
            case 9:
                a[1] = "девяносто";
        }
        b = number % 10
        switch(b){
            case 0:
                if(a[0] == "" && a[1] == "")    a[2] = "Ноль";
                else    a[2] = "";
                break;
            case 1:
                a[2] = "один";
                break;
            case 2:
                a[2] = "два";
                break;
            case 3:
                a[2] = "три";
                break;
            case 4:
                a[2] = "четыре";
                break;
            case 5:
                a[2] = "пять";
                break;
            case 6:
                a[2] = "шесть";
                break;
            case 7:
                a[2] = "семь";
                break;
            case 8:
                a[2] = "восемь";
                break;
            case 9:
                a[2] = "девять";          
        }
        return a;
    }
}

console.log(toString(0).join(" "));
console.log(toString(999).join(" "));
console.log(toString(11).join(" "));
console.log(toString(4).join(" "));
console.log(toString(150).join(" "));
console.log(toString(9999));
