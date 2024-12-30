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

    subject(x, y) {
        return x - y;
    }
}

console.log(calc.add(2, 5));