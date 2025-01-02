// creates variables

let num = 0;

/* while(num < 3) {
    console.log(num);
    num++;
}
*/
const calc = {
    add(x, y) {
        return x + y;
    },

    subtr(x, y) {
        return x - y;
    },

    multi(x,y) {
        return x * y;
    },

    divi(x,y) {
        return x / y;
    },
}

let input = calc.add(7+9); // 16

calc.subtr(input - 3); // 13

calc.multi(input * 5); // 65

calc.divi(input / 5); // 13

console.log(input); // should print 13