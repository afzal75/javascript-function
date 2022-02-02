var i = 0;

while (i < 15){
    console.log(i);
    if (i == 5) {
        break;
    }
    i++
}

for (var i = 0; i < 10; i++){
    if(i == 7) {
        break;
    }
    console.log(i)
}

var numbers = [11, 14, 45, 122, 35, 67, 88, 99, 22];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers [i];
    console.log(number);
    if(number > 100) {
        break;
    }
}

for (var i = 0; i < numbers.length; i++) {
    var number = numbers [i];
    if (number > 90) {
        continue;
    }
    console.log(number);
}