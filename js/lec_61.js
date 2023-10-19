
function amountOfPagesT(summary){
    let result = '';
    let n = 0;

    for(let i = 1; i <= summary; i++) {
        result += i;

        if(result.length === summary) {
            n = i;
            break;
        }
    }  
    return n;
}

console.log(amountOfPagesT(25));
console.log(amountOfPagesT(5));
console.log(amountOfPagesT(1095));
console.log(amountOfPagesT(185));

function isPangram(string) {
    let str = 'qwertyuiopasdfghjklzxcvbnm';
    let result = ' ';

    for(let i = 1; i <= 26; i++) {
        if(string.includes(str[i-1])) {
           result = str.slice(i);            
        }
        if(result.length == 0) {
            return true;
        }
    }

    return false;
}

/*

// Вариант, когда строка переводится в нижний регистр до всех операций только 1 раз
// Это должно экономить ресурсы компьютера
function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
}

// С другим методом и строка каждый раз преобразовывается в коллбэке
function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
}

// При помощи цикла
function isPangram(str) {
    letters: for (var c = 0; c < 26; c++) {
        for (let i = 0; i < str.length; i++) {
            let s = str.charCodeAt(i)
            if (s < 65 || s > 90 && s < 97 || s > 122) continue
            if (s === 65 + c || s === 97 + c) continue letters
        }
      
        return false
    }
    
    return true
}

// При помощи Set
function isPangram(string) {
    return new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
}

// С использованием регулярных выражений
function isPangram(string){
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}

 */

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.log(isPangram("llo worl"));

function isPangramO(string) {
    let str = '';
    let res = 0;

    for(let i = 0; i < string.length; i++) {
        str = `/${string[i]}/gi`;
        
        let obj = eval(str);
        res = (string.match(obj));

        if(res.length > 2){
            return false;
        } 
    }

    return true;
}

function deepCount(a){

    let count = a.length;
    for(let i = 0; i < a.length; i++) if(Array.isArray(a[i])) count += deepCount(a[i]);

    return count;
}
console.log(deepCount([1, 5, 3]));
console.log(deepCount(["1", 5, "3", ["10"]]));
console.log(deepCount([1, 2, [3, 4, [5]]]));
console.log(deepCount([]));
console.log(deepCount([[[[[[[[[]]]]]]]]]));