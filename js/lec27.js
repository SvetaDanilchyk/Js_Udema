// Место для первой задачи
function sayHello(name) {
    let str = `Привет,${name}!`;
     return str;
}

console.log(sayHello("Anton"));
// Место для второй задачи
function returnNeighboringNumbers(num) {
    return [num -1, num, num +1];
}
console.log(returnNeighboringNumbers(5));

// Место для третьей задачи
function getMathResult(a, b) {
    let str = '';
    let number = 0;

    if (typeof a == "number" && typeof b == "number" && b > 0) {

        for(let i = 0; i < b; i++)
        {
            number += a; 
            if (i === b-1) {
                str += `${number}`;
            } else {            
                str += `${number}---`;
            }
        }
    } else {
        return a;
    }

    return str;
}

console.log(getMathResult(5,3));
console.log(getMathResult(3,10));
console.log(getMathResult(10,5));
console.log(getMathResult(10,0));
console.log(getMathResult(20,-5));
