// Место для первой задачи
function calculateVolumeAndArea(a) {

    if(a != '' && Number.isInteger(a) && a > 0) {

        let V = 0;
        V = a * a *a;

        let S = 0;
        S = (a * a) * 6;

        return `Объем куба: ${V}, площадь всей поверхности: ${S}`;
    } else {
        return 'При вычислении произошла ошибка';
    }

}
console.log(calculateVolumeAndArea(5));
console.log(calculateVolumeAndArea(15));
console.log(calculateVolumeAndArea(15.5));
console.log(calculateVolumeAndArea('155'));
console.log(calculateVolumeAndArea(-15));

// Место для второй задачи
function getCoupeNumber(num) {
    if (num > 0 && num <= 36 && Number.isInteger(num)) {

        let wagonNumber = 0;

        return Math.ceil(num / 4);
    } else if( num === 0 || num > 36 ) {
        return "Таких мест в вагоне не существует";
    } else {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

}

console.log(getCoupeNumber(14));
console.log(getCoupeNumber(33));
console.log(getCoupeNumber(300));
console.log(getCoupeNumber(0));
console.log(getCoupeNumber(7.7));
console.log(getCoupeNumber(-10));
console.log(getCoupeNumber('Hello'));


// Место для первой задачи
function getTimeFromMinutes(minutes) {

        if(typeof minutes != 'number' || minutes < 0 || !Number.isInteger(minutes) )
        {
            return "Ошибка, проверьте данные";
        } else {
        let hour = 0;       
        let minuts = 0;

        hour =  Math.floor(minutes / 60);
        minuts = minutes - (60 * hour);   

        switch(hour){
            case 0:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:    
                return `Это ${hour} часов и ${minuts} минут`;
            case 1:
                return `Это ${hour} час и ${minuts} минут`;
            case 2:
            case 3:
            case 4: 
                return `Это ${hour} часа и ${minuts} минут`;        
        }
        }

}

console.log(getTimeFromMinutes(140));
console.log(getTimeFromMinutes(310));
console.log(getTimeFromMinutes(190));
console.log(getTimeFromMinutes(0));
console.log(getTimeFromMinutes(-150));


// Место для второй задачи
function findMaxNumber(a, b, c, d) {

    if( a > 0 && typeof a == "number" && b > 0 && typeof b == "number" && c > 0 && typeof c == "number" && d > 0 && typeof d == "number"  ) {
        let  arr = [a, b, c, d];
        let count = 0;
        while(count < 2)
        {
            for (let i = 0; i < arr.length - 1; i++)
            {
                if(arr[i] > arr[i + 1])
                {
                    let c = arr[i] 
                    arr[i] = arr[i + 1];
                    arr[i+1] = c;               
                }
            }
            count++;
        }
        
        return (arr[arr.length - 1]);
    } else {
        return 0;
    }
}
console.log(findMaxNumber(5, 2, 7,3));
console.log(findMaxNumber(1, 5, '6', '10'));

function fib(a) {
    let str = '';
    let arr = [0, 1];

    if(Number.isInteger(a) && a > 1) {

        for(let i = 1; i < a-1; i++) {
           arr[i+1] = arr[i] + arr[i-1]
        }
       // console.log(arr)

        for(let i = 0; i < arr.length; i++)
        {
            if(i === arr.length - 1) {
                str += arr[i];
            } else {
                str += arr[i] + " ";
            }
        }
    
        return str;
    } else if (a === 1){
        return str + 0;
    } else {
        return str;
    }
    
}

console.log(fib(4));
console.log(fib(7));
console.log(fib('7'));
console.log(fib(0));
console.log(fib(1));